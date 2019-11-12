import React, {PureComponent} from 'react';
import {withRouter} from 'react-router-dom'

//解决react-router-dom页面跳转后不在顶部
class ScrollToTop extends PureComponent {
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.location.pathname!==prevProps.location.pathname){
      window.scrollTo(0,0)
    }
  }
 
  render() {
		console.log('scrollToTop')
    return (
			<div></div>
    );
  }
}
 
export default withRouter(ScrollToTop)