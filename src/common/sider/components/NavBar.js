import React, { PureComponent } from 'react'
import { Affix, Divider } from 'antd'
import { connect } from 'react-redux'
import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'
import { NavBarWrapper } from '../style'

class NavBar extends PureComponent {
  render() {
    const { article } = this.props
    const art = article ? article.toJS() : ''
    return (
      <Affix offsetTop={40}>
        <NavBarWrapper>
          {console.log('NavBar')}
          <Divider>文章目录</Divider>
          <MarkNav
            className="article-menu"
            source={art.content}
            headingTopOffset={0}
            ordered= {false}
          />
        </NavBarWrapper>
      </Affix>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    article: state.getIn(['detail', 'article'])
  }
}

export default connect(mapStateToProps, null)(NavBar)