import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { Icon, List } from 'antd'
import moment from 'moment'
import { connect } from 'react-redux'
import { ListWrapper } from '../style'
import { actionCreators } from '../store'
import { actionCreators as detailActionCreators} from '../../detail/store'

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class ArticleList extends PureComponent {
	render() {
		const { pages, artList, onChangePage, getDetailInfo } = this.props
		return (
			<ListWrapper>
			{console.log('articlelist')}
				<List
					itemLayout="vertical"
					size="large"
					pagination={{
						onChange: page => onChangePage(page),
						current: pages.current,
						total: pages.total,
						pageSize: pages.pageSize,
					}}
					dataSource={artList}
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
									<Link to={'/detail/' + item._id} style={{ fontSize: 30 }} onClick={() => getDetailInfo(item.id)}>
										{item.title}
									</Link>
								}
							/>
							<div dangerouslySetInnerHTML={{__html: item.content}}></div>
						</List.Item>
					)}
				/>
			</ListWrapper>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    pages: state.getIn(['home', 'pages']).toJS(),
    artList: state.getIn(['home', 'artList']).toJS()
  }
}

const mapDispatchToProps = (dispatch) => ({
	getDetailInfo(id) {
		dispatch(detailActionCreators.getDetailData(id))
	},
	onChangePage(page) {
		dispatch(actionCreators.changePage(page))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList)