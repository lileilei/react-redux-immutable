import {List, fromJS} from 'immutable'
import {
  BELONG_TO__ENTITY_LIST_GET,NOT_BELONG__ENTITY_LIST_GET,ENTITY_SORT_DETAIL_GET,UPDATE_ENTITY_SORT,DELETE_ENTITY_SORT,
  ADJUST_ORDER_ENTITY_SORT,NEW_ENTITY_SORT_OBJECT,ADD_ENTITY_TO_SORT,REMOVE_ENTITY_FORM_SORT} from './action'
const ACTION_HANDLERS = {
  //实体分类列表
  [BELONG_TO__ENTITY_LIST_GET]: (state, action) => (
  state.merge({
    ...state,
    fetching:false,
    leftList:action.leftList,
    needfresh:false,
    flag:false
  })
), [NOT_BELONG__ENTITY_LIST_GET]: (state, action) => (
  state.merge({
    ...state,
    fetching:false,
    rightList:action.rightList,
    needfresh:false
  })
),
  //实体分类信息获取
  [ENTITY_SORT_DETAIL_GET]: (state, action) => (
  state.merge({
    ...state,
    fetching:false,
    entityDetail:action.result,
    needfresh:false
  })
), //新增实体分类关联
  [NEW_ENTITY_SORT_OBJECT]: (state, action) => (
  state.merge({
    ...state,
    needfresh:action.needfresh
  })
), //修改实体分类
  [UPDATE_ENTITY_SORT]: (state, action) => (
  state.merge({
    ...state,
    needfresh:action.needfresh
  })
), //删除实体分类
  [UPDATE_ENTITY_SORT]: (state, action) => (
  state.merge({
    ...state,
    needfresh:action.needfresh
  })
), //调整实体分类顺序
  [ADJUST_ORDER_ENTITY_SORT]: (state, action) => (
  state.merge({
    ...state,
    flag:action.flag
  })
), //添加实体到分类
  [ADD_ENTITY_TO_SORT]: (state, action) => (
  state.merge({
    ...state,
    needfresh:action.needfresh
  })
), //从分类中移除实体
  [REMOVE_ENTITY_FORM_SORT]: (state, action) => (
  state.merge({
    ...state,
    needfresh:action.needfresh
  })
)
}

const initialState = fromJS({
  fetching: false,
  needfresh:false,
  flag:false,
  leftList:[],
  rightList:[],
  entityDetail:{}
})
export default function Reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
