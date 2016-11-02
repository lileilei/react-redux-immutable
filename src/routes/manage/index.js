export default (store) => ({
  path: 'manage',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const manage = require('./containers/manage.containers.js').default
      // const reducer = require('./modules/zen').default
      // injectReducer(store, { key: 'zen', reducer })
      cb(null, manage)
    })
  }
})
