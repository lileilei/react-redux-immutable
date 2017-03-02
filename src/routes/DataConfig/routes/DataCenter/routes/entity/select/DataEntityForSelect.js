/**
 * Created by hcz on 2017/2/17.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Button, Icon,Input,Select,Table,Radio,Modal} from 'antd'
import NewArgument from '../components/NewArgument'
import FieldEdit from '../components/FieldEdit'
import '../style.scss'
const confirm = Modal.confirm
const RadioGroup = Radio.Group;
/***
 * 数据类型for查询配置
 */
  const data2 = [{code:'SEX',name:'性别',defaultValue:'文本',ifNot:''}]
class DataEntityForSelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 1,
      typeValue: 1,
      newArgumentVisible:false,
      buttonShow:false,
      editVisible:false
    }
    this.doFuncBind()
  }
  doFuncBind(){
    this.onNewArgumentClose = this.onNewArgumentClose.bind(this)
    this.onEditClose = this.onEditClose.bind(this)
  }
  //---------------------
  // 查询实现配置类型选择
  //---------------------
  onChangeType(e) {
    this.setState({
      typeValue: e.target.value
    })
    if(e.target.value === 3){
      this.setState({
        buttonShow: true
      })
    }else{
      this.setState({
        buttonShow: false
      })
    }
  }
//新增参数modal弹出
  onNewArguments(){
    this.setState({
      newArgumentVisible:true
    })
  }
//新增参数modal隐藏
  onNewArgumentClose(){
    this.setState({
      newArgumentVisible:false
    })
  }
  //字段映射编辑
  handleEdit(row){
    this.setState({
      editVisible:true
    })
  }
  //字段映射编辑modal隐藏
  onEditClose(){
    this.setState({
      editVisible:false
    })
  }
  //字段映射删除
  handleDelete(row){
    confirm({
      title: '提示',
      content: '你确定需要删除吗？',
      onOk() {
        console.log('OK');
      },
      onCancel() {}
    });
  }
  render() {
    const that = this
    const columns = [{
      title: '名称',
      dataIndex: 'name',
      key: 'name'
    }, {
      title: '数据类型',
      dataIndex: 'dataType',
      key: 'dataType'
    }, {
      title: '默认值',
      dataIndex: 'defaultValue',
      key: 'defaultValue'
    }, {
      title: '是否启用输入',
      dataIndex: 'ifNot',
      key: 'ifNot'
    }, {
      title: '操作',
      dataIndex: 'action',
      key: 'action'
    }];
    const columns2 = [{
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
          <div className="operation">
              <Icon type='edit' title='编辑' style={{padding:'0 5px'}} onClick={()=>that.handleEdit(row)}/>
              <Icon type='delete' title='删除'  style={{padding:'0 5px'}}  onClick={()=>that.handleDelete(row)}/>
          </div>
        )
      }
    }];

    return (
      <div id="dataEntityForSelect">
        <div>
          <div className="clearfix">
            <h3>查询实现配置</h3>
          </div>
          <div className="searchConfig">
            <RadioGroup onChange={(e)=>this.onChangeType(e)} value={this.state.typeValue}>
              <Radio value={1}>表</Radio>
              <Radio value={2}>视图</Radio>
              <Radio value={3}>存储过程</Radio>
            </RadioGroup>
            <Select defaultValue="lucy" style={{ width: 120 }}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
            </Select>
            {this.state.buttonShow ? <Button onClick={()=>this.onNewArguments()}>新增参数</Button> : ''}
            <Table style={{marginTop:15}} columns={columns} size="middle"/>
          </div>
        </div>
        <div className="fieldMap-area">
          <div className="fieldMap-title clearfix">
            <h3>字段映射</h3>
          </div>
          <Table style={{marginTop:15}} columns={columns2} size="middle" dataSource={data2}/>
        </div>
        <NewArgument onCancel={this.onNewArgumentClose} visible={this.state.newArgumentVisible}></NewArgument>
        <FieldEdit  onCancel={this.onEditClose} visible={this.state.editVisible}></FieldEdit>
      </div>
    )
  }
}
const mapDispatchtoProps = {}
const mapStateToProps = (state) => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchtoProps)(DataEntityForSelect)
