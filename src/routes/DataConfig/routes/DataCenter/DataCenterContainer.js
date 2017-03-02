/**
 * Created by lilei on 2016/10/28.
 */
import React, {Component} from 'react'
import {Link, browserHistory} from 'react-router'
import {connect} from 'react-redux'
import {Row, Col, Input} from 'antd';
import SearchTree from './components/SearchTree'
import './style.scss'
import {fetchDataCenterTree,fetchNewDataCenter} from './action'

class DataView extends Component {
  constructor(props) {
    super(props)
    this.resize = this.resize.bind(this)
    this.onSaveNew = this.onSaveNew.bind(this)
    this.state = {
      minHeight: 0,
      dataTree: []
    }
  }

  resize() {
    this.setState({
      minHeight: document.body.offsetHeight - 110
    })
  }

  componentDidMount() {
    let that  = this
    this.props.fetchDataCenterTree().then(function(){
      const {dataTree} =  that.props.dataCenter
      that.setState({dataTree})
      if(dataTree.length){
        browserHistory.push("/dcms/home/config/DataCenter/cdr/"+dataTree[0].dcId)
      }
    })
    this.resize()
    Ewell.resizeFunc.push(this.resize)
  }

  componentWillReceiveProps(nextProps){
    let that  = this
    if(nextProps.location.pathname === "/dcms/home/config/DataCenter/cdr"){
      const {dataTree} =  that.props.dataCenter
      if(dataTree.length){
        browserHistory.push("/dcms/home/config/DataCenter/cdr/"+dataTree[0].dcId)
      }
    }
  }
  //页面刷新
  componentDidUpdate(){
    let that  = this
    const {needRefresh} = that.props.dataCenter
    if(needRefresh){
      this.props.fetchDataCenterTree().then(function(){
        const {dataTree} =  that.props.dataCenter
        that.setState({dataTree})
        if(dataTree.length){
          browserHistory.push("/dcms/home/config/DataCenter/cdr/"+dataTree[0].dcId)
        }
      })
    }
  }
  /*
  * 保存新增数据中心
  */
  onSaveNew(value){
    this.props.fetchNewDataCenter({...value})
  }
  render() {
    return (
      <div id="DataCenter">
        <Row>
          <Col span="4">
            <div className="treeMenu" style={{minHeight:this.state.minHeight}}>
              <SearchTree initData={this.state.dataTree} onSaveNew={this.onSaveNew}></SearchTree>
            </div>
          </Col>
          <Col span="20">
            <div className="Content" style={{minHeight:this.state.minHeight}}>
              {this.props.children}
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
const mapDispatchtoProps = {
  fetchDataCenterTree,
  fetchNewDataCenter

}
const mapStateToProps = (state) => {
  return {
    dataCenter: state.toJS().dataCenter
  }
}
export default connect(mapStateToProps, mapDispatchtoProps)(DataView)
