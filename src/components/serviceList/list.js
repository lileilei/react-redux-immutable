/**
 * Created by lilei on 2016/11/2.
 */
import React, {Component} from 'react'
import {Link} from 'react-router'
import {Row, Col} from 'antd'
import './style.scss'
import as from './assets/ico_as.png'

export default class ServiceLIst extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.title
    }
  }

  render() {
    return (
      <div className="services-list">
        <h2 className="title">{this.state.title}列表<span className="service-count">25条{this.state.title}</span></h2>
        <Row className="list">
          {this.props.servicesList.list.map((item, i)=> {
            return (
              <Col key={i} span={4}>
                <div className="service" style={{backgroundImage:'url('+as+')'}}>
                  <p className="No">{item.code.substring(2)}</p>
                </div>
                <p>{item.name}</p>
              </Col>
            )
          })}
        </Row>
        <p>{this.props.servicesList.fetching ? '加载中' : ''}</p>
        <p style={{marginTop:'200px',textAlign:'center'}}>
          <Link to='/home/servicesChildAdd' activeClassName='route--active'>
            下一步 新增子服务
          </Link>
        </p>
      </div>
    )
  }
}
