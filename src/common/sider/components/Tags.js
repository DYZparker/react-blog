import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { Tag, Icon, Divider } from 'antd'
import { TagsWrapper } from '../style'
import { connect } from 'react-redux'
import { actionCreators as tagArtListActionCreators } from '../../../pages/tagList/store'

class Tags extends PureComponent {
	render() {
		const { tagList, clickTag } = this.props
		const TagList = tagList.toJS()
		return (
			<TagsWrapper>
      {console.log('tags')}
				<Divider>标签分类</Divider>
				{TagList.map((item) => {
					return (
						<Tag style={{ marginBottom: 6 }} color={item.color} key={item.title}>
								<Link to={'/taglist/' + item.title} onClick={() => clickTag(item.title)}>
									<Icon type="pushpin" />
									{item.title}
								</Link>
						</Tag>
					)
				})}
			</TagsWrapper>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    tagList: state.getIn(['sider', 'tagList'])
  }
}

const mapDispatchToProps = (dispatch) => ({
	clickTag(tag) {
		dispatch(tagArtListActionCreators.getTagArtListData(tag))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Tags)