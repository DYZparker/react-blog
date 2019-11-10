import React, { PureComponent } from 'react'
import { Icon, Avatar, Divider } from 'antd'
import { connect } from 'react-redux'
import { 
	AutorWrapper,
	AutorContent,
	AutorAccount
} from '../style'

class Author extends PureComponent {

	render() {
    const { accountList } = this.props
		return (
			<AutorWrapper>
			{console.log('autor')}
				<Avatar className="autor-avatar" size={100} icon="user" src='http://122.51.57.99:7777/image/ssw.jpg' />
				<AutorContent>
					<p>Web前端学习，Vue、React框架实践，个人服务器端数据库连接，博客项目实战</p>
					<Divider>联系方式</Divider>
					{accountList.map((item) => {
						return(<AutorAccount key={item.type}><a href={item.url}><Icon type={item.type} /></a><span>{item.content}</span></AutorAccount>)
					})}
				</AutorContent>
			</AutorWrapper>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    accountList: state.getIn(['sider', 'accountList']).toJS()
  }
}

export default connect(mapStateToProps, null)(Author)