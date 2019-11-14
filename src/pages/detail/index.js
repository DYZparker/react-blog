import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Icon } from 'antd'
import moment from 'moment'
import { DetailWrapper, ArtTitle, ArtIcon, ArtContent } from './style'
import { actionCreators } from './store'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'

class Detail extends PureComponent {

  render() {
    const { article } = this.props
    //因为connectProps比componentDidMount早执行，进入页面未请求article数据前赋予art为空，避免toJS()报错
    const art = article ? article.toJS() : ''

    let markdown='# P01:课程介绍和环境搭建\n' +
      '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
      '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
      '**这是加粗的文字**\n\n' +
      '*这是倾斜的文字*`\n\n' +
      '***这是斜体加粗的文字***\n\n' +
      '~~这是加删除线的文字~~ \n\n'+
      '\`console.log(111)\` \n\n'+
      '# p02:来个Hello World 初始Vue3.0\n' +
      '> aaaaaaaaa\n' +
      '>> bbbbbbbbb\n' +
      '>>> cccccccccc\n'+
      '***\n\n\n' +
      '# p03:Vue3.0基础知识讲解\n' +
      '> aaaaaaaaa\n' +
      '>> bbbbbbbbb\n' +
      '>>> cccccccccc\n\n'+
      '# p04:Vue3.0基础知识讲解\n' +
      '> aaaaaaaaa\n' +
      '>> bbbbbbbbb\n' +
      '>>> cccccccccc\n\n'+
      '#5 p05:Vue3.0基础知识讲解\n' +
      '> aaaaaaaaa\n' +
      '>> bbbbbbbbb\n' +
      '>>> cccccccccc\n\n'+
      '# p06:Vue3.0基础知识讲解\n' +
      '> aaaaaaaaa\n' +
      '>> bbbbbbbbb\n' +
      '>>> cccccccccc\n\n'+
      '# p07:Vue3.0基础知识讲解\n' +
      '> aaaaaaaaa\n' +
      '>> bbbbbbbbb\n' +
      '>>> cccccccccc\n\n'+
      '``` var a=11; ```'

    
    const renderer = new marked.Renderer()
    marked.setOptions({
      renderer: renderer, 
      gfm: true,
      pedantic: false,
      sanitize: false,
      tables: true,
      breaks: false,
      smartLists: true,
      smartypants: false,
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    }); 

    let html = marked(art.content || '正在加载中...')
    // let html = marked(markdown)

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
        <ArtContent dangerouslySetInnerHTML={{__html: html}}></ArtContent>
        {/* <div dangerouslySetInnerHTML={{__html:article.content}}></div> */}
        {/* ObjectId("5dcbc990d1c23f600cd884eb")ObjectId("5dcbe5047d4dcf6804a00535") */}
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