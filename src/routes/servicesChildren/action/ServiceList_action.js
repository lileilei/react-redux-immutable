/**
 * Created by lilei on 2016/10/27.
 */
export const REQUEST_LIST = 'REQUEST_LIST'
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS'
export const REQUEST_ERROR = 'REQUEST_ERROR'
export const CLEAR_LIST = 'CLEAR_LIST'

export const requestList = () => ({
  type: REQUEST_LIST
})
export const requestSuccess = list => ({
  type: REQUEST_SUCCESS,
  list
})
export const requestError = () => ({
  type: REQUEST_ERROR
})
export const clearType = () => ({
  type: CLEAR_LIST
})
export function clearList() {
  return (dispatch, getState) => {
    dispatch(clearType())
  }
}
export function fetchList(opts) {
  return (dispatch, getState) => {
    dispatch(requestList())
    return fetch('component/componentList.do', opts || {})
      .then(response => response.json())
      .then(json => {
        dispatch(requestSuccess(json.componentList))
      })
      .catch(error => {
        dispatch(requestError())
      })
  }
}
