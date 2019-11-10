import React, { PureComponent } from 'react'
import { Row, Col, Menu, Icon } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreators } from './store';
import { 
	HeaderWrapper,
	HeaderTitle
} from './style'

const { SubMenu } = Menu

class Header extends PureComponent {
	render() {
		const { current, headTags, handleClick } = this.props
		console.log('---'+current)
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
						<Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" >
							<Menu.Item key="home">
								<Link to='/'>
									<Icon type="home" />
									网站首页
								</Link>
							</Menu.Item>
							<SubMenu
								title={
									<span>
										<Icon type="detail" />
										学习笔记
									</span>
								}
							>
								{headTags.map((item) => {
									return(
										<Menu.Item key={item}><Link to={'/taglist/' + item}>{item}</Link></Menu.Item>
									)
								})}
							</SubMenu>
							<Menu.Item key="write">
								<Link to='/write'>
									<Icon type="edit" />
									写文章
								</Link>
							</Menu.Item>
							<Menu.Item key="aboutme">
								<Link to='/aboutme'>
									<Icon type="idcard" />
									关于我
								</Link>
							</Menu.Item>
						</Menu>
					</Col>
				</Row>
			</HeaderWrapper>
		)
	}

	componentDidMount() {
		const { handleClick } = this.props
		console.log(this.props.location.pathname)
		console.log(this.props)
		const pathname = this.props.location.pathname
    switch(pathname) {
			case pathname.startsWith('/detail'):
					return handleClick('detail');
			case pathname.startsWith('/write'):
					return handleClick('write');
			case pathname.startsWith('/aboutme'):
					return handleClick('aboutme')
			default:
					return handleClick('home')
    }
	}
}

const mapStateToProps = (state) => {
  return {
		current: state.getIn(['header', 'current']),
    headTags: state.getIn(['header', 'headTags']).toJS()
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
			handleClick (e) {
				dispatch(actionCreators.changeCurrent(e.key))
			}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header))