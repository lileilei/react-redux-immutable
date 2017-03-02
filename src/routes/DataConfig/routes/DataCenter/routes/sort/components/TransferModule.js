/**
 * Created by Administrator on 2017/2/16 0016.
 */
import { Transfer, Button,Icon } from 'antd';
import React, {Component} from 'react'

class TransferModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mockData: [],
      targetKeys: [],
      operationType:0
    }
    this.renderItem = this.renderItem.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }
  //添加实体到分类或从分类中移除实体
  handleChange(targetKeys,direction,removekeys) {
    var  dir
      if(direction === 'left'){
        dir = 0
      }else{
        dir= 1
      }
    this.props.addOrDelete(dir,removekeys)
  }

  //上升
  onUP(e,item){
    //阻止冒泡事件
    var  direction
    this.props.leftList.map((val,i)=>{
      if(item.key === val.objectId){
        direction = true
      }
    })
    e.stopPropagation()
    const baseInfo = {
      objectId:item.key,
      adjustType:1,
      catgId:this.props.catgId
    }
    this.props.onUporDown(baseInfo)
  }
  //下降
  onDown(e,item){
    e.stopPropagation()
    var  direction
    this.props.leftList.map((val,i)=>{
      if(item.key === val.objectId){
        direction = true
      }
    })
    const baseInfo = {
      objectId:item.key,
      adjustType:2,
      catgId:this.props.catgId
    }
    this.props.onUporDown(baseInfo)
  }
  renderItem(item) {
    var show = 1
    if(this.props.rightList){
      this.props.rightList.map((val,i)=>{
        if(val.objectId === item.key){
          show = 0
        }
      })
    }
    const customLabel = (
      <p style={{display:'inline'}} className='title-item'>
        <span className="custom-item">
        {item.title}
      </span>
        {
          show === 1 ?
       <span  className="icon-item">
             <Icon type="arrow-up" style={{marginLeft:'20px',padding:'0 5px'}} onClick={(e)=>this.onUP(e,item)}/>
             <Icon type="arrow-down"  style={{padding:'0 5px'}}  onClick={(e)=>this.onDown(e,item)}/>
       </span>
          : ''
        }
      </p>
    )
    return {
      label: customLabel,
      //value: item.key
    };
  }
  render() {
    //数据处理
    const targetKeys = []
    const mockData = []
    if(this.props.leftList && this.props.rightList ){
      const allData = this.props.leftList.concat(this.props.rightList)
      allData.map((item,i)=>{
        mockData.push({key:item.objectId,title:item.objectName})
      })
      this.props.rightList.map((item,i)=>{
        targetKeys.push(item.objectId)
      })
    }

    return (
      <Transfer
        dataSource={mockData}
        listStyle={{
          width: '37%',
          height: 385
        }}
        showSearch
        searchPlaceholder='请输入搜索内容'
        targetKeys={targetKeys}
        onChange={this.handleChange}
        render={this.renderItem}
        />
    )
  }
}

export default TransferModal
