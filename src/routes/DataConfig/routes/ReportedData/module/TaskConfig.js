/**
 * Created by Administrator on 2017/2/21 0021.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Button, Icon,Table,Row,Col} from 'antd'
import '../style.scss'
import NewFieldModal from '../components/NewField'
class TaskConfig extends Component {
  constructor(props) {
    super(props)
    this.state={
      newFieldVisible:false
    }
    this.onNewFieldCan = this.onNewFieldCan.bind(this)
  }

  //数据编辑
  handleEdit(row) {
    console.log(row)
  }

  //数据删除
  handleDelete(row) {
    console.log(row)
  }
  //新增字段modal 弹出
  onNewField(){
    this.setState({
      newFieldVisible:true
    })
  }

  //新增字段modal隐藏
  onNewFieldCan(){
    this.setState({
      newFieldVisible:false
    })
  }
  render() {
    const that =  this
    const columns = [{
      title: '编码',
      dataIndex: 'code',
      key: 'code'
    }, {
      title: '名称',
      dataIndex: 'name',
      key: 'name'
    }, {
      title: '映射列',
      dataIndex: 'defaultValue',
      key: 'defaultValue'
    }, {
      title: '是否过滤',
      dataIndex: 'ifNot',
      key: 'ifNot'
    }, {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      render(text,row){
        return(
          <div>
          <Icon type='edit' title='编辑' style={{fontSize:'14px',padding:'0 5px'}} onClick={()=>that.handleEdit(row)}/>
          <Icon type='delete' title='删除' style={{fontSize:'14px',padding:'0 5px'}} onClick={()=>that.handleDelete(row)}/>
          </div>
        )
      }
    }];
    return (
      <div id="taskModule">
        <h3 className="tit">任务定时</h3>
          <div className="taskTime"  style={{margin:'0 15px'}}>
          <Row><Col span="8" offset="1"><span>开始时间：2015-12-12 02:00</span></Col><Col span="15"><span>结束时间：2015-12-20 02:20</span></Col></Row>
          <Row><Col span="8" offset="1"><span>执行时间：每周三上报</span></Col></Row>
          </div>
          <div className='reportedDataFormat clearfix'>
          <h3  className="tit"  style={{float:'left'}}>上报数据格式</h3>
            <Button type='primary' icon='plus' style={{float:'right',margin:'15px 15px 5px 0'}} onClick={()=>this.onNewField()}>新建字段</Button>
          </div>
        <Table style={{margin:'0 15px'}} columns={columns} size="middle"/>
        <NewFieldModal visible={this.state.newFieldVisible} onCancel={this.onNewFieldCan}></NewFieldModal>
      </div>
    )
  }
}
export default TaskConfig
