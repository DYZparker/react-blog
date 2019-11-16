import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Form, Input, Button, Checkbox } from 'antd'
import { WriteWrapper } from './style'
import Editor from 'for-editor'
import { actionCreators } from './store'

class Write extends PureComponent {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }

  handleChange(value) {
    this.setState({ value })
  }

  handleSubmit = e => {
    const { SubmitArticle } = this.props
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      values.content = this.state.value
      if (!err) {
        console.log('Received values of form: ', values)
        SubmitArticle(values)
      }
    })
  }

  onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }

  render () {
    const { tagOptions } = this.props
    const TagOptions = tagOptions.toJS()
    const { value } = this.state
    const { getFieldDecorator } = this.props.form
    console.log('write')

    return (
      <WriteWrapper>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item>
             {getFieldDecorator('title', {
              rules: [{ required: true, message: 'Please input your title' }],
            })(
              <Input
                placeholder="Title"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Editor value={value} onChange={this.handleChange.bind(this)} />
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('tags', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox.Group options={TagOptions} defaultValue={[]} onChange={this.onChange} />
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

const mapStateToProps = (state) => {
  return {
    tagOptions: state.getIn(['write', 'tagOptions'])
  }
}

const mapDispatchToProps = (dispatch) => ({
	SubmitArticle(data) {
		dispatch(actionCreators.addArticleData(data))
	}
})

const WrappedNormalWriteForm = Form.create({ name: 'normal_write' })(Write)
export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalWriteForm)