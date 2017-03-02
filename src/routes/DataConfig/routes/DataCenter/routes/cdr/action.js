/*
 * 数据中心配置CDR
 */
import {message} from 'antd'
export const CDR_INFORMATION_GET = 'CDR_INFORMATION_GET'
export const CDR_EDIT_POST = 'CDR_EDIT_POST'
export const CDR_DELETE_POST = 'CDR_DELETE_POST'
export const CDR_CLASSIFY_ADD_POST = 'CDR_CLASSIFY_ADD_POST'
export const CDR_CLASSIFY_EDIT_POST = 'CDR_CLASSIFY_EDIT_POST'
export const CDR_CLASSIFY_DELETE_POST = 'CDR_CLASSIFY_DELETE_POST'
export const CDR_GET_SORT_LIST = 'CDR_GET_SORT_LIST'
export const CDR_CLASSIFY_ADJUST_POST = 'CDR_CLASSIFY_ADJUST_POST'
export const CDR_SORT_INFORMATION_GET = 'CDR_SORT_INFORMATION_GET'

//获取数据中心信息
export function getCdrInformation(result){
  return {
    type:CDR_INFORMATION_GET,
    result
  }
}
export function fetchCdrInformation(opts, type){
  return (dispatch, getState) => {
    var interFace = '/dataCenterManage/getDataCenterById.do'
    return axios.post(interFace, opts)
      .then(function(result){
        dispatch(getCdrInformation(result.data))
      }).catch(function(error) {
        message.error('获取数据中心信息失败')
      })
  }
}
//更新数据中心
export function cdrEditType(result){
  return {
    type:CDR_EDIT_POST,
    needRefresh:result
  }
}
export function fetchCdrUpdate(opts, type){
  return (dispatch, getState) => {
    var interFace = '/dataCenterManage/updateDataCenter.do'
    return axios.post(interFace, opts)
      .then(function(result){
        dispatch(cdrEditType(true))
        message.success('修改数据中心成功')
      }).catch(function(error) {
        console.log(error)
        message.error('修改数据中心失败')
      })
  }
}
//删除数据中心
export function cdrDeleteType(result){
  return {
    type:CDR_DELETE_POST,
    needRefresh:result
  }
}
export function fetchCdrDelete(opts, type){
  return (dispatch, getState) => {
    var interFace = '/dataCenterManage/deleteDataCenter.do'
    return axios.post(interFace, opts)
      .then(function(result){
        dispatch(cdrDeleteType(true))
        message.success(result.data.message)
      }).catch(function(error) {
        message.error('删除数据中心失败')
      })
  }
}
//获取分类列表
export function getSortList(result){
  return {
    type:CDR_GET_SORT_LIST,
    result
  }
}
export function fetchCdrSortList(opts, type){
  return (dispatch, getState) => {
    var interFace = '/dataCenterManage/getObjectCatgListByDcId.do'
    return axios.post(interFace, opts)
      .then(function(result){
        dispatch(getSortList(result.data))
      }).catch(function(error) {
        message.error('获取分类列表失败')
      })
  }
}

//新建分类
export function cdrClassifyAddType(result){
  return {
    type:CDR_CLASSIFY_ADD_POST,
   result
  }
}
export function fetchCdrAddSort(opts, type){
  return (dispatch, getState) => {
    var interFace = '/dataCenterManage/createObjectCatg.do'
    return axios.post(interFace, opts)
      .then(function(result){
        dispatch(cdrClassifyAddType(true))
        message.success('添加分类成功')
      }).catch(function(error) {
        message.error('添加分类失败')
      })
  }
}
//获取分类详细信息
export function getSortInformation(result){
  return {
    type:CDR_SORT_INFORMATION_GET,
    result
  }
}
export function fetchSortInformation(opts, type){
  return (dispatch, getState) => {
    var interFace = '/dataCenterManage/getObjectCatgById.do'
    return axios.post(interFace, opts)
      .then(function(result){
        dispatch(getSortInformation(result.data))
      }).catch(function(error) {
        message.error('获取分类信息失败')
      })
  }
}
//修改分类
export function cdrClassifyEditType(result){
  return {
    type:CDR_CLASSIFY_EDIT_POST,
    result
  }
}
export function fetchSortUpdate(opts, type){
  return (dispatch, getState) => {
    var interFace = '/dataCenterManage/updateObjectCatg.do'
    return axios.post(interFace, opts)
      .then(function(result){
        dispatch(cdrClassifyEditType(true))
        message.success('修改分类成功')
      }).catch(function(error) {
        console.log(error)
        message.error('修改分类失败')
      })
  }
}
//删除分类
export function cdrClassifyDeleteType(result){
  return {
    type:CDR_CLASSIFY_DELETE_POST,
    result
  }
}
export function fetchSortDelete(opts, type){
  return (dispatch, getState) => {
    var interFace = '/dataCenterManage/deleteObjectCatg.do'
    return axios.post(interFace, opts)
      .then(function(result){
        dispatch(cdrClassifyDeleteType(true))
        message.success('删除分类成功')
      }).catch(function(error) {
        console.log(error)
        message.error('删除分类失败')
      })
  }
}
//调整分类顺序
export function getAdjustSort(result){
  return {
    type:CDR_CLASSIFY_ADJUST_POST,
    result
  }
}
export function fetchAdjustSort(opts, type){
  return (dispatch, getState) => {
    var interFace = '/dataCenterManage/adjustObjectCatgSequence.do'
    return axios.post(interFace, opts)
      .then(function(result){
        dispatch(getAdjustSort(true))
      }).catch(function(error) {
        message.error('调整分类顺序失败')
      })
  }
}
