/**
 * Created by lilei on 2016/10/28.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Row, Col, Input, Radio, Icon, Select, Button, Table} from 'antd';
import NewReportedModal from './components/newReport'
import ReportedDataHeader from './module/ReportedDataHeader'
import QueryConfigModule from './module/QueryConfigModule'
import TaskConfig from './module/TaskConfig'
const Search = Input.Search;
import {} from './action'
import './style.scss'
class ViewContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      minHeight: 0,
      newReportModal: false,
      showType:0
    }
    this.onFuncBind()
  }

  //  函数绑定
  onFuncBind() {
    this.modalHide = this.modalHide.bind(this)
    this.resize = this.resize.bind(this)
    this.onchangeType = this.onchangeType.bind(this)
  }

  resize() {
    this.setState({
      minHeight: document.body.offsetHeight - 110
    })
  }

  componentDidMount() {
    this.resize()
    Ewell.resizeFunc.push(this.resize)
    axios.get('/clinicalTerm/getclinicalTermTreeNodes.do')
  }

//任务配置与查询配置改变
  onchangeType(type){
    this.setState({
      showType:type
    })
  }
//新建上报任务modal显示
  newReport(e) {
    console.log('new report task')
    this.setState({
      newReportModal: true
    })
  }

  //新建上报任务modal隐藏
  modalHide() {
    this.setState({
      newReportModal: false
    })
  }

  render() {
    return (
      <div id="ReportedData">
        <Row>
          <Col span="4">
            <div className="treeMenu" style={{minHeight:this.state.minHeight}}>
              <Search
                placeholder="请输入搜索内容"
                style={{ width: '100%' }}
                onSearch={value => console.log(value)}
                />
              <p style={{textAlign:'center',marginTop:20}}>
                <Button type="ghost" onClick={(e)=>this.newReport(e)}><Icon type="plus"/>新建上报任务</Button>
              </p>
            </div>
          </Col>
          <Col span="20">
            <div className="Content" style={{minHeight:this.state.minHeight}}>
              <ReportedDataHeader changeType={this.onchangeType}></ReportedDataHeader>
              {this.state.showType === 0 ? <QueryConfigModule></QueryConfigModule> : <TaskConfig></TaskConfig> }
            </div>
          </Col>
        </Row>
        <NewReportedModal visible={this.state.newReportModal} onCancel={this.modalHide}></NewReportedModal>
      </div>
    )
  }
}
const mapDispatchtoProps = {}

const mapStateToProps = (state) => {
  return {}
}
export default connect(mapStateToProps, mapDispatchtoProps)(ViewContainer)
