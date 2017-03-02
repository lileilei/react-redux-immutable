/**
 * Created by hcz on 2017/2/20.
 * 查询配置和模型配置公用的头部
 */
import React, {Component} from 'react'
import {Button,Icon,Modal} from 'antd'
import '../style.scss'
import EntityEditModal from './DataEntityEdit'
const label_arr = ['模型配置','查询配置']
const confirm = Modal.confirm;
class EntityHeader extends Component {
  constructor(props) {
    super(props)
    this.state ={
      btnLabel: label_arr[0],
      editVisible:false
    }
    this.onEntityEditClose  = this.onEntityEditClose.bind(this)
    this.onEditSave = this.onEditSave.bind(this)
  }

  /**
   * 修改数据实体
   */
  onEdit(){
    this.setState({
      editVisible:true
    })
  }
  /*
  * 关闭数据实体编辑窗口
  */
  onEntityEditClose(){
    this.setState({
      editVisible:false
    })
  }
  /*
  * 更新数据实体
  */
  onEditSave(value){
    this.props.fetchEntityUpdate({...value})
  }
  /**
   * 删除数据实体
   */
  onDel(){
    const that  = this
    confirm({
      title: '提示',
      content: '你确定需要删除吗？',
      onOk() {
       that.props.fetchEntityDelete({objectId:that.props.entityInfo.objectId})
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
      <div className='entity-title clearfix'>
        <h2>数据实体:{this.props.name}</h2>
        <div className="choose-area">
          <Button type="default" style={{marginRight:15}} onClick={(e)=>this.onSwap(e)}>
            {this.state.btnLabel}<Icon type="swap"/>
          </Button>
        </div>
        <div className='operate-area'>
          <Button type='primary' icon='edit' style={{marginRight:15}} onClick={()=>this.onEdit()}>编辑数据实体</Button>
          <Button type='primary' icon='delete' onClick={()=>this.onDel()}>删除数据实体</Button>
        </div>
        <EntityEditModal onCancel={this.onEntityEditClose} visible={this.state.editVisible} entityInfo={this.props.entityInfo} onSubmit={this.onEditSave}></EntityEditModal>
      </div>
    )
  }
}
export default EntityHeader
