import React, { PureComponent } from 'react'
import { Modal, Form, Icon, Input, Button, message } from 'antd'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { LoginTitle } from '../style'

class Login extends PureComponent {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  }

  // handleOk = () => {
  //   const { closeLogin, showRegister } = this.props
  //   if(showRegister) {
  //     return console.log('注册')
  //   }else {
  //     this.setState({
  //       confirmLoading: true,
  //     });
  //     setTimeout(() => {
  //       this.setState({
  //         confirmLoading: false,
  //       })
  //       closeLogin()
  //       this.handleSubmit()
  //     }, 2000);
  //   }
  // };

  handleSubmit = e => {
    const { closeLogin, showRegister, login, toggleLogin } = this.props
    e.preventDefault();
    if(showRegister) {
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of register: ', values);
          message.success('注册成功！请登录')
          this.toggleRegister(showRegister)
        }
      })
    }else{
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of login: ', values);
          setTimeout(() => {
            message.success('登录成功！')
            toggleLogin(login)
            closeLogin()
          }, 2000);
        }
      })
    }
  };

  toggleRegister(show) {
    const { toggleShow } = this.props
    this.props.form.resetFields()
    toggleShow(show)
  }
  //=====================
  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次输入的密码不一致');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  render() {
    const { loginVisible, showRegister, closeLogin } = this.props
    const { getFieldDecorator } = this.props.form

    return (
      <div>
        <Modal
          width={400}
          title={<LoginTitle>{showRegister ? '注册' : '登录'}</LoginTitle>}
          visible={loginVisible}
          onCancel={closeLogin}
          footer={null}
          destroyOnClose={true}
        >
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '请输入您的用户名!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [
                  { 
                    required: true,
                    message: '请输入您的密码!' 
                  },
                  {
                    validator: this.validateToNextPassword,
                  }
                ],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            {showRegister ? <Form.Item>
              {getFieldDecorator('confirm', {
                rules: [
                  { 
                    required: true,
                    message: '请确认您的密码!' },
                  {
                    validator: this.compareToFirstPassword,
                  }
                ],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Confirm Password"
                  onBlur={this.handleConfirmBlur}
                />,
              )}
            </Form.Item> : ''}
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                确认
              </Button>
              <Button onClick={()=>this.toggleRegister(showRegister)} block>
                {showRegister ? '返回' : '注册'}
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loginVisible: state.getIn(['header', 'loginVisible']),
    showRegister: state.getIn(['header', 'showRegister']),
    login: state.getIn(['header', 'login'])
  }
}

const mapDispatchToProps = (dispatch) => ({
	closeLogin() {
		dispatch(actionCreators.changeLoginVisible(false))
		dispatch(actionCreators.changeRegister(false))
	},
	toggleShow(showRegister) {
    const toggle = !showRegister
		dispatch(actionCreators.changeRegister(toggle))
	},
	toggleLogin(login) {
    const toggle = !login
    dispatch(actionCreators.changeLogin(toggle))
    if(!login) {
      dispatch(actionCreators.changeLoginWord())
    }
	}
})

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login)
export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm)