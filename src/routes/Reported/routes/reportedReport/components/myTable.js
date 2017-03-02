/**
 * Created by Administrator on 2016/12/13.
 */
import React, {Component, PropTypes} from 'react'
import {Table, Icon, Button} from 'antd';
import '../style.scss';

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
    this.setCurrentPage = this.setCurrentPage.bind(this)
  }

  setCurrentPage(page) {
    this.setState({current: page});
  }

  render() {


    const columns = [{
      title: '上报任务',
      dataIndex: 'taskName',
      key: 'taskName'
    }, {
      title: '上报次数',
      dataIndex: 'reportingTimes',
      key: 'reportingTimes'
    }, {
      title: '上报数据总数',
      dataIndex: 'reportingCount',
      key: 'reportingCount',
    }, {
      title: '开始时间',
      dataIndex: 'beginTime',
      key: 'beginTime'
    }, {
      title: '结束时间',
      dataIndex: 'endTime',
      key: 'endTime'
    }, {
      title: '上报周期',
      dataIndex: 'reportingInterval',
      key: 'reportingInterval'
    }, {
      title: '下次上报时间',
      dataIndex: 'nexReportingTime',
      key: 'nexReportingTime'
    },
    ];
    const pagination = {
      current: this.state.current,
      pageSize: this.props.pageSize,
      onChange: this.setCurrentPage,
      // pageSizeOptions:[5,10,15,20],
      // showSizeChanger:true,
    };
    return (
      <Table className='mytable'
             size='middle'
             rowKey='taskId'
             columns={columns}
             dataSource={this.props.data}
             pagination={pagination}
             loading={false}
             onRowClick={this.props.goDetail}
      />
    )
  }
}







