/**
 * Created by hcz on 2017/2/20 0020.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Button, Icon,Table,Modal} from 'antd'
import NewFieldModal from './../components/NewFieldModal'
import '../style.scss'
const data = [
  {code:'SEX',name:'性别',dataType:'文本',format:'',mark:''},
  {code:'NAME',name:'姓名',dataType:'文本',format:'',mark:''},
  {code:'BIRTHDAY',name:'生日',dataType:'日期',format:'YYYY-MM-DD',mark:''}
]
const confirm = Modal.confirm;
/***
 * 数据类型for模型配置
 */
class DataEntityForModule extends Component {
  constructor(props) {
    super(props)
    this.state={
      addFileVisible:false
    }
    this.onCancelModal = this.onCancelModal.bind(this)
  }

  //新增字段modal显示
  onAddFile(){
    this.setState({
      addFileVisible:true
    })
  }
  //新增字段modal隐藏
  onCancelModal(){
    this.setState({
      addFileVisible:false
    })
  }
  //字段编辑
  onEdit(row){
    console.log(row)
  }
  //字段删除
  onDelete(row){
    console.log(row)
    confirm({
      title: '提示',
      content: '你确定需要删除吗？',
      onOk() {
        console.log('OK');
      },
      onCancel() {}
    });
  }
  //字段上移
  onUp(row){
    console.log(row)
  }
  //字段下移
  onDown(row){
    console.log(row)
  }
  render() {
    const that = this
    const columns = [{
      title: '编码',
      dataIndex: 'fieldName',
      key: 'fieldName'
    },{
      title: '名称',
      dataIndex: 'fieldAlias',
      key: 'fieldAlias'
    }, {
      title: '显示格式',
      dataIndex: 'fieldFormat',
      key: 'fieldFormat'
    }, {
      title: '描述',
      dataIndex: 'fieldDesc',
      key: 'fieldDesc'
    }, {
      title: '',
      dataIndex: 'action',
      key: 'action',
      render(text,row){
        return(
          <div className="operation">
            <Icon type='edit' title='编辑' onClick={()=>that.onEdit(row)}/>
            <Icon type='delete' title='删除' onClick={()=>that.onDelete(row)}/>
            <Icon type='arrow-up' title='上移' onClick={()=>that.onUp(row)}/>
            <Icon type="arrow-down" title='下移' onClick={()=>that.onDown(row)}/>
          </div>
        )
      }
    }]
    return (
      <div id="fieldList">
          <div className="fieldHeader">
            <h3>字段列表</h3>
            <div className='right'>
              <Button type='primary' icon='plus' onClick={()=>this.onAddFile()}>新建字段</Button>
            </div>
          </div>
          <Table style={{marginTop:15}} columns={columns} size="middle" dataSource={this.props.list}/>
          <NewFieldModal visible={this.state.addFileVisible} onCancel={this.onCancelModal}></NewFieldModal>
      </div>
    )
  }
}
export default DataEntityForModule
