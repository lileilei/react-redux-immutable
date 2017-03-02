/**
 * Created by lilei on 2016/11/3.
 */
import axios from 'axios'
import Ewell from './base'
import qs from 'qs'
/**
 * 功能：axios 基础配置
 * 返回：配置好的增强版本 axios
 * */
window.baseUrl = 'http://127.0.0.1/myApi'
var instance = axios.create({
  baseURL: baseUrl,
  transformRequest: [function (data) {
    data = data || {}
    return qs.stringify(data);
  }]
});
// axios.defaults.baseURL = baseUrl
// axios.defaults.transformRequest = [function (data) {
//   data = data || {}
//   return qs.stringify(data);
// }]
module.exports = {
  post: function (url, opts) {
    var CancelToken = axios.CancelToken;
    var cancel;
    var token = new CancelToken(function executor(c) {
      cancel = c;
    })
    return instance.post(url, {
      ...opts,
      cancelToken: token
    }).catch(function (thrown) {
      if (axios.isCancel(thrown)) {
        console.log('Request canceled', thrown.message);
      }
    });
  },
  get: function (url, opts) {
    var CancelToken = axios.CancelToken;
    var token = new CancelToken(function executor(c) {
      Ewell.sources.push(c)
    })
    return instance.get(url, {
      ...opts,
      cancelToken: token
    }).catch(function (thrown) {
      if (axios.isCancel(thrown)) {
        console.log('Request canceled', thrown.message);
      }
    });
  }
}
