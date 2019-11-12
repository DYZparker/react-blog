import React, { PureComponent } from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
// import {CSSTransition, TransitionGroup} from 'react-transition-group'
import { RouterListWrapper } from './style'
import loadable from '../../utils/loadable'
const Home = loadable(() => import('../../pages/home'))
const Detail = loadable(() => import('../../pages/detail'))
const Login = loadable(() => import('../../pages/login'))
const TagList = loadable(() => import('../../pages/tagList'))
const Write = loadable(() => import('../../pages/write'))
const AboutMe = loadable(() => import('../../pages/aboutme'))

class RouterList extends PureComponent {
  render() {
		// const key = this.props.location.key
		console.log('routerList')
		return (
			<RouterListWrapper>
				{/* <TransitionGroup> */}
					{/* <CSSTransition
						key={key}
						timeout={5000}
						classNames='fade'
					> */}
						<Switch>
							<Route path='/' exact component={Home}></Route>
							<Route path='/login' exact component={Login}></Route>
							<Route path='/taglist/:tag' exact component={TagList}></Route>
							<Route path='/detail/:id' exact component={Detail}></Route>
							<Route path='/write' exact component={Write}></Route>
							<Route path='/aboutme' exact component={AboutMe}></Route>
						</Switch>
					{/* </CSSTransition> */}
				{/* </TransitionGroup> */}
			</RouterListWrapper>
		)
	}
}

export default withRouter(RouterList)