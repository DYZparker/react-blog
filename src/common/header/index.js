import React, { PureComponent } from 'react'
import { Row, Col, Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'
import { 
	HeaderWrapper,
	HeaderTitle
} from './style'

const { SubMenu } = Menu

class Header extends PureComponent {

	state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

	render() {
		return (
			<HeaderWrapper>
				<Row type="flex" justify="center">
					<Col xs={24} sm={24} md={10} lg={15} xl={10}>
						<Link to='/'>
							<HeaderTitle>云中的博客</HeaderTitle>
						</Link>
					</Col>
					<Col xs={0} sm={0} md={14} lg={8} xl={8}>
						<Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" >
							<Menu.Item key="home">
								<Link to='/'>
									<Icon type="home" />
									网站首页
								</Link>
							</Menu.Item>
							<SubMenu
								title={
									<span className="submenu-title-wrapper">
										<Icon type="book" />
										学习笔记
									</span>
								}
							>
							<Menu.Item key="html">Html</Menu.Item>
							<Menu.Item key="javascript">JavaScript</Menu.Item>
							<Menu.Item key="node">Node</Menu.Item>
							<Menu.Item key="vue">Vue</Menu.Item>
							<Menu.Item key="react">React</Menu.Item>
							<Menu.Item key="other">Other</Menu.Item>
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
}

export default Header