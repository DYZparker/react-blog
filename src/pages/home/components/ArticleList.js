import React, { Component } from 'react'
import { Icon, List } from 'antd'
import moment from 'moment'
import { connect } from 'react-redux'
import { ListWrapper, LinkTitle, ListContent } from '../style'
import { actionCreators } from '../store'
import marked from 'marked'

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class ArticleList extends Component {
	render() {
		const { pages, articleList, onChangePage} = this.props
		const Psges = pages.toJS()
		const ArticleList = articleList.toJS()
		return (
			<ListWrapper>
			{console.log('articlelist~')}
				<List
					itemLayout="vertical"
					size="large"
					pagination={{
						onChange: page => onChangePage(page),
						current: Psges.current,
						total: Psges.total,
						pageSize: Psges.pageSize,
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
							<ListContent
								ref={this.$scrollPreview}
								dangerouslySetInnerHTML={{__html: marked(item.content)}}
							/>
						</List.Item>
					)}
				/>
			</ListWrapper>
		)
	}
  
  shouldComponentUpdate(nextProps,nextState) {
    const { articleList } = this.props
    const ArticleList = articleList.toJS()
    if(ArticleList.length > 0) {
      return nextProps.articleList.toJS()[0]._id !== this.props.articleList.toJS()[0]._id
    }
    return true
  }
}

const mapStateToProps = (state) => {
  return {
    pages: state.getIn(['home', 'pages']),
    articleList: state.getIn(['home', 'articleList'])
  }
}

const mapDispatchToProps = (dispatch) => ({
	onChangePage(page) {
		dispatch(actionCreators.changePage({page}))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList)