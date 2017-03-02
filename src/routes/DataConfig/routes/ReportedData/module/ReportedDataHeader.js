/**
 * Created by Administrator on 2017/2/21 0021.
 */
/**
 * 查询配置和任务配置公用的头部
 */
import React, {Component} from 'react'
import {Button,Icon,Modal} from 'antd'
import '../style.scss'
import EditReportTask from '../components/EditReportTask'
const confirm = Modal.confirm;
const label_arr = ['查询配置','任务配置']
class ReportedDataHeader extends Component {
  constructor(props) {
    super(props)
    this.state ={
      btnLabel: label_arr[0],
      type:0,
      editModalVisible:false
    }
    this.onEditCan = this.onEditCan.bind(this)
  }

  /**
   * 修改上报任务
   */
  onEdit(){
    this.setState({
      editModalVisible:true
    })
  }
  /*
  * 隐藏编辑窗口
  */
  onEditCan(){
    this.setState({
      editModalVisible:false
    })
  }
  /**
   * 删除上报任务
   */
  onDel(){
    confirm({
      title: '提示',
      content: '你确定需要删除吗？',
      onOk() {
        console.log('OK');
      },
      onCancel() {}
    });

  }

  /**
   * 按钮切换
   */
  onSwap(e){
    if(this.state.btnLabel === label_arr[0]){
      this.setState ({btnLabel:label_arr[1]})
      this.props.changeType(1)
    }else{
      this.setState ({btnLabel:label_arr[0]})
      this.props.changeType(0)
    }
  }
  /**
   * 数据渲染
   * @returns {XML}
   */
  render() {
    return(
      <div className='contentHeader clearfix'>
        <h2>上报任务：HQMS</h2>
        <div className="choose-area">
          <Button type="default" style={{marginRight:15}} onClick={(e)=>this.onSwap(e)}>
            {this.state.btnLabel}<Icon type="swap"/>
          </Button>
        </div>
        <div className='operate-area'>
          <Button type='primary' icon='edit' style={{marginRight:15}} onClick={()=>this.onEdit()}>编辑上报任务</Button>
          <Button type='primary' icon='delete' onClick={()=>this.onDel()}>删除上报任务</Button>
        </div>
        <EditReportTask onCancel={this.onEditCan} visible={this.state.editModalVisible}></EditReportTask>
      </div>
    )
  }
}
export default ReportedDataHeader
