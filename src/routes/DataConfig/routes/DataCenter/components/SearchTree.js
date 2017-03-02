/**
 * Created by hcz on 2017/2/20.
 * 查询树
 */
import React, {Component} from 'react'
import { Tree, Input,Button } from 'antd';
import {Link, browserHistory} from 'react-router'
import NewDataCenter from './NewDataCenter'
const TreeNode = Tree.TreeNode;
const Search = Input.Search;
import '../style.scss'
class SearchTree extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expandedKeys: [],
      searchValue: '',
      autoExpandParent: true,
      visible:false
    }
    this.onClose = this.onClose.bind(this)
    this.onSave = this.onSave.bind(this)
  }

  onSelect = (selectedKeys, info) => {
    var pathArr = selectedKeys.toString().split("-")
    if(pathArr[0].indexOf("cdr")!== -1){
      //cdr
      browserHistory.push("/dcms/home/config/DataCenter/cdr/"+pathArr[1])
    }else if(pathArr[0].indexOf("sort")!== -1){
      //sort
      browserHistory.push("/dcms/home/config/DataCenter/sort/"+pathArr[1])
    }else if(pathArr[0].indexOf("entity")!== -1){
      //entity
      browserHistory.push("/dcms/home/config/DataCenter/entity/"+pathArr[1])
    }
  }

  /**
   * 新建数据中心
   */
  onAddCdr(){
  this.setState({
    visible:true
  })
  }
  /*
  * 隐藏新增窗口
  */
  onClose(){
    this.setState({
      visible:false
    })
  }
  /*
  * 保存新增数据中心
  */
  onSave(value){
    this.props.onSaveNew(value)
  }
  render() {
    /**
     * 实体类
     * @param data
       */
    const loopEntity = data => data.map((item,key) =><TreeNode key={`entity-${item.objectId}`}  title={item.objectName} isLeaf={true}></TreeNode>);
    /*** 分类*/
    const loopSort = data => data.map((item,key) => {
      if (item['objectList'].length> 0){
        return (
          <TreeNode key={`sort-${item.catgId}`} title={item.catgName} isLeaf={false}>
              {loopEntity(item['objectList'])}
          </TreeNode>
        )
      }
      return <TreeNode title={item.catgName} key={`sort-${item.catgId}`} isLeaf={true}/>;
    });
    /*** CDR**/
    const loopCdr = data => data.map((item,key) => {
      if (item['objectCatgList'].length> 0){
        return (
          <TreeNode key={`cdr-${item.dcId}`} title={item.dcName} isLeaf={false}>
            {loopSort(item['objectCatgList'])}
          </TreeNode>
        );
      }
      return <TreeNode title={item.dcName} key={`cdr-${item.dcId}`} isLeaf={true}/>;
    });
    return (
      <div>
        <Search style={{ width: '100%' }} placeholder="Search" onChange={this.onChange} />
        <Tree onSelect={this.onSelect}>
          {loopCdr(this.props.initData)}
        </Tree>
        <div className="newCdr">
          <Button type='primary' icon='plus' onClick={()=>this.onAddCdr()}>新建数据中心</Button>
         </div>
        <NewDataCenter visible={this.state.visible} onClose={this.onClose} submit={this.onSave}></NewDataCenter>
      </div>
    )
  }
}
export default SearchTree


