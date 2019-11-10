import React, { PureComponent } from 'react'
import { Carousel  } from 'antd'
import { TopicWrapper } from '../style'
import { connect } from 'react-redux'

class Topic extends PureComponent {

	render() {
		const { topicList } = this.props
		return (
			<TopicWrapper>
			{console.log('topic')}
				<Carousel effect="fade" autoplay>
					{topicList.map((item) => {
						return(<img src={item.src} alt={item.alt} key={item.alt} />)
					})}
				</Carousel>
			</TopicWrapper>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    topicList: state.getIn(['home', 'topicList']).toJS()
  }
}

export default connect(mapStateToProps, null)(Topic)