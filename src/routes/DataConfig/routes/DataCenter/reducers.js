import {List, fromJS} from 'immutable'
import {DATACENTER_TREE_GET_SUC,DATACENTER_NEW_SUC} from './action'
const ACTION_HANDLERS = {
  [DATACENTER_TREE_GET_SUC]: (state, action) => {
    return state.merge({...state, dataTree: action.result,needRefresh:false})
  },
  [DATACENTER_NEW_SUC]: (state, action) => {
    return state.merge({...state, needRefresh: action.needRefresh})
  }
}

const initialState = fromJS({
  fecting: false,
  needRefresh:false,
  dataTree: []
})
export default function Reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
