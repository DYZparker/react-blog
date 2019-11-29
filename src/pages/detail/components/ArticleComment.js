import React, { PureComponent } from 'react'
import { Comment, Avatar, Form, Button, List, Input } from 'antd'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment';
import { actionCreators } from '../store'
import {  } from '../store'
import userImg from '../../../statics/image/user.jpg'

const { TextArea } = Input

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} 条评论`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
)

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        提交评论
      </Button>
    </Form.Item>
  </div>
)

class ArticleComment extends PureComponent {
  state = {
    submitting: false,
    value: ''
  };

  handleSubmit = () => {
    const { username, comments, article, addComment } = this.props
    const Comments = comments.toJS()
    const id = article.toJS()._id
    const newComments = [
      {
        author: username,
        avatar: userImg,
        content: <p>{this.state.value}</p>,
        datetime: moment(new Date())
      },
      ...Comments,
    ]
    if (!this.state.value) {
      return
    }

    this.setState({
      submitting: true,
    })

    // setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
      })
      addComment(id, newComments)
    // }, 500)
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    })
  }

  render() {
    const { submitting, value } = this.state
    const { comments, username } = this.props
    const Comments = comments.toJS()
    const Username = username

    return (
      <div>
        {Comments.length > 0 && <CommentList comments={Comments} />}
        <Comment
          avatar={
            <Avatar
              src={userImg}
              alt={Username}
            />
          }
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </div>
    );
  }

  // componentDidMount() {
  //   const { setLoginData, toggleLogin, login, deleteLoginData } = this.props
  // }
}

const mapStateToProps = (state) => {
  return {
    username: state.getIn(['header', 'username']),
    article: state.getIn(['detail', 'article']),
    comments: state.getIn(['detail', 'comments'])
  }
}

const mapDispatchToProps = (dispatch) => ({
	// clickTag(tag) {
	// 	dispatch(tagArtListActionCreators.getTagArtListData(tag))
	// },
	addComment(id, data) {
		dispatch(actionCreators.setCommentsData(id, data))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ArticleComment))