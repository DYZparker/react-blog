import React, { PureComponent, Fragment } from 'react'
import { Affix, Divider } from 'antd'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'
import { NavBarWrapper } from '../style'

class NavBar extends PureComponent {
  render() {
    const { article } = this.props
		const Article = article.toJS()
    const pathname = this.props.location.pathname
    if(pathname.includes(Article._id)) {
			return (
        <Affix offsetTop={40}>
          <NavBarWrapper>
            {console.log('NavBar')}
            <Divider>文章目录</Divider>
            <MarkNav
              className="article-menu"
              source={Article.content}
              headingTopOffset={0}
              ordered= {false}
            />
          </NavBarWrapper>
        </Affix>
      )
		}
    return (
      <Fragment />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    article: state.getIn(['detail', 'article'])
  }
}

export default connect(mapStateToProps, null)(withRouter(NavBar))