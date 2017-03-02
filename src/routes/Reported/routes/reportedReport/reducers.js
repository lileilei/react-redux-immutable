import {List, fromJS} from 'immutable'
import {
  REPROTEDREPORT_LIST_GET,
  REPROTEDREPORT_LIST_GET_SUCCESS,
  REPROTEDREPORT_CATG_GET,
  REPROTEDREPORT_CATG_GET_SUCCESS,
  REPROTEDREPORT_CATGS_GET,
  REPROTEDREPORT_CATGS_GET_SUCCESS,
} from './action'
const ACTION_HANDLERS = {
  //获取分类列表(第一个下拉选择)
  [REPROTEDREPORT_CATG_GET]: (state, action) => (
    state.merge({
      ...state,
      fetching: true,
      needRefresh: false,
    })
  ),
  [REPROTEDREPORT_CATG_GET_SUCCESS]: (state, action) => (
    state.merge({
      ...state,
      catg: action.result.data,
      fetching: false,
      needRefresh: false,
    })
  ),
  //获取分类列表(第二个下拉选择)
  [REPROTEDREPORT_CATGS_GET]: (state, action) => (
    state.merge({
      ...state,
      fetching: true,
      needRefresh: false,
    })
  ),
  [REPROTEDREPORT_CATGS_GET_SUCCESS]: (state, action) => (
    state.merge({
      ...state,
      catgs: action.result.data,
      fetching: false,
      needRefresh: false,
    })
  ),
  //获取列表信息
  [REPROTEDREPORT_LIST_GET]: (state, action) => (
    state.merge({
      ...state,
      fetching: true,
      needRefresh: false,
    })
  ),
  [REPROTEDREPORT_LIST_GET_SUCCESS]: (state, action) => (
    state.merge({
      ...state,
      result: action.result.data,
      fetching: false,
      needRefresh: false,

    })
  ),
}

const initialState = fromJS({
  needRefresh: false,
  fetching: false,
  result: [],
  catg: [],
  catgs: [],
})
export default function Reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}



