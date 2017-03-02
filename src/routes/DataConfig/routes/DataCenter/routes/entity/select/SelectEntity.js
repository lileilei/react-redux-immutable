/**
 * Created by hcz on 2017/2/20.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Icon,Radio,Button} from 'antd'
import '../style.scss'
const RadioGroup = Radio.Group;
import DataEntityForSelect from './DataEntityForSelect'
import DocEntityForSelect from './DocEntityForSelect'
import NewConnection from '../components/NewConnection'

const dataCon = [{name:'数据连接1',id:'1'},{name:'数据连接2',id:'2'},{name:'数据连接3',id:'3'},{name:'数据连接4',id:'4'}]
/***
 * 查询配置的入口
 */
class SelectEntity extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
      newConVisible:false
    }
    this.doFuncBind()
  }
  doFuncBind(){
    this.onNewModalClose = this.onNewModalClose.bind(this)
    this.onNewConnectionSave = this.onNewConnectionSave.bind(this)
  }

  //---------------------
  //数据源链接选择
  //---------------------
  onChangeSql(e) {
    console.log(e)
    this.setState({
      value: e.target.value
    })
  }

  //数据源编辑
  updateSql(e) {
    console.log(e)
  }
  //数据源删除
  deleteSql(e,i) {
    this.setState({
      value: 0
    })
    dataCon.splice(i,1)

  }
//新增数据源
  onNewConnection(){
    this.setState({
      newConVisible:true
    })
  }
  //新增数据连接保存
  onNewConnectionSave(value){
    dataCon.push(value)
    this.setState({
      newConVisible:false
    })
  }
//关闭新增链接modal
  onNewModalClose(){
    this.setState({
      newConVisible:false
    })
  }
  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px'
    }
    return(
      <div id="SelectEntity">
        <div className="clearfix">
          <h3>数据源连接选择</h3>
          <Button type="primary" icon="plus" style={{float:'right',margin:'15px 0px'}} onClick={()=>this.onNewConnection()}>新建连接</Button>
        </div>
        <div className="dataBase-connection">
          <RadioGroup style={{display:'block'}} onChange={(e)=>this.onChangeSql(e)} value={this.state.value}>
            {
              dataCon.map((item,i)=>{
                return(
                    <Radio style={radioStyle} value={i} key={i}>{item.name}
                      <Icon onClick={(e)=>this.deleteSql(e,i)} type="delete"/>
                      <Icon onClick={(e)=>this.updateSql(e,i)} type="edit"/>
                    </Radio>
                )
              })
            }
          </RadioGroup>
        </div>
        {
          this.props.type === 1 ? <DataEntityForSelect></DataEntityForSelect> :  <DocEntityForSelect></DocEntityForSelect>
        }
        <NewConnection onCancel={this.onNewModalClose} visible={this.state.newConVisible} onSave={this.onNewConnectionSave}></NewConnection>
      </div>
    )
  }
}
export default SelectEntity
