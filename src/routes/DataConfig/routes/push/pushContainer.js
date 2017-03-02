/**
 * Created by lilei on 2016/10/28.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button, Checkbox, Row, Col} from 'antd'
import './style.scss'
class DataView extends Component {
  constructor(props) {
    super(props)
    this.resize = this.resize.bind(this)
    this.state = {
      minHeight: 0
    }
  }

  resize() {
    this.setState({
      minHeight: document.body.offsetHeight - 66
    })
  }

  componentDidMount() {
    this.resize()
    Ewell.resizeFunc.push(this.resize)
    axios.get('/clinicalTerm/getclinicalTermTreeNodes.do')

  }

  render() {
    return (
      <div id="push">
        <h2 className="title">上报任务失败提醒配置：</h2>
        <Row className="msgType">
          <Col span="8"><Checkbox>短信提醒</Checkbox></Col>
          <Col span="8"><Checkbox>邮箱提醒</Checkbox></Col>
          <Col span="8"><Checkbox>微信提醒</Checkbox></Col>
        </Row>
        <p className="submit">
          <Button style={{width:100,height:30}} type="primary">提交</Button>
        </p>
      </div>
    )
  }
}
export default connect()(DataView)
