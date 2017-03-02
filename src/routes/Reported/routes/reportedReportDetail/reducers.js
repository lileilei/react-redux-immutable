import {List, fromJS} from 'immutable'
import {
  DETAIL_LIST_GET,
  DETAIL_LIST_GET_SUCCESS,
  DETAIL_DATA_GET,
  DETAIL_DATA_GET_SUCCESS,
  DATA_FIELD_GET,
  DATA_FIELD_GET_SUCCESS,
} from './action'
const ACTION_HANDLERS = {
  //获取某一上报任务的具体列表
  [DETAIL_LIST_GET]: (state, action) => (
    state.merge({
      ...state,
      fetching: true,
      needRefresh: false,
    })
  ),
  [DETAIL_LIST_GET_SUCCESS]: (state, action) => (
    state.merge({
      ...state,
      resultA: action.result.data.result,
      totalA: action.result.data.totalCount,
      fetching: false,
      needRefresh: false,
    })
  ),

  //获取某一上报任务的中英文字段对应
  [DATA_FIELD_GET]: (state, action) => (
    state.merge({
      ...state,
      fetching: true,
      needRefresh: false,
    })
  ),
  [DATA_FIELD_GET_SUCCESS]: (state, action) => (
    state.merge({
      ...state,
      dataField: action.result.data,
      fetching: false,
      needRefresh: false,
    })
  ),

  //获取某一上报批次的具体数据列表
  [DETAIL_DATA_GET]: (state, action) => (
    state.merge({
      ...state,
      fetching: true,
      needRefresh: false,
    })
  ),
  [DETAIL_DATA_GET_SUCCESS]: (state, action) => (
    state.merge({
      ...state,
      resultB: action.result.data.result,
      totalB: action.result.data.totalCount,
      fetching: false,
      needRefresh: false,
    })
  ),

}

const initialState = fromJS({
  fetching: false,
  needRefresh: false,
  resultA: [],
  resultB: [],
  dataField: [],
  totalA: 1,
  totalB: 1,
  totalC: 1,

})
export default function Reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}



