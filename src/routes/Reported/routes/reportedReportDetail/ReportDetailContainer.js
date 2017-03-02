/**
 * Created by lilei on 2016/10/28.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, browserHistory} from 'react-router'
import {Button, message, Icon, Spin, Modal} from 'antd'
import FormSearch from './components/FormSearch'
import MyTable from './components/myTable'
import DetailTableModal from './components/reportDetailModal'
import {getReportDetailList, getBatchList, getFieldData,} from './action.js'

import './style.scss'
class ReportedReportDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      minHeight: 0,
      pageSize: 10,
      visible: false,
      taskId: '',
      batchNumber: '',
    }
    /*函数绑定*/
    this.FunBind()
  }

  FunBind() {
    this.resize = this.resize.bind(this)
    this.goBack = this.goBack.bind(this)
    this.onChange = this.onChange.bind(this)
    this.modalView = this.modalView.bind(this)
    this.onChangeData = this.onChangeData.bind(this)
  }

  resize() {
    this.setState({
      minHeight: document.body.offsetHeight - 60
    })
  }

  componentDidMount() {
    this.setState({taskId: this.props.params.id}, function () {
      this.props.getReportDetailList({
        'pageNumber': 1,
        'pageSize': this.state.pageSize,
        'taskId': this.state.taskId,
        'batchNumber': '',
      });
      this.props.getFieldData({
        'taskId': this.state.taskId
      })
    })
    this.resize()
    Ewell.resizeFunc.push(this.resize)
  }

//返回上报报告
  goBack() {
    browserHistory.push('/dcms/home/reported/reportedReport')
  }

//搜索,换页(某一任务的具体批次)
  onChange(page) {
    var formValue = this.refs['searchForm'].getFieldsValue();
    var tableValue = this.refs['detailTable'];
    tableValue.setCurrentPage(page);
    var times = {};

    if (formValue.reportingTime !== undefined && formValue.reportingTime.length == 2) {
      Object.assign(times, {
        beginTime: formValue.reportingTime[0].format("YYYY-MM-DD HH:mm") + ':00',
        endTime: formValue.reportingTime[1].format("YYYY-MM-DD HH:mm") + ':00'
      });
    }
    this.props.getReportDetailList({
      'pageNumber': page,
      'pageSize': this.state.pageSize,
      'taskId': this.state.taskId,
      'batchNumber': formValue.batchNumber,
      ...times,
    })
  }


//显示/隐藏数据表
  modalView(visible) {
    this.setState({visible: visible})
  }

//搜索,换页(某一批次的具体数据)
  onChangeData(type, page, data) {
    var tableValue = this.refs['tableModal'];
    tableValue.setCurrentPage(page)
    if (type == 'table') {
      this.setState({batchNumber: data.batchNumber}, function () {
        this.props.getBatchList({
          'pageNumber': 1,
          'pageSize': this.state.pageSize,
          'taskId': data.taskId,
          'batchNo': data.batchNumber
        })
      })

    } else if (type == 'modal') {
      this.props.getBatchList({
        ...data,
        'pageNumber': page,
        'pageSize': this.state.pageSize,
        'taskId': this.state.taskId,
        'batchNo': this.state.batchNumber,

      })

    }
  }

  render() {
    const {resultA, totalA, resultB, totalB, fetching, dataField} = this.props.reportedReportDetail

    //格式调整之后的数据  (字段id : 值)    : 决定表格的数据
    var data = []
    //格式调整之后的数据所出现的字段id (字段id)    :  决定表格的列数
    var name = []
    //格式调整之后的数据所出现的字段id与其对应的中文名(表头名)   :  决定 列和数据的对应关系  (所有的数据的对应关系)
    var field = {}

    // 生成格式调整之后的 data,name
    for (var i = 0; i < resultB.length; i++) {
      var obj = {};
      for (var j = 0; j < resultB[i].detailVos.length; j++) {
        if (name.indexOf(resultB[i].detailVos[j].fieldId) == -1) {
          name.push(resultB[i].detailVos[j].fieldId)
        }
        obj[resultB[i].detailVos[j].fieldId] = resultB[i].detailVos[j].fieldValue
      }
      obj.rdId = resultB[i].rdId
      data.push(obj)
    }


    // //生成格式调整之后的 field
    for (var n = 0; n < dataField.length; n++) {
      field[dataField[n].fieldId] = dataField[n].fieldAlias
      field[dataField[n].fieldId + 'isFilter'] = dataField[n].filterFlag
    }

    //将 name 和 field 相结合,使name 拓展出要使用的字段的id 和 表头名的对应关系

    var usingField = {}
    var isFilter = {}
    for (var m = 0; m < name.length; m++) {
      // usingField.push(field[name[m]])
      // isFilter.push(field[name[m] + 'isFilter'])

      usingField[name[m]] = field[name[m]]
      isFilter[name[m]] = field[name[m] + 'isFilter']

    }
    //最终传入
    //  data        最终输出有正确格式的数据                              格式  [{39:'a',40:'b'},{39:'a',40:'b'},{},.....]
    //  name        最终输出需要生成的列的 key                            格式  [ 39  , 40  , 41   , 42  ,  43  ]
    //  usingField  最终输出需要生成的列的title,与 name 一一对应           格式  {39:'姓名',40:'性别'......}
    //  isFilter    最终输出需要生成的列是否可筛选,与 name 一一对应         格式  {39:1,40:1,......}  (0:不可过滤  1:可以过滤)


    return (
      <div id="ReportedReportDetail" style={{minHeight:this.state.minHeight}}>
        <div className="title">
          <div className="back " onClick={this.goBack}>
            <Icon type="left-circle-o"/>
            <span style={{paddingLeft:'0px'}}>返回</span>
          </div>
          <span>上报任务:</span><span>{this.state.taskId}</span>
        </div>
        <div className="detailContainer" style={{minHeight:this.state.minHeight - 100}}>
          <div className="searchForm">
            <FormSearch ref="searchForm"
                        onChange={this.onChange}

            >
            </FormSearch>
          </div>
          <div className="tables">
            <MyTable ref="detailTable"
                     onChange={this.onChange}
                     pageSize={this.state.pageSize}
                     showModal={this.modalView}
                     getBatchList={this.onChangeData}
                     data={resultA}
                     total={totalA}
                     fetching={fetching}
            >
            </MyTable>
          </div>
          <div>
            <DetailTableModal ref="tableModal"
                              visible={this.state.visible}
                              hideModal={this.modalView}
                              getBatchList={this.onChangeData}
                              pageSize={this.state.pageSize}
                              data={data}
                              name={name}
                              usingField={usingField}
                              isFilter={isFilter}
                              total={totalB}
                              fetching={fetching}
                              taskId={this.state.taskId}
            >

            </DetailTableModal>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchtoProps = {
  getReportDetailList,
  getBatchList,
  getFieldData
}
const mapStateToProps = (state) => {
  return {
    reportedReportDetail: state.get('reportedReportDetail').toJS()
  }
}
export default connect(mapStateToProps, mapDispatchtoProps)(ReportedReportDetail)


















