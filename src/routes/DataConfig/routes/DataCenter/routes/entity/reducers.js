import {List, fromJS} from 'immutable'
import {ENTITY_BASE_INFORMATION_GET,ENTITY_FIELDS_GET,ENTITY_BASE_INFORMATION_UPDATE,ENTITY_BASE_INFORMATION_DELETE,ENTITY_DATABASE_LIST_GET} from './action'
const ACTION_HANDLERS = {
  [ENTITY_BASE_INFORMATION_GET]: (state, action) => {
    return state.merge({...state, entityInfo: action.result,needRefresh:false})
  },
  [ENTITY_FIELDS_GET]: (state, action) => {
    return state.merge({...state, fieldList: action.result})
  },
  [ENTITY_BASE_INFORMATION_UPDATE]: (state, action) => {
    return state.merge({...state, needRefresh: action.result})
  },
  [ENTITY_BASE_INFORMATION_DELETE]: (state, action) => {
    return state.merge({...state, needRefresh: action.result})
  },
  [ENTITY_DATABASE_LIST_GET]: (state, action) => {
    return state.merge({...state, connectionList: action.connectionList})
  }
}

const initialState = fromJS({
  fetching: false,
  needRefresh:false,
  entityInfo :{},
  fieldList : [],
  connectionList:[]
})
export default function Reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
