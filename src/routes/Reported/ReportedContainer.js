/**
 * Created by lilei on 2016/10/28.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import reportedlog from  './assets/reportedlog.png'
import reprotedreport from  './assets/reprotedreport.png'

import './style.scss'
class Reported extends Component {
  constructor(props) {
    super(props)
    this.state = {
      minHeight: 0
    }
    /*函数绑定*/
    this.FunBind()

  }
  FunBind() {
    this.resize = this.resize.bind(this)

  }
  resize() {
    this.setState({
      minHeight: document.body.offsetHeight - 60
    })
  }

  componentDidMount() {
    this.resize()
    Ewell.resizeFunc.push(this.resize)
  }



  render() {
    return (
      <div id="Reported">
        <div className="left">
          <ul>
            <li><Link to='/dcms/home/reported/reportedReport' activeClassName='route--active'>
              <img src={reprotedreport}/>
              <p>上报报告</p>
            </Link></li>
            <li><Link to='/dcms/home/reported/reportedLog' activeClassName='route--active'>
              <img src={reportedlog}/>
              <p>上报日志</p>
            </Link></li>
          </ul>
        </div>
        <div className="right" style={{minHeight:this.state.minHeight}}> {this.props.children}</div>
      </div>
    )
  }
}

export default connect()(Reported)
