/*
 * 数据浏览
 */
export const TEMP_LIST_GET = 'TEMP_LIST_GET'
export function getTempListType(result) {
  return {
    type: TEMP_LIST_GET,
    result: result
  }
}
export function getTempList(opts, type) {
  return (dispatch, getState) => {
    var interFace = '/api/temp/getList';
    return axios.post(interFace, opts)
      .then(function (result) {
        dispatch(getTempListType(result.data))
      }).catch(function (error) {
        console.error("URL: " + interFace)
      })
  }
}

