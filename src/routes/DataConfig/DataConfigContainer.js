/**
 * Created by lilei on 2016/10/28.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import menu_1 from  './assets/menu_1.png'
import './style.scss'
class DataView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="DataConfig">
        <div className="left">
          <ul>
            <li><Link to='/dcms/home/config/DataCenter' activeClassName='route--active'>
              <img src={menu_1}/>
              <p>数据中心配置</p>
            </Link></li>
            <li><Link to='/dcms/home/config/ReportedData' activeClassName='route--active'>
              <img src={menu_1}/>
              <p>上报数据配置</p>
            </Link></li>
            <li><Link to='/dcms/home/config/push' activeClassName='route--active'>
              <img src={menu_1}/>
              <p>推送配置</p>
            </Link></li>
          </ul>
        </div>
        <div className="right">
          {this.props.children}
        </div>
      </div>
    )
  }
}
export default connect()(DataView)
