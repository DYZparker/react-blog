import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Icon } from 'antd'
import { DetailWrapper, ArtTitle, ArtIcon } from './style'
import { actionCreators } from './store'

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

	componentDidMount() {
    const { getDetailInfo } = this.props
    const id = this.props.match.params.id
    getDetailInfo(id)
	}
}

const mapStateToProps = (state) => {
  return {
    article: state.getIn(['detail', 'article']).toJS()
  }
}

const mapDispatchToProps = (dispatch) => ({
	getDetailInfo(id) {
		dispatch(actionCreators.getDetailData(id))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)