import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Icon, List } from 'antd'
import moment from 'moment'
import { TagListWrapper } from './style'
import { actionCreators } from './store'
import { actionCreators as detailActionCreators} from '../detail/store'

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class TagList extends PureComponent {

	render() {
    const { pages, onChangePage, tagArtList, getDetailInfo } = this.props
		const tag = this.props.match.params.tag
		console.log(pages.total)
		return (
			<TagListWrapper>
			{console.log('articlelist')}
				<List
					itemLayout="vertical"
					size="large"
					pagination={{
						onChange: page => onChangePage(page, tag),
						current: pages.current,
						total: pages.total,
						pageSize: pages.pageSize,
					}}
					dataSource={tagArtList}
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
									<Link to={'/detail/' + item.id} style={{ fontSize: 30 }} onClick={() => getDetailInfo(item.id)}>
										{item.title}
									</Link>
								}
							/>
							<div dangerouslySetInnerHTML={{__html: item.content}}></div>
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
}

const mapStateToProps = (state) => {
  return {
    pages: state.getIn(['tagList', 'pages']).toJS(),
    tagArtList: state.getIn(['tagList', 'tagArtList']).toJS()
  }
}

const mapDispatchToProps = (dispatch) => ({
	getTagArtListInfo(tag) {
		dispatch(actionCreators.getTagArtListData(tag))
	},
	getDetailInfo(id) {
		dispatch(detailActionCreators.getDetailData(id))
	},
	onChangePage(page, tag) {
		dispatch(actionCreators.changePage(page, tag))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(TagList)