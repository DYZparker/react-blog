import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom'
import { RouterListWrapper } from './style'
import loadable from '../../utils/loadable'
const Home = loadable(() => import('../../pages/home'))
const Detail = loadable(() => import('../../pages/detail'))
const TagList = loadable(() => import('../../pages/tagList'))
const Write = loadable(() => import('../../pages/write'))
const AboutMe = loadable(() => import('../../pages/aboutme'))

class RouterList extends PureComponent {
  render() {
		console.log('routerList')
		return (
			<RouterListWrapper>
						<Switch>
							<Route path='/' exact component={Home}></Route>
							<Route path='/taglist/:tag' exact component={TagList}></Route>
							<Route path='/detail/:id' exact component={Detail}></Route>
							<Route path='/write' exact component={Write}></Route>
							<Route path='/aboutme' exact component={AboutMe}></Route>
						</Switch>
			</RouterListWrapper>
		)
	}
}

export default RouterList
