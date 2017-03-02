/*
 * 数据浏览
 */
export const DETAIL_LIST_GET = 'DETAIL_LIST_GET'
export const DETAIL_LIST_GET_SUCCESS = 'DETAIL_LIST_GET_SUCCESS'
export const DETAIL_DATA_GET = 'DETAIL_DATA_GET'
export const DETAIL_DATA_GET_SUCCESS = 'DETAIL_DATA_GET_SUCCESS'
export const DATA_FIELD_GET = 'DATA_FIELD_GET'
export const DATA_FIELD_GET_SUCCESS = 'DATA_FIELD_GET_SUCCESS'


//获取某一上报任务的具体列表
export function getReportDetail(result) {
  return {
    type: DETAIL_LIST_GET,
  }
}
export function getReportDetailSuccess(result) {
  return {
    type: DETAIL_LIST_GET_SUCCESS,
    result: result
  }
}
export function getReportDetailList(opts, type) {
  return (dispatch, getState) => {
    var interFace = '/reporting/getReportingBatch.do';

    dispatch(getReportDetail())
    return axios.post(interFace, opts)
      .then(function (result) {
        dispatch(getReportDetailSuccess(result))
      }).catch(function (error) {
        console.error("URL: " + interFace)
      })
  }
}

//获取某一上报任务的中英文字段对应以及此字段是否可以筛选
export function getField(result) {
  return {
    type: DATA_FIELD_GET,
  }
}
export function getFieldSuccess(result) {
  return {
    type: DATA_FIELD_GET_SUCCESS,
    result: result
  }
}
export function getFieldData(opts, type) {
  return (dispatch, getState) => {
    var interFace = '/reporting/getReportingObjectFieldNameMappingList.do';

    dispatch(getField())
    return axios.post(interFace, opts)
      .then(function (result) {
        dispatch(getFieldSuccess(result))
      }).catch(function (error) {
        console.error("URL: " + interFace)
      })
  }
}


//获取某一上报批次的具体数据列表
export function getBatch(result) {
  return {
    type: DETAIL_DATA_GET,
  }
}
export function getBatchSuccess(result) {
  return {
    type: DETAIL_DATA_GET_SUCCESS,
    result: result
  }
}
export function getBatchList(opts, type) {
  return (dispatch, getState) => {
    var interFace = '/reporting/getReportingBatchData.do';

    dispatch(getBatch())
    return axios.post(interFace, opts)
      .then(function (result) {
        dispatch(getBatchSuccess(result))
      }).catch(function (error) {
        console.error("URL: " + interFace)
      })
  }
}
