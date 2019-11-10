import React, { PureComponent } from 'react'
import Topic from './components/Topic'
import TabBar from './components/TabBar'
import ArticleList from './components/ArticleList'
import { 
} from './style'

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
}

export default  Main