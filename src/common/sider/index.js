import React, { PureComponent } from 'react'
import { SiderWrapper } from './style'
import Author from './components/Author'
import Tags from './components/Tags'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class sider extends PureComponent {

	render() {
		return (
			<SiderWrapper>
			{console.log('sider')}
				<Author />
				<Tags />
			</SiderWrapper>
		)
	}

	componentDidMount() {
    const { getSiderInfo } = this.props
    getSiderInfo()
	}
}

const mapDispatchToProps = (dispatch) => ({
	getSiderInfo() {
		dispatch(actionCreators.getSiderData())
	}
})

export default connect(null, mapDispatchToProps)(sider)