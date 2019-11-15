import React, { PureComponent } from 'react'
import Topic from './components/Topic'
import TabBar from './components/TabBar'
import ArticleList from './components/ArticleList'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Main extends PureComponent {
  render() {
    return (
      <div>
      {console.log('home')}
        <Topic />
        <TabBar />
        <ArticleList />
      </div>
    )
  }

	componentDidMount() {
    const { getHomeInfo } = this.props
    getHomeInfo()
	}
}

const mapDispatchToProps = (dispatch) => ({
	getHomeInfo() {
		dispatch(actionCreators.getHomeData())
	}
})

export default connect(null, mapDispatchToProps)(Main)