import React, { PureComponent } from 'react'
import { Menu, Icon, Modal, message } from 'antd'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { actionCreators as tagArtListActionCreators } from '../../../pages/tagList/store'

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
    const { history, clickTag, showLogin, showLogout, login } = this.props
    if(e.keyPath.length === 1) {
      if(e.keyPath[0] === '/login') {
        return login ? showLogout() : showLogin()
      }else {
        history.push(e.key)
      }
    }else {
      const tag = e.key.split('/').pop()
      history.push(e.key)
      clickTag(tag)
    }
    return false
  }

  handleOk = () => {
    const { login, toggleLogin, closeLogout } = this.props
    toggleLogin(login)
    closeLogout()
    message.success('您已退出登录!')
  }
	
  render() {
    const { menuList, logoutVisible, closeLogout } = this.props
    const MenuList = menuList.toJS()
    const pathname = this.props.location.pathname
    return (
      <div>
        <Menu onClick={this.handleClick} selectedKeys={[pathname]} mode="horizontal">
          {console.log('Menu')}
          {this.getMenuNodes(MenuList)}
        </Menu>
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
}

const mapStateToProps = (state) => {
  return {
    menuList: state.getIn(['header', 'menuList']),
    login: state.getIn(['header', 'login']),
    logoutVisible: state.getIn(['header', 'logoutVisible'])
  }
}

const mapDispatchToProps = (dispatch) => ({
	// getHeaderInfo() {
	// 	dispatch(actionCreators.getHeaderData())
	// },
	clickTag(tag) {
		dispatch(tagArtListActionCreators.getTagArtListData(tag))
	},
	showLogin() {
    console.log('login')
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
    if(login) {
      dispatch(actionCreators.changeLogoutWord())
    }
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MenuList))