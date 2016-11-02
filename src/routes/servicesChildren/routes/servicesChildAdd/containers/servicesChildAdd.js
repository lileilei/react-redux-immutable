/**
 * Created by lilei on 2016/10/28.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class ServiceChildAddView extends Component {
  render() {
    return (
      <div id="ServiceChildAddView">
        添加子服务
        <p style={{marginTop:'200px',textAlign:'center'}}>
          <Link to='/home/servicesChildField'>
            下一步 添加字段
          </Link>
        </p>
      </div>
    )
  }
}
export default connect()(ServiceChildAddView)
