/**
 * Created by lilei on 2016/10/28.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'

class ServiceChildFieldView extends Component {
  render() {
    return (
      <div id="ServiceChildFieldView">
        子服务字段
      </div>
    )
  }
}
export default connect()(ServiceChildFieldView)
