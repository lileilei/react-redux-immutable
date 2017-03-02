/**
 * Created by lilei on 2016/10/28.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  fetchRightList,fetchLeftList,fetchEntitleDetail,fetchNewEntityCon,fetchAddToSort,fetchRemoveEntity,
  fetchUpdateEntitySort,fetchDeleteEntitySort,fetchAdjustOrder} from './action'
import {Button,Input,Checkbox,Modal,Upload,message} from 'antd';
import TransferModal from './components/TransferModule'
import EditModal from './components/EditModal'
import NewEntityModal from './components/NewEntity'
/*-----------图片引入------------*/
import add from '../../../../assets/add.png'
import insert from '../../../../assets/insert.png'
import out from '../../../../assets/out.png'

const Search = Input.Search;
const confirm = Modal.confirm;
import './style.scss'
class SortContainer extends Component {
  constructor(props) {
    super(props)
    this.resize = this.resize.bind(this)
    this.state = {
      minHeight: 0,
      editVisible: false,
      newEntityVisible: false,
      id:this.props.params.id
    }
    this.doFunbind()
  }

// 函数绑定
  doFunbind() {
    this.onEditCan = this.onEditCan.bind(this)
    this.onEntityCan = this.onEntityCan.bind(this)
    this.onNewEntitySubmit = this.onNewEntitySubmit.bind(this)
    this.onUporDown = this.onUporDown.bind(this)
    this.addOrDelete = this.addOrDelete.bind(this)
    this.onSaveEdit = this.onSaveEdit.bind(this)
  }

  resize() {
    this.setState({
      minHeight: document.body.offsetHeight - 66
    })
  }

  componentDidMount() {
    this.resize()
    Ewell.resizeFunc.push(this.resize)
    this.onChange(this.props.params.id)
  }
  //检测id 改变
  componentWillReceiveProps(nextprops){
    if(nextprops.params.id != this.state.id){
      this.setState({
        id: nextprops.params.id
      })
      this.onChange(nextprops.params.id)
    }
  }
  onChange(id) {
    this.props.fetchRightList({catgId: id})
    this.props.fetchLeftList({catgId: id})
    this.props.fetchEntitleDetail({catgId:id})
  }

  //编辑
  onEdit() {
    this.setState({
      editVisible: true
    })
  }

  //编辑窗口关闭按钮点击事件
  onEditCan() {
    this.setState({
      editVisible: false
    })
  }
  //编辑保存
  onSaveEdit(value){
  Object.assign(value,{
    dcId:this.props.sort.entityDetail.dcId ,
    catgId:this.state.id
  })
  this.props.fetchUpdateEntitySort({...value})
  }
  //删除
  onDel() {
    const that = this
    confirm({
      title: '提示',
      content: '你确定需要删除吗？',
      onOk() {
       that.props.fetchDeleteEntitySort({catgId:that.state.id})
      },
      onCancel() {
      }
    });
  }

  //新建实体
  newEntity() {
    this.setState({
      newEntityVisible: true
    })
  }

  //新增实体modal隐藏
  onEntityCan() {
    this.setState({
      newEntityVisible: false
    })
  }
  //新增实体保存
  onNewEntitySubmit(value){
    //新建实体不分类
    //this.props.fetchNewEntitySort({...value})
    Object.assign(value,{
      catgId:this.state.id
    })
    //新建实体并分类
    this.props.fetchNewEntityCon({...value})
  }
  //批量导出
  onExport() {
      window.location = baseUrl + '/dataCenterManage/exportObjectList.do'
  }
  //分类上移下移
  onUporDown(value){
    this.props.fetchAdjustOrder({...value})
  }
  //将实体添加至分类或从分类中移除实体
  addOrDelete(direction,keys){
    const value = {}
    Object.assign(value,{
      catgId:this.state.id,
      objectIds:keys.toString()
    })
    if(direction === 0){
      this.props.fetchAddToSort({...value})
    }else{
      this.props.fetchRemoveEntity({...value})
    }
  }
  //页面刷新
  componentDidUpdate(){
    const {needfresh,flag} = this.props.sort
    if(needfresh){
     this.onChange(this.state.id)
    }
    if(flag){
      this.props.fetchLeftList({catgId:this.state.id})
    }
  }
  render() {
    const {rightList,leftList,entityDetail} = this.props.sort
    //上传excel
    const props = {
      name: 'file',
      action: baseUrl + '/dataCenterManage/importObjectList.do',
      headers: {
        "X-Requested-With": 'XMLHttpRequest',
        //authorization: 'authorization-text',
        "Content-Type":'multipart/form-data'
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.error('导入失败');
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} 导入成功`);
        } else if (info.file.status === 'error') {
          message.error('导入失败');
        }
      }
    }
    return (
      <div id="sort-view">
        <div className='title clearfix'>
          <h2>数据分类:{entityDetail.catgName}</h2>
          <div className='right'>
            <Button type='primary' icon='edit' style={{marginRight:15}} onClick={()=>this.onEdit()}>编辑</Button>
            <Button type='primary' icon='delete' onClick={()=>this.onDel()}>删除</Button>
          </div>
        </div>
        <div className='clearfix'>
          <div className="smallTitle  clearfix " style={{float:'left',marginLeft:'10px', padding: '20px 0 5px 25px'}}>
            <h3>分类中的实体</h3>
            <span onClick={()=>this.newEntity()}><img src={add}/>新建实体</span>
          </div>
          <div className="smallTitle  clearfix "
               style={{float:'right',marginRight:'30px', padding: '20px 15px 5px 5px'}}>
            <h3>所有分类中的实体</h3>
            <Upload {...props}><span><img src={insert}/>excel导入</span></Upload>
            <a href={baseUrl + '/dataCenterManage/exportObjectList.do'}><span className='special'><img src={out}/>批量导出</span></a>
          </div>
        </div>
        <div className="mainContent">
          <div className='main'>
            <TransferModal  rightList={rightList} leftList={leftList} onUporDown={this.onUporDown} entityDetail={entityDetail} catgId={this.state.id}
                            addOrDelete={this.addOrDelete}></TransferModal>
          </div>
        </div>
        <EditModal visible={this.state.editVisible} onCancel={this.onEditCan} entityDetail={entityDetail} onSave={this.onSaveEdit}></EditModal>
        <NewEntityModal visible={this.state.newEntityVisible} onCancel={this.onEntityCan} onSubmit={this.onNewEntitySubmit}></NewEntityModal>
      </div>
    )
  }
}
const mapDispatchtoProps = {
  fetchRightList,//右侧的列表
  fetchLeftList,//左侧的列表
  fetchAdjustOrder, //调整实体分类顺序
  fetchNewEntityCon, //新增实体并进行分类关联
  fetchAddToSort, //添加实体到分类
  fetchRemoveEntity, //从分类下移除实体
  fetchDeleteEntitySort,//删除实体分类
  fetchUpdateEntitySort,//修改实体分类
  fetchEntitleDetail//实体信息
}
const mapStateToProps = (state) => {
  return {
    sort: state.toJS().sort
  }
}
export default connect(mapStateToProps, mapDispatchtoProps)(SortContainer)
