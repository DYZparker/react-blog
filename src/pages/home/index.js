import React, { Component } from 'react'
import Topic from './components/Topic'
import TabBar from './components/TabBar'
import ArticleList from './components/ArticleList'
import { 
} from './style'

class Main extends Component {
    render() {
        return (
          <div>
            <Topic />
            <TabBar />
            <ArticleList />
          </div>
        )
    }
}

export default  Main