import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Icon, Divider } from 'antd'
import moment from 'moment'
import { DetailWrapper, ArtTitle, ArtIcon, ArtContent } from './style'
import { actionCreators } from './store'
import marked from '../../utils/marked'
import 'highlight.js/styles/tomorrow.css'

class Detail extends PureComponent {

  render() {
    const { article } = this.props
    //因为connectProps比componentDidMount早执行，进入页面未请求article数据前赋予art为空，避免toJS()报错
    const art = article ? article.toJS() : ''

    return (
      <DetailWrapper>
      {console.log('detail')}
        <ArtTitle>{art.title}</ArtTitle>
        <ArtIcon>
          <span><Icon type='calendar' style={{ marginRight: 6 }} />{moment(art.date).format('YYYY-MM-DD')}</span>
          {art ? art.tags.map((item) => {
            return(
              <span key={item}><Icon type='tags' style={{ marginRight: 6 }} />{item}</span>
            )
          }) : ''}
        </ArtIcon>
        <Divider />
        <ArtContent
          ref={this.$scrollPreview}
          dangerouslySetInnerHTML={{ __html: marked(art.content || '正在加载中...') }}
        />
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