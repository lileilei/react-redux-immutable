/**
 * Created by yll on 2016/10/28.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, browserHistory} from 'react-router'
import {Spin, message, Select} from 'antd';
const Option = Select.Option;

import MyTable from './components/myTable.js'
import SearchForm from './components/FormSearch.js'

import {getReportedReportList, getReportedCatgList, getReportedCatgLists} from './action.js'

import './style.scss'
class ReportedReport extends Component {
  constructor(props) {
    super(props)
    this.state = {
      minHeight: 0,
      pageSize: 10,
      data2: {},
      defaultData: [],

    }
    /*函数绑定*/
    this.FunBind()
  }

  FunBind() {
    this.onChange = this.onChange.bind(this)
    this.resize = this.resize.bind(this)
    this.changeState = this.changeState.bind(this)

  }

  //设置高度
  resize() {
    this.setState({
      minHeight: document.body.offsetHeight - 60
    })
  }

  componentDidMount() {
    var obj = [];
    obj['全部'] = []
    const defaultData = [];
    var that = this
    this.props.getReportedCatgList()
    this.props.getReportedCatgLists().then(function () {
      const {catgs} = that.props.reportedReport

      for (var i = 0; i < catgs.length; i++) {

        //设置obj内属性的类型(数组)
        if (obj[catgs[i].taskCatg] == undefined) {
          obj[catgs[i].taskCatg] = []
        }
        //去重
        if (obj[catgs[i].taskCatg].indexOf(catgs[i].taskName) == -1) {
          obj[catgs[i].taskCatg].push(catgs[i].taskName)
        }
        if (defaultData.indexOf(catgs[i].taskName) == -1) {
          if (typeof catgs[i].taskName == 'number') {
            catgs[i].taskName = catgs[i].taskName.toString()
          }
          defaultData.push(<Option key={i.toString()} value={catgs[i].taskName}> {catgs[i].taskName}</Option>)
          obj['全部'].push(catgs[i].taskName)
        }
      }

      that.setState({data2: obj})
      that.setState({defaultData: defaultData})

    })
    that.onChange(1)
    this.resize()
    Ewell.resizeFunc.push(this.resize)

  }

  changeState(value) {
    this.setState({defaultData: value})
  }


  componentDidUpdate() {
    // const {needRefresh} = this.props.reportedReport
    // if (needRefresh === true) {
    // 表格跳转到首页
    // this.onChange(1)
    // }
  }

  //搜素按钮
  onChange(page) {
    var formValue = this.refs['searchForm'].getFieldsValue();
    var tableValue = this.refs['reportMyTable'];
    tableValue.setCurrentPage(page);
    var mes = {};
    this.props.getReportedReportList({
      'taskName': formValue.taskName,
      'taskCatg': formValue.catg == '全部' ? '' : formValue.catg
    })
  }

//跳转到具体上传任务
  goDetail(id, index) {
    var url = '/dcms/home/reported/reportedReportDetail/' + id.taskId
    browserHistory.push(url)
  }

  render() {
    const {fetching, result, catg, catgs} = this.props.reportedReport


    return (
      <Spin spinning={fetching}>
        <div id="reportedReport" style={{minHeight:this.state.minHeight}}>
          <div className="searchForm">
            <SearchForm ref="searchForm"
                        onChange={this.onChange}
                        data1={catg}
                        data2={this.state.data2}
                        changeOption={this.state.defaultData}
                        changeState={this.changeState}

            >
            </SearchForm>
          </div>
          <div className="tables" style={{minHeight:this.state.minHeight- 122 -15}}>
            <MyTable ref="reportMyTable"
                     style={{height:this.state.minHeight}}
                     onChange={this.onChange}
                     pageSize={this.state.pageSize}
                     goDetail={this.goDetail}
                     data={result}
            >

            </MyTable>
          </div>

        </div>
      </Spin>
    )
  }
}

const mapDispatchtoProps = {
  getReportedReportList,
  getReportedCatgList,
  getReportedCatgLists,

}
const mapStateToProps = (state) => {
  return {
    reportedReport: state.get('reportedReport').toJS()
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(ReportedReport)




















