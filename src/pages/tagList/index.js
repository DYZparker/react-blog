import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Icon, List } from 'antd'
import moment from 'moment'
import { TagListWrapper, LinkTitle, TagListContent } from './style'
import { actionCreators } from './store'
import marked from 'marked'

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class TagList extends PureComponent {

	render() {
		const { onChangePage, articleList, pages } = this.props
		const Pages = pages.toJS()
		const ArticleList = articleList.toJS()
		const tag = this.props.match.params.tag
		return (
			<TagListWrapper>
			{console.log('articlelist!!!')}
				<List
					itemLayout="vertical"
					size="large"
					pagination={{
						onChange: page => onChangePage(page, tag),
						current: Pages.current,
						total: Pages.total,
						pageSize: Pages.pageSize,
					}}
					dataSource={ArticleList}
					renderItem={item => (
						<List.Item
							key={item.title}
							actions={[
								<IconText type="calendar" text={moment(item.date).format('YYYY-MM-DD')} key="list-vertical-calendar" />,
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
								title={
									<LinkTitle to={'/detail/' + item._id}>
										{item.title}
									</LinkTitle>
								}
							/>
							<TagListContent dangerouslySetInnerHTML={{__html: marked(item.content)}} />
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
	
  UNSAFE_componentWillReceiveProps(nextProps) {
		const { getTagArtListInfo } = this.props
		const tag = nextProps.match.params.tag
		if (nextProps.location.pathname !== this.props.location.pathname) {
			getTagArtListInfo(tag)
		} 
 	}
}

const mapStateToProps = (state) => {
  return {
    pages: state.getIn(['tagList', 'pages']),
    articleList: state.getIn(['tagList', 'articleList'])
  }
}

const mapDispatchToProps = (dispatch) => ({
	getTagArtListInfo(tag) {
		dispatch(actionCreators.getTagArtListData({page: 1, search:{tags: tag}}))
	},
	onChangePage(page, tag) {
		dispatch(actionCreators.getTagArtListData({page, search:{tags: tag}}))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(TagList)