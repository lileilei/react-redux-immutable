/**
 * Created by lilei on 2016/10/28.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCdrInformation,fetchCdrUpdate,fetchCdrDelete,
  fetchCdrAddSort,fetchCdrSortList,fetchSortInformation,
  fetchAdjustSort,fetchSortUpdate,fetchSortDelete} from './action'
import {Button,Input,Row,Col,Icon,Modal} from 'antd';
import files from '../../../../assets/file.png'
import './style.scss'
import CdrEdit from './components/CdrEdit'
import CdrClassifyEdit from './components/CdrClassifyEdit'
var inpName = ''
class CdrContainer extends Component {
  constructor(props) {
    super(props)
    this.resize = this.resize.bind(this)
    this.state = {
      minHeight: 0,
      modalVisible:false,
      addVisible:false,
      sortVisible:false,
      createVisible:false,
      id:this.props.params.id
    }
    this.doFunBind()
  }
  doFunBind(){
    this.onModalClose = this.onModalClose.bind(this)
    this.onSortCancel = this.onSortCancel.bind(this)
    this.onCdrEditSave = this.onCdrEditSave.bind(this)
    this.onSortEditSave = this.onSortEditSave.bind(this)
  }
  resize() {
    this.setState({
      minHeight: document.body.offsetHeight - 66
    })
  }
  componentDidMount() {
    this.resize()
    Ewell.resizeFunc.push(this.resize)
    if(this.state.id){
      this.onChange(this.state.id)
    }
  }
  onChange(id){
    this.props.fetchCdrInformation({dcId:id})
    this.props.fetchCdrSortList({dcId:id})
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
  //页面刷新
  componentDidUpdate(){
    const {needRefresh,flag} = this.props.cdr
    if(needRefresh){
      this.props.fetchCdrInformation({dcId:this.state.id})
    }
    if(flag){
      this.props.fetchCdrSortList({dcId:this.state.id})
    }
  }
  //修改数据中心
  onEdit(){
 	this.setState({
    modalVisible:true
  })
  }
  //关闭编辑窗口
  onModalClose(){
    this.setState({
      modalVisible:false
    })
  }
  //保存编辑数据中心的内容
  onCdrEditSave(value){
    Object.assign(value,{
      dcId:this.state.id
    })
    this.props.fetchCdrUpdate({...value})
  }


  //删除数据中心
  onDel(){
 	var that = this
    Modal.confirm({
      title: '是否删除该数据中心？',
      content: '',
      okText: '确定',
      cancelText: '取消',
      onOk() {
        that.props.fetchCdrDelete({dcId:that.state.id})
      }
    })
  }
    //修改分类列表
  onEditList(item){
    this.setState({
      sortVisible:true
    })
    this.props.fetchSortInformation({catgId:item.catgId})
  }
  //关闭编辑窗口
  onSortCancel(){
    this.setState({
      sortVisible:false
    })
  }
  //保存分类编辑
  onSortEditSave(value){
    this.props.fetchSortUpdate({...value})
  }
  //删除分类列表
  onDelList(item){
   	var that = this
    Modal.confirm({
      title: '是否删除该分类？',
      content: '',
      okText: '确定',
      cancelText: '取消',
      onOk() {
      that.props.fetchSortDelete({catgId:item.catgId})
      }
    })
  }
   //上移分类列表
   onUpList(item){
     this.props.fetchAdjustSort({adjustType:'1',catgId:item.catgId})
  }
   //下移分类列表
   onDownList(item){
     this.props.fetchAdjustSort({adjustType:'2',catgId:item.catgId})
  }
   //新建分类
  onAddList(){
  	this.setState({addVisible:true})
  }
   //创建分类列表
   onCreateList(){
   	this.setState({addVisible:false,createVisible:false})
   	var inp = this.refs['inp']
   	//清空input框中之前填的值
   	inpName = inp.refs.input.value
   	inp.refs.input.value = ''
   	this.props.fetchCdrAddSort({dcId:this.state.id,catgName:inpName,catgDesc:''})
   }
   //取消创建分类列表
   onCancelList(){
   	this.setState({addVisible:false})
   	var inp = this.refs['inp']
   	//清空input框中之前填的值
   	inp.refs.input.value = ''
   }

  render() {
    const {cdrDetail,sortList,sortDetail} = this.props.cdr
    return (
      <div id="cdr-view">
        <div className='title'>
        <h2>数据中心:{cdrDetail.dcName}</h2>
        <div className='right'>
          <Button type='primary' icon='edit' style={{marginRight:15}} onClick={()=>this.onEdit()}>编辑数据中心</Button>
          <Button type='primary' icon='delete' onClick={()=>this.onDel()}>删除数据中心</Button>
        </div>
        </div>
        <div className='describle'>
          <h3>描述:</h3>
          <div className='desCon'>{cdrDetail.dcDesc}</div>
        </div>
        <div className='list'>
          <div className='title'>
            <h3>分类列表</h3>
            <div className='right'>
              <Button type='primary' icon='plus' onClick={()=>this.onAddList()}>新建分类</Button>
            </div>
          </div>
          <div className='listContent' style={{height:this.state.minHeight-413}}>
          	{ sortList.map((item,i) => {
          		return (
          			<Row key={i}>
                  <Col span='5'>
                    <img src={files} style={{marginRight:10}}/>
                    <span>{item.catgName}</span>
                  </Col>
                  <Col span='4' offset='15' className='actions'>
                    <Icon type="edit" title='修改' onClick={()=>this.onEditList(item)} />
                    <Icon type="delete" title='删除' onClick={()=>this.onDelList(item)} />
                    <Icon type="arrow-up" title='上移' onClick={()=>this.onUpList(item)} />
                    <Icon type="arrow-down" title='下移' onClick={()=>this.onDownList(item)} />
                  </Col>
					     </Row>
          		)
          	})}
			 <Row style={{display:this.state.addVisible  ? 'block' : 'none'}}>
			 	<Col>
			 		<img src={files} style={{marginRight:10}}/>
			 		<Input ref='inp' placeholder='分类名字' style={{width:200,marginRight:15}}/>
			 		<Button type='primary' style={{marginRight:15}} onClick={()=>this.onCreateList()}>创建</Button>
	          		<Button onClick={()=>this.onCancelList()}>取消</Button>
			 	</Col>
			 </Row>
          </div>
        </div>
        <CdrEdit visible={this.state.modalVisible} onClose={this.onModalClose} cdrDetail={cdrDetail} submit={this.onCdrEditSave}></CdrEdit>
        <CdrClassifyEdit visible={this.state.sortVisible} onClose={this.onSortCancel} sortDetail={sortDetail} submit={this.onSortEditSave}></CdrClassifyEdit>
      </div>
    )
  }
}
const mapDispatchtoProps = {
  fetchCdrInformation,//获取cdr详细信息
  fetchCdrUpdate, //更新保存数据中心
  fetchCdrDelete, //删除数据中心
  fetchCdrSortList,//获取数据分类列表
  fetchCdrAddSort,//新建分类
  fetchSortInformation,//获取分类的详细信息
  fetchAdjustSort, //调整分类顺序
  fetchSortUpdate, //保存编辑分类信息
  fetchSortDelete //删除分类
}
const mapStateToProps = (state) => {
  return {
    cdr:state.toJS().cdr
  }
}
export default connect(mapStateToProps, mapDispatchtoProps)(CdrContainer)
