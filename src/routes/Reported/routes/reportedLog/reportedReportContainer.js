/**
 * Created by lilei on 2016/10/28.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {Spin, message, Select} from 'antd';
const Option = Select.Option;
import 'react-highlight/node_modules/highlight.js/styles/github.css'
import FormSearch from './components/FormSearch'
import MyTable from './components/myTable'
import LogKeyModal from './components/dataPrimarKeyModal'
import {getLogList, getReportedCatgList, getReportedCatgLists} from './action.js'

import './style.scss'
class ReportedLog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      minHeight: 0,
      pageSize: 10,
      modalVisible: false,
      xml: '',
      data2: {},                     //获取的所有数据
      defaultData: [],              //更改的选项
      data: [],                     //table表数据
      total: []                     //table表页数
    }
    /*函数绑定*/
    this.FunBind()
  }

  FunBind() {
    this.resize = this.resize.bind(this)
    this.onChange = this.onChange.bind(this)
    this.modalView = this.modalView.bind(this)
    this.getXml = this.getXml.bind(this)
    this.changeState = this.changeState.bind(this)
    this.resetTable = this.resetTable.bind(this)

  }

  resize() {
    this.setState({
      minHeight: document.body.offsetHeight - 60
    })
  }

  componentDidMount() {
    var obj = [];
    obj['quanbu'] = [];
    obj['quanbus'] = [];

    const defaultData = [];
    defaultData.push(<Option key='请选择' value='请选择'> 请选择... </Option>)

    var that = this;
    this.props.getReportedCatgList();
    this.props.getReportedCatgLists().then(function () {
      const {catgs} = that.props.reportedLog;

      for (var i = 0; i < catgs.length; i++) {

        //设置obj内属性的类型(数组)
        if (obj[catgs[i].taskCatg] == undefined) {
          obj[catgs[i].taskCatg] = [];     //放置名字
          obj[catgs[i].taskCatg + 's'] = [];   //放置id
        }
        //去重
        if (obj[catgs[i].taskCatg].indexOf(catgs[i].taskId) == -1) {
          obj[catgs[i].taskCatg].push(catgs[i].taskName);
          obj[catgs[i].taskCatg + 's'].push(catgs[i].taskId);
          obj['quanbu'].push(catgs[i].taskName);
          obj['quanbus'].push(catgs[i].taskId)
        }
        if (defaultData.indexOf(catgs[i].taskId) == -1) {
          if (typeof catgs[i].taskId == 'number') {
            catgs[i].taskId = catgs[i].taskId.toString()
          }
          defaultData.push(<Option key={i.toString()} value={catgs[i].taskId}> {catgs[i].taskName}</Option>)

        }
      }
      that.setState({data2: obj})
      that.setState({defaultData: defaultData})
    })
    this.resize()
    Ewell.resizeFunc.push(this.resize)

  }

  changeState(value) {
    this.setState({defaultData: value})
  }

  resetTable() {
    this.setState({data: []})
    this.setState({total: 0})
  }


  //搜索,换页
  onChange(page) {
    const that = this
    var formValue = this.refs['searchForm'].getFieldsValue();
    var tableValue = this.refs['logTable'];
    tableValue.setCurrentPage(page);
    var mes = {};


    if (formValue.reportingTime !== undefined && formValue.reportingTime.length == 2) {
      Object.assign(mes, {
        beginTime: formValue.reportingTime[0].format("YYYY-MM-DD HH:mm") + ':00',
        endTime: formValue.reportingTime[1].format("YYYY-MM-DD HH:mm") + ':00'
      });
    }
    if (formValue.taskId == '请选择') {
      formValue.taskId = 0
    }

    this.props.getLogList({
      'pageNumber': page,
      'pageSize': this.state.pageSize,
      'taskId': formValue.taskId,
      'batchNo': formValue.batchNumber,
      ...mes
    }).then(function () {
      that.setState({data: that.props.reportedLog.resultA})
      that.setState({total: that.props.reportedLog.totalA})
    })
  }

  //显示/隐藏数据主键对话框
  modalView(visible) {
    this.setState({modalVisible: visible})
  }

  //点击数据主键后,将数据存储下来,方便传递到对话框中
  getXml(record) {
    this.setState({xml: record})
  }

  render() {
    const {resultA, totalA, fetching, catg, catgs} = this.props.reportedLog

    return (
      <div id="reportedLog" style={{minHeight:this.state.minHeight}}>
        <div className="searchForm">
          <FormSearch ref="searchForm"
                      onChange={this.onChange}
                      data1={catg}
                      data2={this.state.data2}
                      changeOption={this.state.defaultData}
                      changeState={this.changeState}
                      resetTable={this.resetTable}

          >
          </FormSearch>
        </div>
        <div className="tables" style={{minHeight:this.state.minHeight- 122 -15}}>
          <MyTable ref="logTable"
                   onChange={this.onChange}
                   pageSize={this.state.pageSize}
                   showModal={this.modalView}
                   data={this.state.data}
                   total={this.state.total}
                   getXml={this.getXml}
          >
          </MyTable>
        </div>
        <div>
          <LogKeyModal visible={this.state.modalVisible}
                       hideModal={this.modalView}
                       data={this.state.xml}
          >

          </LogKeyModal>
        </div>
      </div>
    )
  }
}


const mapDispatchtoProps = {
  getLogList,
  getReportedCatgList,
  getReportedCatgLists,
}
const mapStateToProps = (state) => {
  return {
    reportedLog: state.get('reportedLog').toJS()
  }
}
export default connect(mapStateToProps, mapDispatchtoProps)(ReportedLog)






