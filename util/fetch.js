/**
 * Created by lilei on 2016/11/3.
 */
import fetch from 'isomorphic-fetch'
var root = '在此配置根目录';
(root.substring(root.length - 1) === '/') && (root = root.substring(0, root.length - 1))
module.exports = (url, options)=> {
	//options：配置默认参数
  const start = url.substring(0, 1)
  const http = url.substring(0, 4)
  if (start === '/') {
    url = url.substring(1)
  }
  var reqUrl = url
  if (http !== 'http' && http !== 'https') {
    reqUrl = root + '/' + url
  }
  return fetch(reqUrl, options || {})
}
