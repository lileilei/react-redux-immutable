/**
 * Created by hcz on 2017/2/17.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchEntityBaseInformation,fetchEntityFields,fetchEntityUpdate,fetchEntityDelete} from './action'
import EntityHeader from './components/EntityHeader' // 头部
import SelectEntity from './select/SelectEntity' //
import ModuleEntity from './module/ModuleEntity'
import './style.scss'
class EntityContainer extends Component {
  constructor(props) {
    super(props)
    this.changeType = this.changeType.bind(this)
    this.state = {
      minHeight: 0,
      configType:0,
      entityInfo:{}
    }
  }
  componentDidMount() {
    this.fetchEntityData(this.props.params.id)
  }

  componentWillReceiveProps(nextProps){
    let that = this
    if(nextProps.params.id !== this.props.params.id){
      this.fetchEntityData(nextProps.params.id)
    }
  }
  //页面刷新
  componentDidUpdate(){
    const {needRefresh} = this.props.entity
    if(needRefresh){
      this.fetchEntityData(this.props.params.id)
    }
  }
  /**
   * 获取当前实体类的数据
   * @param paramId
     */
  fetchEntityData(paramId){
    let that = this
    this.props.fetchEntityBaseInformation({objectId:paramId}).then(function(){
      const {entityInfo} = that.props.entity
      that.setState({entityInfo})
      //数据类型
      if(entityInfo['objectType'] === 1){
        that.props.fetchEntityFields({objectId:paramId})
      }
    })
  }
  /**
   * 查询配置和模型配置切换
   */
  changeType(type){
    this.setState({
      configType:type
    })
  }
  render() {
    const {fieldList,entityInfo} = this.props.entity
    return (
      <div id="entity-view">
        <EntityHeader changeType={this.changeType} name={this.state.entityInfo["objectName"]} entityInfo={entityInfo}
                      fetchEntityUpdate={this.props.fetchEntityUpdate} fetchEntityDelete={this.props.fetchEntityDelete}></EntityHeader>
        {
          this.state.configType === 0 ?
            <ModuleEntity type={this.state.entityInfo["objectType"]}
                          desc ={this.state.entityInfo["objectDesc"]}
                          fieldList={fieldList}>
            </ModuleEntity> :
            <SelectEntity type={this.state.entityInfo["objectType"]}></SelectEntity>
        }
      </div>
    )
  }
}
const mapDispatchtoProps = {
  fetchEntityBaseInformation,
  fetchEntityFields,
  fetchEntityUpdate, //更新数据实体
  fetchEntityDelete, //删除数据实体
}
const mapStateToProps = (state) => {
  return {
    entity: state.toJS().entity
  }
}
export default connect(mapStateToProps, mapDispatchtoProps)(EntityContainer)
