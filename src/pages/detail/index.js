import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Icon } from 'antd'
import { DetailWrapper, ArtTitle, ArtIcon } from './style'

class Detail extends PureComponent {

  render() {
    const { article } = this.props

    return (
      <DetailWrapper>
      {console.log('detail')}
        <ArtTitle>{article.title}</ArtTitle>
        <ArtIcon>
          <span><Icon type='calendar' style={{ marginRight: 6 }} />2019-11-10</span>
          {article.tags.map((item) => {
            return(
              <span key={item}><Icon type='tags' style={{ marginRight: 6 }} />{item}</span>
            )
          })}
        </ArtIcon>
        <div>{article.content}</div>
      </DetailWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    article: state.getIn(['detail', 'article']).toJS()
  }
}

export default connect(mapStateToProps, null)(Detail)