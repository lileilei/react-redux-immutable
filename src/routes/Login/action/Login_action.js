/**
 * Created by lilei on 2016/10/27.
 */
import fetch from 'isomorphic-fetch'
import {browserHistory} from 'react-router'
export const LOGIN = 'LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGINSUCCESS'
export const KEY_VALUE = 'KEY_VALUE'

export const login = () => ({
  type: LOGIN
})
export const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  user
})
export const loginError = () => ({
  type: LOGIN_ERROR
})
export const keyChange = (val, type) =>({
  type: KEY_VALUE,
  key: type,
  val: val
})
export function keyChangeHandler(ev, type) {
  return (dispatch) => {
    dispatch(keyChange(ev.target.value, type))
  }
}
export function fetchLogin() {
  return (dispatch, getState) => {
    dispatch(login())
    return fetch('https://api.github.com/zen')
      .then(data => data.text())
      .then(text => {
        dispatch(loginSuccess())
        browserHistory.push('/home')
      })
      .catch(error => {
        dispatch(loginError())
      })
  }
}
