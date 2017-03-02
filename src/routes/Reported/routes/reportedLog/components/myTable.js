/**
 * Created by Administrator on 2016/12/13.
 */
import React,{Component,PropTypes} from 'react'
import {Table,Icon,Button} from 'antd';
import '../style.scss';

export default class MyTable extends Component {
  constructor(props) {
    super(props);
    this.state={
      current:1,
    };
    /* 函数绑定*/
    this.doFunBind()
  }
  doFunBind(){
    this.showModal = this.showModal.bind(this)
  }
  showModal(record){
    this.props.getXml(record.content)
    this.props.showModal(true);
  }
  setCurrentPage(page){
    this.setState({current: page});
  }

  render() {

    const columns = [{
      title: '上报时间',
      dataIndex: 'reportingTime',
      key: 'reportingTime'
    }, {
      title: '上报任务',
      dataIndex: 'taskName',
      key: 'taskName'
    }, {
      title: '动作',
      dataIndex: 'actionType',
      key: 'actionType',
      render:(text,record,index) =>{
        return record = {'1':'开始上传','2':'数据(文档)上传','3':'数据量登记','4':'数据上传','5':'结束上传','6':'取消上传'}[text]
      }
    }, {
      title: '批次号',
      dataIndex: 'batchNo',
      key: 'batchNo'
    },{
      title: '上传数据',
      dataIndex:'content',
      key: 'content',
      render: (text,record)=> {
        return (
          <span  style={{textDecoration: 'underline',color:'#6A36C8',cursor:'pointer'}} onClick={()=>this.showModal(record)}>{text ? '数据主键' : '' }</span >
        )
      }
    },{
      title: '动作状态',
      dataIndex: 'actionStatus',
      key: 'actionStatus',
      render:(text,record,index) =>{
        return record = {'0':'失败','1':'成功'}[text]
      }
    },
    ];
    const pagination = {
                        total:this.props.total,
                        current:this.state.current,
                        pageSize:this.props.pageSize,
                        onChange: this.props.onChange,
                        // pageSizeOptions:[5,10,15,20],
                        // showSizeChanger:true,
                        };
    return (
        <Table className='mytable'
               size='middle'
               columns={columns}
               rowKey='id'
               dataSource={this.props.data}
               pagination={pagination}
               loading={false}
               onRowClick={this.props.goDetail}
        />
    )
  }
}


