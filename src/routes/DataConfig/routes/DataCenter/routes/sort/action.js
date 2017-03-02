/*
 * 数据浏览
 */
//获取属于该分类的实体列表
export const BELONG_TO__ENTITY_LIST_GET = 'BELONG_TO__ENTITY_LIST_GET'
export function getLeftList(result) {
  return {
    type: BELONG_TO__ENTITY_LIST_GET,
    leftList: result
  }
}
export function fetchLeftList(opts, type) {
  return (dispatch, getState) => {
    var interFace = '/dataCenterManage/getObjectListByCatgId.do';
    return axios.post(interFace, opts)
      .then(function (result) {
        dispatch(getLeftList(result.data))
      }).catch(function (error) {
        console.error('数据请求失败')
      })
  }
}
//获取不属于该分类的实体列表
export const NOT_BELONG__ENTITY_LIST_GET = 'NOT_BELONG__ENTITY_LIST_GET'
export function getRightList(result) {
  return {
    type: NOT_BELONG__ENTITY_LIST_GET,
    rightList: result
  }
}
export function fetchRightList(opts, type) {
  return (dispatch, getState) => {
    var interFace = '/dataCenterManage/getObjectDictListNotInCatg.do';
    return axios.post(interFace, opts)
      .then(function (result) {
        dispatch(getRightList(result.data))
      }).catch(function (error) {
        console.error('数据请求失败')
      })
  }
}
//将实体添加至分类
export const ADD_ENTITY_TO_SORT = 'ADD_ENTITY_TO_SORT'
export function getAddToSort(result) {
  return {
    type: ADD_ENTITY_TO_SORT,
    needfresh:result
  }
}
export function fetchAddToSort(opts, type) {
  return (dispatch, getState) => {
    var interFace = '/dataCenterManage/addObjectsToCatg.do';
    return axios.post(interFace, opts)
      .then(function (result) {
        dispatch(getAddToSort(true))
      }).catch(function (error) {
        console.error('操作失败！')
      })
  }
}
//从分类下移除实体
export const REMOVE_ENTITY_FORM_SORT = 'REMOVE_ENTITY_FORM_SORT'
export function getRemoveEntity(result) {
  return {
    type: REMOVE_ENTITY_FORM_SORT,
    needfresh:result
  }
}
export function fetchRemoveEntity(opts, type) {
  return (dispatch, getState) => {
    var interFace = '/dataCenterManage/removeObjectsFromCatg.do';
    return axios.post(interFace, opts)
      .then(function (result) {
        dispatch(getRemoveEntity(true))
      }).catch(function (error) {
        console.error('操作失败！')
      })
  }
}

//获取实体分类信息
export const ENTITY_SORT_DETAIL_GET = 'ENTITY_SORT_DETAIL_GET'
export function getEntitleDetail(result) {
  return {
    type: ENTITY_SORT_DETAIL_GET,
    result: result
  }
}
export function fetchEntitleDetail(opts, type) {
  return (dispatch, getState) => {
    var interFace = '/dataCenterManage/getObjectCatgById.do';
    return axios.post(interFace, opts)
      .then(function (result) {
        dispatch(getEntitleDetail(result.data))
      }).catch(function (error) {
        console.error('数据请求失败')
      })
  }
}

//新建实体并进行分类
export const NEW_ENTITY_SORT_OBJECT = 'NEW_ENTITY_SORT_OBJECT'
export function getNewEntitySortCon(result) {
  return {
    type: NEW_ENTITY_SORT_OBJECT,
    needfresh:result
  }
}
export function fetchNewEntityCon(opts, type) {
  return (dispatch, getState) => {
    var interFace = '/dataCenterManage/createObjectDictInCatg.do';
    return axios.post(interFace, opts)
      .then(function (result) {
        dispatch(getNewEntitySortCon(true))
      }).catch(function (error) {
        console.error('新增实体分类失败！')
      })
  }
}
//修改实体分类
export const UPDATE_ENTITY_SORT = 'UPDATE_ENTITY_SORT'
export function getUpdateEntitySort(result) {
  return {
    type: UPDATE_ENTITY_SORT,
    needfresh:result
  }
}
export function fetchUpdateEntitySort(opts, type) {
  return (dispatch, getState) => {
    var interFace = '/dataCenterManage/updateObjectCatg.do';
    return axios.post(interFace, opts)
      .then(function (result) {
        dispatch(getUpdateEntitySort(true))
      }).catch(function (error) {
        console.error('修改实体分类失败！')
      })
  }
}
//删除分类
export const DELETE_ENTITY_SORT = 'DELETE_ENTITY_SORT'
export function getDeleteEntitySort(result) {
  return {
    type: DELETE_ENTITY_SORT,
    needfresh:result
  }
}
export function fetchDeleteEntitySort(opts, type) {
  return (dispatch, getState) => {
    var interFace = '/dataCenterManage/deleteObjectCatg.do';
    return axios.post(interFace, opts)
      .then(function (result) {
        dispatch(getDeleteEntitySort(true))
      }).catch(function (error) {
        console.error('删除实体分类失败！')
      })
  }
}
//调整分类顺序(上移下移)
export const ADJUST_ORDER_ENTITY_SORT = 'ADJUST_ORDER_ENTITY_SORT'
export function getAdjustOrder(result) {
  return {
    type: ADJUST_ORDER_ENTITY_SORT,
    flag:result
  }
}
export function fetchAdjustOrder(opts, type) {
  return (dispatch, getState) => {
    var interFace = '/dataCenterManage/adjustObjectSequenceInCatg.do';
    return axios.post(interFace, opts)
      .then(function (result) {
        dispatch(getAdjustOrder(true))
      }).catch(function (error) {
        console.log(error)
        console.error('调整实体分类顺序失败！')
      })
  }
}

