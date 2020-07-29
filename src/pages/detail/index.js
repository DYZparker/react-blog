import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Icon, Spin } from 'antd'
import moment from 'moment'
import { DetailWrapper, ArtTitle, ArtIcon, ArtContent } from './style'
import { actionCreators } from './store'
import marked from '../../utils/marked'
import 'highlight.js/styles/tomorrow.css'
import ArticleComment from './components/ArticleComment'

class Detail extends PureComponent {

  render() {
    const { article } = this.props
    const Article = article.toJS()
    if (Article.title === '') {
      return <Spin />
    }

    return (
      <DetailWrapper>
      {console.log('detail',Article.title)}
        <ArtTitle>{Article.title}</ArtTitle>
        <ArtIcon>
          <span><Icon type='calendar' style={{ marginRight: 6 }} />{moment(Article.date).format('YYYY-MM-DD')}</span>
          {Article ? Article.tags.map((item) => {
            return(
              <span key={item}><Icon type='tags' style={{ marginRight: 6 }} />{item}</span>
            )
          }) : ''}
        </ArtIcon>
        <ArtContent
          ref={this.$scrollPreview}
          dangerouslySetInnerHTML={{ __html: marked(Article.content || '正在加载中...') }}
        />
        <ArticleComment />
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
    article: state.getIn(['detail', 'article'])
  }
}

const mapDispatchToProps = (dispatch) => ({
	getDetailInfo(id) {
		dispatch(actionCreators.getDetailData(id))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)