import {List, fromJS} from 'immutable'
import {
  LOG_LIST_GET,
  LOG_LIST_GET_SUCCESS,
  //获取分类(FORM 表格 第一个下拉列表)
   REPROTEDREPORT_CATG_GET ,
 REPROTEDREPORT_CATG_GET_SUCCESS,
//获取分类及其包含任务 (form表格第二个下拉列表)
 REPROTEDREPORT_CATGS_GET,
 REPROTEDREPORT_CATGS_GET_SUCCESS,
} from './action'
const ACTION_HANDLERS = {
  //获取分类列表(第一个下拉选择)
  [REPROTEDREPORT_CATG_GET]: (state, action) => (
    state.merge({
      ...state,
      fetching:true,
      needRefresh:false,
    })
  ),
  [REPROTEDREPORT_CATG_GET_SUCCESS]: (state, action) => (
    state.merge({
      ...state,
      catg: action.result.data,
      fetching:false,
      needRefresh:false,
    })
  ),
  //获取分类列表(第二个下拉选择)
  [REPROTEDREPORT_CATGS_GET]: (state, action) => (
    state.merge({
      ...state,
      fetching:true,
      needRefresh:false,
    })
  ),
  [REPROTEDREPORT_CATGS_GET_SUCCESS]: (state, action) => (
    state.merge({
      ...state,
      catgs: action.result.data,
      fetching:false,
      needRefresh:false,
    })
  ),
  [LOG_LIST_GET]: (state, action) => (
    state.merge({
      ...state,
      fetching:true,
      needRefresh:false,
    })
  ),
  [LOG_LIST_GET_SUCCESS]: (state, action) => (
    state.merge({
      ...state,
      fetching:false,
      needRefresh:false,
      resultA: action.result.data.result,
      totalA : action.result.data.totalCount,
    })
  ),
}

const initialState = fromJS({
  fetching:false,
  needRefresh:false,
  resultA: [],
  totalA:1,
  catg:[],
  catgs:[],

})
export default function Reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
