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
    const { account } = this.props
		return (
			<AutorWrapper>
			{console.log('autor')}
				<Avatar size={100} icon="user" src={account.src} />
				<AutorContent>
					<p>{account.title}</p>
					<Divider>联系方式</Divider>
					{account.list.map((item) => {
						return(<AutorAccount key={item.type}><a href={item.url}><Icon type={item.type} /></a><span>{item.content}</span></AutorAccount>)
					})}
				</AutorContent>
			</AutorWrapper>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    account: state.getIn(['sider', 'account']).toJS()
  }
}

export default connect(mapStateToProps, null)(Author)