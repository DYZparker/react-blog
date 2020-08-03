import React, { Component } from 'react'
import { Carousel  } from 'antd'
import { TopicWrapper } from '../style'
import { connect } from 'react-redux'

class Topic extends Component {

	render() {
		const { topicList } = this.props
		const TopicList = topicList.toJS()
		return (
			<TopicWrapper>
			{console.log('topic')}
				<Carousel effect="fade" autoplay>
					{TopicList.map((item) => {
						return(<img src={item.src} alt={item.alt} key={item.alt} />)
					})}
				</Carousel>
			</TopicWrapper>
		)
	}
  
  shouldComponentUpdate(nextProps,nextState) {
		const { topicList } = this.props
		const TopicList = topicList.toJS()
    if(TopicList.length > 0) {
      return false
    }
    return true
  }
}

const mapStateToProps = (state) => {
  return {
    topicList: state.getIn(['home', 'topicList'])
  }
}

export default connect(mapStateToProps, null)(Topic)