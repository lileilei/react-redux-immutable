import {Map} from 'immutable'
import {LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, KEY_VALUE} from '../action/Login_action'
const ACTION_HANDLERS = {
  [LOGIN]: (state, action) => (
    state.merge({...state, 'fetching': true})
  ),
  [LOGIN_SUCCESS]: (state, action) => (
    state.merge({...state, fetching: false, user: action.user})
  ),
  [LOGIN_ERROR]: (state, action) => (
    state.merge({...state, fetching: false})
  ),
  [KEY_VALUE]: (state, action) => (
    state.merge({...state, [action.key]: action.val})
  )
}

const initialState = Map({
  fetching: false,
  token: '',
  userName: '123',
  userPwd: ''
})
export default function loginReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
