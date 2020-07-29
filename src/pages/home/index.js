import React, { PureComponent, Fragment } from 'react'
import { Spin } from 'antd'
import Topic from './components/Topic'
import TabBar from './components/TabBar'
import ArticleList from './components/ArticleList'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Main extends PureComponent {
  render() {
    const { articleList } = this.props
    const ArticleListData = articleList.toJS()
    if (ArticleListData.length === 0) {
      return <Spin />
    }
    return (
      <Fragment>
      {console.log('home')}
        <Topic />
        <TabBar />
        <ArticleList />
      </Fragment>
    )
  }

	componentDidMount() {
    const { getHomeInfo } = this.props
    getHomeInfo()
	}
}

const mapStateToProps = (state) => {
  return {
    articleList: state.getIn(['home', 'articleList'])
  }
}

const mapDispatchToProps = (dispatch) => ({
	getHomeInfo() {
		dispatch(actionCreators.getHomeData())
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)