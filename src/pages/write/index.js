import React, { PureComponent } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { WriteWrapper, ArticleArea } from './style'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

const TagOptions = ['html', 'css', 'flex', 'javascript', 'node', 'vue', 'react', 'express', 'koa2', 'egg', 'next.js', 'git', 'mongodb', 'mysql', 'nginx', '杂记', '踩坑', '其他',]

class Write extends PureComponent {
  state = {
    editorState: null
}

// async componentDidMount () {
//   // 假设此处从服务端获取html格式的编辑器内容
//   const htmlContent = await fetchEditorContent()
//   // 使用BraftEditor.createEditorState将html字符串转换为编辑器需要的editorState数据
//   this.setState({
//     editorState: BraftEditor.createEditorState(htmlContent)
//   })
// }

// submitContent = async () => {
//   // 在编辑器获得焦点时按下ctrl+s会执行此方法
//   // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
//   const htmlContent = this.state.editorState.toHTML()
//   const result = await saveEditorContent(htmlContent)
// }

handleEditorChange = (editorState) => {
  this.setState({ editorState })
}

handleSubmit = e => {
  e.preventDefault();
  this.props.form.validateFields((err, values) => {
    values.content = this.state.editorState.toHTML()
    if (!err) {
      console.log('Received values of form: ', values);
    }
  });
}

render () {

  const { editorState } = this.state
  const { getFieldDecorator } = this.props.form

  return (
    <WriteWrapper>
    <Form onSubmit={this.handleSubmit}>
        <Form.Item>
          {getFieldDecorator('title', {
            rules: [{ required: true, message: 'Please input your title' }],
          })(
            <Input
              placeholder="Title"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {/* {getFieldDecorator('article', {
            rules: [{ required: true, message: 'Please input your article' }],
          })( */}
            <ArticleArea>
              <BraftEditor
                value={editorState}
                onChange={this.handleEditorChange}
                onSave={this.submitContent}
              />
            </ArticleArea>,
          {/* )} */}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('tags', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox.Group options={TagOptions} defaultValue={['html']} onChange={onChange} />
          )}
        </Form.Item>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form>
      </WriteWrapper>
  )
}
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Write)
export default WrappedNormalLoginForm