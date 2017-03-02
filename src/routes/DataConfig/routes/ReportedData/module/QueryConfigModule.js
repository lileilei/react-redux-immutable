/**
 * Created by Administrator on 2017/2/21 0021.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Button, Icon,Table,Modal,Radio,Select} from 'antd'
import NewParamsModal from '../components/NewParamsModal'
import NewConnection from '../components/NewConnection'
const RadioGroup = Radio.Group;
const Option = Select.Option;
import '../style.scss'
const confirm = Modal.confirm;
class QueryConfigModule extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 1,
      typeValue: 1,
      newParamsVisible:false,
      newConnectionVisible:false
    }
    this.onNewParamsCan = this.onNewParamsCan.bind(this)
    this.onNewConnectionCan = this.onNewConnectionCan.bind(this)
  }
  //---------------------
  //数据源链接选择
  //---------------------
  onChangeSql(e) {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value
    });
  }
  //新增连接modal显示
  onNewConnection(){
    this.setState({
      newConnectionVisible:true
    })
  }
  //新增连接modal隐藏
  onNewConnectionCan(){
    this.setState({
      newConnectionVisible:false
    })
  }
  //数据源编辑
  updateSql(e) {
    console.log(e)
  }

  //数据源删除
  deleteSql(e) {
    console.log(e)
    confirm({
      title: '提示',
      content: '你确定需要删除吗？',
      onOk() {
        console.log('OK');
      },
      onCancel() {}
    });
  }
  /*
  * 新增参数
  */
  onNewParams(){
    this.setState({
      newParamsVisible:true
    })
  }
  /*
  * 新增参数modal隐藏
  */
  onNewParamsCan(){
    this.setState({
      newParamsVisible:false
    })
  }
  //---------------------
  // 查询实现配置类型选择
  //---------------------
  onChangeType(e) {
    console.log('radio checked', e.target.value);
    this.setState({
      typeValue: e.target.value
    });
  }
  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px'
    };
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
      key: 'action'
    }];
    return (
      <div>
      <div id="queryModule">
        <div className="clearfix">
          <h3 style={{ float: 'left',display: 'inline-block',margin:'15px 0 10px 0'}}>数据源连接选择</h3>
          <Button type="primary" icon="plus" style={{float:'right',margin:'15px 15px 5px 0'}} onClick={()=>this.onNewConnection()}>新建连接</Button>
        </div>
        <div className="sqlConnection">
          <RadioGroup style={{display:'block'}} onChange={(e)=>this.onChangeSql(e)} value={this.state.value}>
            <Radio style={radioStyle} value={1}>
              <Icon onClick={(e)=>this.deleteSql(e)} type="delete"/>
              <Icon onClick={(e)=>this.updateSql(e)} type="edit"/>
              Option A</Radio>
            <Radio style={radioStyle} value={2}>
              <Icon onClick={(e)=>this.deleteSql(e)} type="delete"/>
              <Icon onClick={(e)=>this.updateSql(e)} type="edit"/>
              Option B</Radio>
            <Radio style={radioStyle} value={3}>
              <Icon onClick={(e)=>this.deleteSql(e)} type="delete"/>
              <Icon onClick={(e)=>this.updateSql(e)} type="edit"/>
              Option C</Radio>
            <Radio style={radioStyle} value={4}>
              <Icon onClick={(e)=>this.deleteSql(e)} type="delete"/>
              <Icon onClick={(e)=>this.updateSql(e)} type="edit"/>
              Option D
            </Radio>
          </RadioGroup>
        </div>
        <h3 className="tit">查询实现配置</h3>
        <div className="searchConfig">
          <RadioGroup onChange={(e)=>this.onChangeType(e)} value={this.state.typeValue}>
            <Radio value={1}>表</Radio>
            <Radio value={2}>视图</Radio>
            <Radio value={3}>存储过程</Radio>
          </RadioGroup>
          <Select defaultValue="lucy" style={{ width: 120 }}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>Disabled</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
          <Button onClick={()=>this.onNewParams()}>新增参数</Button>
          <Table style={{marginTop:15}} columns={columns} size="middle"/>
        </div>
        <h3 className="tit special">字段映射</h3>
        <Table style={{marginTop:15}} columns={columns2} size="middle"/>
      </div>
        <NewParamsModal visible={this.state.newParamsVisible} onCancel={this.onNewParamsCan}></NewParamsModal>
        <NewConnection  visible={this.state.newConnectionVisible} onCancel={this.onNewConnectionCan}></NewConnection>
     </div>
    )
  }
}
export default QueryConfigModule
