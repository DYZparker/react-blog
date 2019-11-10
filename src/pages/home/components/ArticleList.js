import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { Icon, List } from 'antd'
import { connect } from 'react-redux'
import { ListWrapper } from '../style'

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class ArticleList extends PureComponent {

	render() {
    const { artList } = this.props
		return (
			<ListWrapper>
			{console.log('articlelist')}
				<List
					itemLayout="vertical"
					size="large"
					// pagination={{
					// 	onChange: page => {
					// 		console.log(page);
					// 	},
					// 	pageSize: 5,
					// }}
					dataSource={artList}
					renderItem={item => (
						<List.Item
							key={item.title}
							actions={[
								<IconText type="calendar" text={item.date} key="list-vertical-calendar" />,
								<IconText type="tags" text={item.tags.join('、')} key="list-vertical-tags" />
							]}
							extra={
								<img
									width={272}
									alt="logo"
									src={item.img}
								/>
							}
						>
							<List.Item.Meta
								title={<Link to={'/detail/' + item.id} style={{ fontSize: 30 }}>{item.title}</Link>}
							/>
							{item.content}
						</List.Item>
					)}
				/>
			</ListWrapper>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    artList: state.getIn(['home', 'artList']).toJS()
  }
}

export default connect(mapStateToProps, null)(ArticleList)