/*------------------
 数据中心配置Action
 -----------------
*/
export const DATACENTER_TREE_GET_SUC = 'DATACENTER_TREE_GET_SUC'
export const DATACENTER_NEW_SUC = 'DATACENTER_NEW_SUC'
/**
 * 获取数据中心列表
 * @param result
 * @returns {{type: string, result: *}}
 */
export function getDataCenterTreeSuc(result) {
  return {
    type: DATACENTER_TREE_GET_SUC,
    result: result
  }
}
export function fetchDataCenterTree(opts, type) {
  return (dispatch, getState) => {
    var interFace = '/dataCenterManage/getDataCenterTree.do';
    return axios.post(interFace, opts)
      .then(function (result) {
        console.log(result)
        dispatch(getDataCenterTreeSuc(result.data))
      }).catch(function (error) {
        console.log(error)
        console.error("URL: " + interFace)
      })
  }
}
/*
* 新增数据中心
*/
export function getNewDataCenter(result) {
  return {
    type: DATACENTER_NEW_SUC,
    needRefresh: result
  }
}
export function fetchNewDataCenter(opts, type) {
  return (dispatch, getState) => {
    var interFace = '/dataCenterManage/createDataCenter.do';
    return axios.post(interFace, opts)
      .then(function (result) {
        dispatch(getNewDataCenter(true))
      }).catch(function (error) {
        console.error("URL: " + interFace)
      })
  }
}
