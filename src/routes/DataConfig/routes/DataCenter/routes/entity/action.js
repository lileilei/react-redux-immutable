/*
 *头部部分（编辑，删除，分类基本信息查询）
 */
import {message} from 'antd'
//基本信息
export const ENTITY_BASE_INFORMATION_GET = 'ENTITY_BASE_INFORMATION_GET'
export function fetchEntityBaseInformationSuc(result) {
  return {
    type: ENTITY_BASE_INFORMATION_GET,
    result: result
  }
}
export function fetchEntityBaseInformation(opts, type) {
  return (dispatch, getState) => {
    var interFace = '/dataCenterManage/getObjectDictById.do';
    return axios.post(interFace, opts)
      .then(function (result) {
        dispatch(fetchEntityBaseInformationSuc(result.data))
      }).catch(function (error) {
        console.error("URL: " + interFace)
      })
  }
}
//删除数据实体
export const ENTITY_BASE_INFORMATION_DELETE = 'ENTITY_BASE_INFORMATION_DELETE'
export function getEntityDelete(result) {
  return {
    type: ENTITY_BASE_INFORMATION_DELETE,
    result: result
  }
}
export function fetchEntityDelete(opts, type) {
  return (dispatch, getState) => {
    var interFace = '/dataCenterManage/deleteObjectDict.do';
    return axios.post(interFace, opts)
      .then(function (result) {
        dispatch(getEntityDelete(true))
        message.success('删除实体成功')
      }).catch(function (error) {
        message.error('删除失败')
        console.error("URL: " + interFace)
      })
  }
}

//编辑数据实体
export const ENTITY_BASE_INFORMATION_UPDATE = 'ENTITY_BASE_INFORMATION_UPDATE'
export function getEntityUpdate(result) {
  return {
    type: ENTITY_BASE_INFORMATION_UPDATE,
    result: result
  }
}
export function fetchEntityUpdate(opts, type) {
  return (dispatch, getState) => {
    var interFace = '/dataCenterManage/updateObjectDict.do';
    return axios.post(interFace, opts)
      .then(function (result) {
        dispatch(getEntityUpdate(true))
        message.success('编辑数据实体成功')
      }).catch(function (error) {
        message.error('编辑失败')
        console.error("URL: " + interFace)
      })
  }
}


/**
 * 获取实体类字段
 * @param opts
 * @param type
 * @returns {Function}
 */
export const ENTITY_FIELDS_GET = 'ENTITY_FIELDS_GET'
export function fetchEntityFieldsSuc(result) {
  return {
    type: ENTITY_FIELDS_GET,
    result: result
  }
}
export function fetchEntityFields(opts, type) {
  return (dispatch, getState) => {
    var interFace = '/dataCenterManage/getObjectFieldListByObjectId.do';
    return axios.post(interFace, opts)
      .then(function (result) {
        dispatch(fetchEntityFieldsSuc(result.data))
      }).catch(function (error) {
        console.error("URL: " + interFace)
      })
  }
}
/*
* 获取数据库连接列表
* @param opts
* @param type
* @returns {Function}
*/
export const ENTITY_DATABASE_LIST_GET = 'ENTITY_DATABASE_LIST_GET'
export function fetchDatabaseListSuc(result) {
  return {
    type: ENTITY_DATABASE_LIST_GET,
    connectionList: result
  }
}
export function fetchDatabaseList(opts, type) {
  return (dispatch, getState) => {
    var interFace = '/base/getDataSourceByParam.do';
    return axios.post(interFace, opts)
      .then(function (result) {
        dispatch(fetchDatabaseListSuc(result.data))
      }).catch(function (error) {
        console.error("URL: " + interFace)
      })
  }
}
