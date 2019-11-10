import React, { PureComponent } from 'react'
import { Icon } from 'antd'
import { DetailWrapper, ArtTitle, ArtIcon } from './style'

const articles = [
  {
    id: 301,
    date: '2019-11-10',
    tags: ['react', 'vue'],
    title: 'biaoti11111',
    content: 'neirong11111'
  },
  {
    id: 302,
    date: '2019-11-10',
    tags: ['react', 'vue'],
    title: 'biaoti22222',
    content: 'neirong22222'
  },
  {
    id: 303,
    date: '2019-11-10',
    tags: ['react', 'vue'],
    title: 'biaoti33333',
    content: 'neirong33333'
  }
]

class Detail extends PureComponent {

  constructor (props) {
    super(props)
    this.state = {
      id: props.match.params.id,
      article: {
        id: '',
        date: '',
        tags: [],
        title: '',
        content: ''
      }
    }
  }

  componentDidMount() {
    this.setState({article: articles.find((item) => item.id === this.state.id*1)})
  }
  
  render() {
    return (
      <DetailWrapper>
      {console.log('detail')}
        <ArtTitle>{this.state.article.title}</ArtTitle>
        <ArtIcon>
          <span><Icon type='calendar' style={{ marginRight: 6 }} />2019-11-10</span>
          {this.state.article.tags.map((item) => {
            return(
              <span key={item}><Icon type='tags' style={{ marginRight: 6 }} />{item}</span>
            )
          })}
        </ArtIcon>
        <div>{this.state.article.content}</div>
      </DetailWrapper>
    )
  }
}

export default Detail