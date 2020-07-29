import React, { PureComponent } from 'react'
import { SiderWrapper } from './style'
import Author from './components/Author'
import Tags from './components/Tags'
import NavBar from './components/NavBar'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class sider extends PureComponent {
	render() {
		return (
			<SiderWrapper>
			{console.log('sider')}
				<Author />
				<Tags />
				<NavBar />
			</SiderWrapper>
		)
	}

	componentDidMount() {
    const { getSideInfo } = this.props
    getSideInfo()
	}
}

const mapDispatchToProps = (dispatch) => ({
	getSideInfo() {
		dispatch(actionCreators.getSideInfoData())
	}
})

export default connect(null, mapDispatchToProps)(sider)
