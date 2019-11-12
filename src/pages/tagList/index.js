import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Icon, List } from 'antd'
import { TagListWrapper } from './style'
import { actionCreators } from './store'

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class TagList extends PureComponent {

	render() {
    const { tagArtList } = this.props
		return (
			<TagListWrapper>
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
					dataSource={tagArtList}
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
			</TagListWrapper>
		)
	}

	componentDidMount() {
		const { getTagArtListInfo } = this.props
		const tag = this.props.match.params.tag
		getTagArtListInfo(tag)
	}

	// componentWillReceiveProps(nextProps) {
	// 	console.log('======================')
	// 	console.log(nextProps)
	// 	console.log(this.props)
	// 	if (nextProps.location.pathname !== this.props.location.pathname) {
	// 		console.log('不一样')
	// 		const { getTagArtListInfo } = this.props
	// 		const tag = this.props.match.params.tag
	// 		getTagArtListInfo(tag)
	// 	} 
	// }
}

const mapStateToProps = (state) => {
  return {
    tagArtList: state.getIn(['tagList', 'tagArtList']).toJS()
  }
}

const mapDispatchToProps = (dispatch) => ({
	getTagArtListInfo(tag) {
		dispatch(actionCreators.getTagArtListData(tag))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(TagList)