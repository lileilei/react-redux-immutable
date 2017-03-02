/**
 * Created by Administrator on 2016/12/13.
 */
import React, {Component, PropTypes} from 'react'
import {Table, Icon, Button} from 'antd';
import '../style.scss';
import check from  '../assets/check.png'


export default class MyTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
    };
    /*函数绑定*/
    this.FunBind()

  }

  FunBind() {
    this.getBatchData = this.getBatchData.bind(this)
  }

  setCurrentPage(page) {
    this.setState({current: page});
  }

  getBatchData(record) {
    this.props.showModal(true)
    this.props.getBatchList('table', 1, record)

  }


  render() {
    const data = [
      {batchNumber: 11, reportingTime: 12, rdTotalNum: 13, reportingStatus: 1, g: 15, h: 16, j: 17},
      {batchNumber: 21, reportingTime: 22, rdTotalNum: 23, reportingStatus: 0, g: 25, h: 26, j: 27},
      {batchNumber: 31, reportingTime: 32, rdTotalNum: 33, reportingStatus: -1, g: 35, h: 36, j: 37},
      {batchNumber: 41, reportingTime: 42, rdTotalNum: 43, reportingStatus: 0, g: 45, h: 46, j: 47},
      {batchNumber: 51, reportingTime: 52, rdTotalNum: 53, reportingStatus: 1, g: 55, h: 56, j: 57},
    ]
    const columns = [{
      title: '批次号',
      dataIndex: 'batchNumber',
      key: 'batchNumber'
    }, {
      title: '上报时间',
      dataIndex: 'reportingTime',
      key: 'reportingTime'
    },
      {
        title: '上报数据总数',
        dataIndex: 'rdTotalNum',
        key: 'rdTotalNum',
      }, {
        title: '上报状态',
        dataIndex: 'reportingStatus',
        key: 'reportingStatus',
        render: (text, record, index) => {
          return record = {'-1': '待上报', '0': '上报失败', '1': '上报成功'}[text]
        }
      }, {
        title: '操作',
        key: 'caozuo',
        render: (text, record, index) => {
          return (
            <span className="action-button">
            <img title="查看" src={check} onClick={()=> this.getBatchData(record)}
                 style={{cursor:'pointer',width:'17px',height:'18px'}}/>
          </span>
          )
        }
      },
    ];
    const pagination = {
      current: this.state.current,
      total: this.props.total,
      pageSize: this.props.pageSize,
      onChange: this.props.onChange,
      // pageSizeOptions:[5,10,15,20],
      // showSizeChanger:true,
    };
    return (
      <Table rowKey="id"
             size='middle'
             columns={columns}
             dataSource={this.props.data}
             pagination={pagination}
             loading={this.props.fetching}
      />
    )
  }
}




