/**
 * Created by lilei on 2016/10/28.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'

class ServiceChildrenView extends Component {
  render() {
    return (
      <div id="ServiceChildrenView">
        管理
      </div>
    )
  }
}
export default connect()(ServiceChildrenView)
