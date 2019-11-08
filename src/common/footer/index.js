import React, { PureComponent } from 'react'
import { FooterWrapper } from './style'

class Footer extends PureComponent {

	render() {
		return (
			<FooterWrapper>
				云中 版权所有丨基于 React 构建 © 2019丨托管于 腾讯云主机 丨京ICP备18015597号-1
			</FooterWrapper>
		)
	}
}

export default Footer