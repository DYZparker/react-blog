import React, { Component } from 'react'
import { Globalstyle } from './style'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import { Col, Icon } from 'antd'
import { WrapperRow, WrapperBackTop } from './style'
import Header from './common/header'
import Footer from './common/footer'
import Sider from './common/sider'
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'
import Write from './pages/write'
import AboutMe from './pages/aboutme'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Globalstyle />
        <Provider store={store}>
          <BrowserRouter>
            <Header />
            <WrapperRow type="flex" justify="center">
              <Col className="main-left" xs={24} sm={24} md={24} lg={18} xl={14}>
                  <div>
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/login' exact component={Login}></Route>
                    <Route path='/detail' exact component={Detail}></Route>
                    <Route path='/write' exact component={Write}></Route>
                    <Route path='/aboutme' exact component={AboutMe}></Route>
                  </div>
              </Col>
              <Col className="main-right" xs={0} sm={0} md={0} lg={5} xl={4}>
                  <Sider />
              </Col>
            </WrapperRow>
          </BrowserRouter>
          <Footer />
        </Provider>
        <WrapperBackTop>
          <Icon type="to-top" />
        </WrapperBackTop>
      </div>
    )
  }
}
export default App;
