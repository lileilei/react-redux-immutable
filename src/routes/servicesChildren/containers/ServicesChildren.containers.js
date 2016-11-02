/**
 * Created by lilei on 2016/10/28.
 */
import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {Checkbox} from 'antd'
import './style.scss'
import List from '../../../components/serviceList/list'

class ServiceChildrenView extends Component {
  render() {
    return (
      <div id="ServiceChildrenView">
        <div className="filter-menu">
          <p>
            <span className="filter-type">提供系统</span>
            <Checkbox>值域管理</Checkbox>
            <Checkbox>病人字典</Checkbox>
            <Checkbox>住院信息</Checkbox>
            <Checkbox>财务字典</Checkbox>
          </p>
        </div>
        <List title="子服务"/>
      </div>
    )
  }
}
export default connect()(ServiceChildrenView)
