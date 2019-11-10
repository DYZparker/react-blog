import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { Tag, Icon, Divider } from 'antd'
import { TagsWrapper } from '../style'
import { connect } from 'react-redux'
// import { actionCreators } from './store'

class Tags extends PureComponent {
	render() {
    const { tagList } = this.props
		return (
			<TagsWrapper>
      {console.log('tags')}
				<Divider>标签分类</Divider>
				{tagList.map((item) => {
					return (
						<Tag style={{ marginBottom: 6 }} color={item.color} key={item.title}>
								<Link to={'/taglist/' + item.title}>
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
    tagList: state.getIn(['sider', 'tagList']).toJS()
  }
}

export default connect(mapStateToProps, null)(Tags)