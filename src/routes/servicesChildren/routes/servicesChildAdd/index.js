export default (store) => ({
  path: 'servicesChildAdd',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const servicesChildAdd = require('./containers/servicesChildAdd.js').default
      // const reducer = require('./modules/zen').default
      // injectReducer(store, { key: 'zen', reducer })
      cb(null, servicesChildAdd)
    })
  }
})
