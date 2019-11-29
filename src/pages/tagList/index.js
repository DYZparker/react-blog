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
		const { pages, onChangePage, articleList } = this.props
		const Pages = pages.toJS()
		const ArticleList = articleList.toJS()
		const tag = this.props.match.params.tag
		return (
			<TagListWrapper>
			{console.log('articlelist')}
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
		getTagArtListInfo(1, tag)
	}
}

const mapStateToProps = (state) => {
  return {
    pages: state.getIn(['tagList', 'pages']),
    articleList: state.getIn(['tagList', 'articleList'])
  }
}

const mapDispatchToProps = (dispatch) => ({
	getTagArtListInfo(page, tag) {
		console.log(page)
		console.log(tag)
		dispatch(actionCreators.getTagArtListData(page, tag))
	},
	onChangePage(page, tag) {
		console.log(page)
		dispatch(actionCreators.getTagArtListData(page, tag))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(TagList)