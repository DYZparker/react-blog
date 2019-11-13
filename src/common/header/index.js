import React, { PureComponent } from 'react'
import { Row, Col, Menu, Icon } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { actionCreators as tagArtListActionCreators } from '../../pages/tagList/store'
import { 
	HeaderWrapper,
	HeaderTitle
} from './style'


const { SubMenu } = Menu

class Header extends PureComponent {
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
		const { history, clickTag } = this.props
		if(e.keyPath.length === 1) {
			history.push(e.key)
		}else {
			const tag = e.key.split('/').pop()
			history.push(e.key)
			clickTag(tag)
		}
  };
	
	render() {
		const { menuList } = this.props
		const pathname = this.props.location.pathname
		return (
			<HeaderWrapper>
			{console.log('header')}
				<Row type="flex" justify="center">
					<Col xs={24} sm={24} md={10} lg={15} xl={10}>
						<Link to='/'>
							<HeaderTitle>云中的博客</HeaderTitle>
						</Link>
					</Col>
					<Col xs={0} sm={0} md={14} lg={8} xl={8}>
						<Menu onClick={this.handleClick} selectedKeys={[pathname]} mode="horizontal">
							{this.getMenuNodes(menuList)}
						</Menu>
					</Col>
				</Row>
			</HeaderWrapper>
		)
	}

	componentDidMount() {
    const { getHeaderInfo } = this.props
    getHeaderInfo()
	}
}

const mapStateToProps = (state) => {
  return {
    menuList: state.getIn(['header', 'menuList']).toJS()
  }
}

const mapDispatchToProps = (dispatch) => ({
	getHeaderInfo() {
		dispatch(actionCreators.getHeaderData())
	},
	clickTag(tag) {
		dispatch(tagArtListActionCreators.getTagArtListData(tag))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header))