/**
 * Created by lilei on 2016/10/27.
 */
import fetch from 'isomorphic-fetch'
import {browserHistory} from 'react-router'
export const REQUEST_LIST = 'REQUEST_LIST'
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS'
export const REQUEST_ERROR = 'REQUEST_ERROR'

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

export function fetchList(opts) {
  return (dispatch, getState) => {
    dispatch(requestList())
    return fetch('https://api.github.com/zen', opts || {})
      .then(data => data.text())
      .then(text => {
        dispatch(requestSuccess())
        browserHistory.push('/home')
      })
      .catch(error => {
        dispatch(requestError())
      })
  }
}
