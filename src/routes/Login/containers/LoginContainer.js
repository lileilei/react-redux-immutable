/**
 * Created by lilei on 2016/10/28.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchLogin, keyChangeHandler} from '../action/Login_action'
import {Form, Input, Radio, Button} from 'antd'
import logo from '../assets/logo1.png'
import './LoginView.scss'

const FormItem = Form.Item
class LoginView extends Component {
  render() {
    const {login, fetchLogin, keyChangeHandler} = this.props
    const {fetching, userName, userPwd} = login
    return (
      <div id="login">
        <h1 className="title" style={{textAlign:'center'}}><img src={logo}/></h1>
        <div className="login-top">
          <div className="backgd-polyfill"></div>
        </div>
        <div className="login-bottom"></div>
        <div className="login-form">
          <h2 className="title">登陆</h2>
          <Form horizontal>
            <FormItem id="userName" label="用户名：" labelCol={{ span: 6 }} wrapperCol={{ span: 14 }}>
              <Input id="userName" value={userName} placeholder="请输入用户名" onChange={(ev) => {
                keyChangeHandler(ev,'userName')
              }}/>
            </FormItem>
            <FormItem id="userPwd" label="密码：" labelCol={{ span: 6 }} wrapperCol={{ span: 14 }}>
              <Input id="userPwd" value={userPwd} placeholder="请输入密码" onChange={(ev) => {
                keyChangeHandler(ev,'userPwd')
              }}/>
            </FormItem>
            <FormItem wrapperCol={{ span: 14, offset: 6 }} style={{ marginTop: 24 }}>
              <Button type="primary" loading={fetching} htmlType="submit" onClick={fetchLogin}>OK</Button>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}
LoginView.propTypes = {
  login: React.PropTypes.object.isRequired
}
const mapDispatchtoProps = {
  fetchLogin,
  keyChangeHandler
}

const mapStateToProps = (state) => {
  return {
    login: state.toJS().login
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(LoginView)
