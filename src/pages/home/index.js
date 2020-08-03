import React, { Component, Fragment } from 'react'
import { Spin } from 'antd'
import Topic from './components/Topic'
import TabBar from './components/TabBar'
import ArticleList from './components/ArticleList'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Main extends Component {
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
  
  shouldComponentUpdate(nextProps,nextState) {
    const { articleList } = this.props
    const ArticleListData = articleList.toJS()
    if(ArticleListData.length > 0) {
      return nextProps.articleList.toJS()[0]._id !== this.props.articleList.toJS()[0]._id
    }
    return true
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