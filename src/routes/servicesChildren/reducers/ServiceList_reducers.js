import {Map} from 'immutable'
import {REQUEST_LIST, REQUEST_SUCCESS, REQUEST_ERROR} from '../action/ServiceList_action'
const ACTION_HANDLERS = {
  [REQUEST_LIST]: (state, action) => (
    state.merge({...state, 'fetching': true})
  ),
  [REQUEST_SUCCESS]: (state, action) => (
    state.merge({...state, fetching: false, list: action.list})
  ),
  [REQUEST_ERROR]: (state, action) => (
    state.merge({...state, fetching: false})
  )
}

const initialState = Map({
  fetching: false,
  list: []
})
export default function serviceListReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
