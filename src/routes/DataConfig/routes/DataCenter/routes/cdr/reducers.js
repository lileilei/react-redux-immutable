import {List, fromJS} from 'immutable'
import {
  CDR_INFORMATION_GET,
  CDR_EDIT_POST,
  CDR_DELETE_POST,
  CDR_CLASSIFY_ADD_POST,
  CDR_CLASSIFY_EDIT_POST,
  CDR_CLASSIFY_DELETE_POST,
  CDR_GET_SORT_LIST,
  CDR_SORT_INFORMATION_GET,
CDR_CLASSIFY_ADJUST_POST
} from './action'
const ACTION_HANDLERS = {
  [CDR_INFORMATION_GET]: (state, action) => (
    state.merge({...state, cdrDetail: action.result,needRefresh:false})
  ),
  [CDR_EDIT_POST]: (state, action) => (
    state.merge({...state, needRefresh: action.needRefresh})
  ),
  [CDR_DELETE_POST]: (state, action) => (
    state.merge({...state, needRefresh: action.needRefresh})
  ),
  [CDR_GET_SORT_LIST]: (state, action) => (
    state.merge({...state, sortList: action.result,flag:false})
  ),
  [CDR_CLASSIFY_ADD_POST]: (state, action) => (
    state.merge({...state, flag: action.result})
  ),
  [CDR_CLASSIFY_EDIT_POST]: (state, action) => (
    state.merge({...state, flag: action.result})
  ),
  [CDR_CLASSIFY_DELETE_POST]: (state, action) => (
    state.merge({...state, flag: action.result})
  ),
  [CDR_SORT_INFORMATION_GET]: (state, action) => (
    state.merge({...state, sortDetail: action.result})
  ),
  [CDR_CLASSIFY_ADJUST_POST]: (state, action) => (
    state.merge({...state, flag: action.result})
  )
}

const initialState = fromJS({
  fetching: false,
  flag:false,
  cdrDetail:{},
  sortList:[],
  needRefresh:false,
  sortDetail:{}
})

export default function Reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
