/*
 * 数据浏览
 */
export const DATAVIEW_LIST_GET_2 = 'DATAVIEW_LIST_GET_2'
export function getDataViewListType(result) {
  return {
    type: DATAVIEW_LIST_GET_2,
    result: result
  }
}
export function getDataViewList(opts, type) {
  return (dispatch, getState) => {
    var interFace = '/api/books/getList';
    return axios.post(interFace, opts)
      .then(function (result) {
        dispatch(getDataViewListType(result.data))
      }).catch(function (error) {
        console.error("URL: " + interFace)
      })
  }
}

