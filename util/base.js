/**
 * Created by lilei on 2017/2/9.
 */
var base = module.exports = {
  sources: [],
  resizeFunc: [],
  clearResize: function () {
    while (this.resizeFunc.length > 0) {
      this.resizeFunc.pop()
    }
    while (this.sources.length > 0) {
      this.sources.pop()("中断请求！")
    }
  }
}
window.onload = function () {
  for (let i = 0; i < base.resizeFunc.length; i++) {
    base.resizeFunc[i]()
  }
}
var timer;
window.onresize = function () {
  clearTimeout(timer)
  timer = setTimeout(function () {
    for (let i = 0; i < base.resizeFunc.length; i++) {
      base.resizeFunc[i]()
    }
  }, 300)
}
