/**
 * Created by lilei on 2016/10/28.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'

class ServiceView extends Component {
  render() {
    return (
      <div id="service">
        服务
      </div>
    )
  }
}
export default connect()(ServiceView)
