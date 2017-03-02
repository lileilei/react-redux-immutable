/**
 * Created by hcz on 2017/2/20.
 * 模型配置的入口
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import DataEntityForModule from './DataEntityForModule'
import '../style.scss'
/***
 * 模型配置的入口
 */
class ModuleEntity extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div id="mark-area" >
        <h3>描述：</h3>
          <div className="mark-content">
            {this.props.desc}
          </div>
        {this.props.type === 1 ?   <DataEntityForModule list={this.props.fieldList}></DataEntityForModule> : ''}
      </div>
    )
  }
}
export default ModuleEntity
