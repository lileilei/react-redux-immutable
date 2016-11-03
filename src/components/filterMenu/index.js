/**
 * Created by lilei on 2016/11/3.
 */
import React, {Component} from 'react'
import {Checkbox} from 'antd'
import './style.scss'

export default class ServiceLIst extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="filter-menu">
        <p>
          <span className="filter-type">提供系统</span>
          <Checkbox>值域管理</Checkbox>
          <Checkbox>病人字典</Checkbox>
          <Checkbox>住院信息</Checkbox>
          <Checkbox>财务字典</Checkbox>
        </p>
      </div>
    )
  }
}
