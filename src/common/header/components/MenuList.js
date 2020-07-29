import React, { PureComponent } from 'react'
import { Menu, Icon, Modal, message } from 'antd'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import Login from './Login'
import { checkUserApi } from '../../../api/user'
import { getUser, removeUser } from '../../../utils/auth'

const { SubMenu } = Menu

class MenuList extends PureComponent {

	//列表递归获取
	getMenuNodes = (MenuList) => {
    return MenuList.map(item => {
      if (!item.children) {
        return (
          <Menu.Item key={item.path}>
              <Icon type={item.icon} />
              <span>{item.title}</span>
          </Menu.Item>
        )
      } else {
        return (
          <SubMenu
            key={item.path}
            title={
              <span>
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </span>
            }
					>
						{this.getMenuNodes(item.children)}
					</SubMenu>
        )
      }
    })
  }

  //判断主目录还是子目录并各自添加点击方法
  handleClick = e => {
    const { history, showLogin, showLogout, login, admin } = this.props
    if(e.keyPath.length === 1) {
      if(e.keyPath[0] === '/login') {
        return login ? showLogout() : showLogin()
      }else if(e.keyPath[0] === '/write'){
        return admin ? history.push(e.key) : message.warning('请用管理员账号登陆！')
      }else if(e.keyPath[0] === '/setting'){
        window.open('http://localhost:8080/login')
      }else {
        history.push(e.key)
      }
    }else {
      history.push(e.key)
    }
    return false
  }

  handleOk = () => {
    const { login, toggleLogin, closeLogout, deleteLoginData } = this.props
    toggleLogin(login)
    removeUser()
    deleteLoginData()
    closeLogout()
    message.success('您已退出登录!')
  }

  checkUser = () => {
    const user = getUser()
    const { setLoginData, toggleLogin, login, deleteLoginData } = this.props
    if(user.username) {
      checkUserApi().then(res => {
        if(res.data.code === 5000) {
          deleteLoginData()
          removeUser()
          return message.warning(res.data.data.message)
        }
        setLoginData(user)
        toggleLogin(login)
      })
    }
  }
	
  render() {
    const { menuList, logoutVisible, closeLogout } = this.props
    const MenuList = menuList.toJS()
    const pathname = this.props.location.pathname
    return (
      <div>
        {console.log('MenuList~')}
        <Menu onClick={this.handleClick} selectedKeys={[pathname]} mode="horizontal">
          {this.getMenuNodes(MenuList)}
        </Menu>
				<Login />
        <Modal
          title="退出登录"
          visible={logoutVisible}
          onOk={this.handleOk}
          onCancel={closeLogout}
          okText="确定"
          cancelText="取消"
        >
          <p>您确定要退出吗？</p>
        </Modal>
      </div>
    )
  }

  componentDidMount() {
    this.checkUser()
  }
}

const mapStateToProps = (state) => {
  return {
    menuList: state.getIn(['header', 'menuList']),
    login: state.getIn(['header', 'login']),
    admin: state.getIn(['header', 'admin']),
    logoutVisible: state.getIn(['header', 'logoutVisible'])
  }
}

const mapDispatchToProps = (dispatch) => ({
	showLogin() {
		dispatch(actionCreators.changeLoginVisible(true))
	},
	showLogout() {
		dispatch(actionCreators.changeLogoutVisible(true))
	},
	closeLogout() {
		dispatch(actionCreators.changeLogoutVisible(false))
	},
	toggleLogin(login) {
    const toggle = !login
    dispatch(actionCreators.changeLogin(toggle))
    if(!login) {
      dispatch(actionCreators.changeLoginWord())
    }else {
      dispatch(actionCreators.changeLogoutWord())
    }
  },
  setLoginData(user) {
    dispatch(actionCreators.changeLoginData(user))
  },
  deleteLoginData() {
    dispatch(actionCreators.removeLoginData())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MenuList))