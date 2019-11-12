import React, { Component } from 'react'
import { Globalstyle } from './style'
import { BrowserRouter } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import { Col, Icon } from 'antd'
import { WrapperRow, WrapperBackTop } from './style'
import ScrollToTop from './common/scrollToTop'
import Header from './common/header'
import Footer from './common/footer'
import RouterList from './common/routerList'
import Sider from './common/sider'

class App extends Component {
  render() {
		console.log('App')
    return (
      <div className="App">
        <Globalstyle />
        <Provider store={store}>
          <BrowserRouter>
            <ScrollToTop />
            <Header />
            <WrapperRow type="flex" justify="center">
              <Col className="main-left" xs={24} sm={24} md={24} lg={18} xl={14}>
                <RouterList />
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
export default App
