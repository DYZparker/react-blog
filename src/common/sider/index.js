import React, { PureComponent } from 'react'
import { SiderWrapper } from './style'
import Author from './components/Author'
import Tags from './components/Tags'

class sider extends PureComponent {

	render() {
		return (
			<SiderWrapper>
				<Author />
				<Tags />
			</SiderWrapper>
		)
	}
}

export default sider