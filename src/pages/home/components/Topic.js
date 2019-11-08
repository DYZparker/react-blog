import React, { PureComponent } from 'react'
import { Carousel  } from 'antd'
import { TopicWrapper } from '../style'
import img1 from '../../../statics/image/1.png'
import img2 from '../../../statics/image/2.png'
import img3 from '../../../statics/image/3.jpg'


class Topic extends PureComponent {

	render() {
		return (
			<TopicWrapper>
				<Carousel effect="fade" autoplay>
						<div>
								<img src={img1} alt="" />
						</div>
						<div>
								<img src={img2} alt="" />
						</div>
						<div>
								<img src={img3} alt="" />
						</div>
				</Carousel>
			</TopicWrapper>
		)
	}
}

export default Topic