export default (store) => ({
  path: 'servicesChild',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const servicesChild = require('./containers/ServicesChildren.containers').default
      // const reducer = require('./modules/zen').default
      // injectReducer(store, { key: 'zen', reducer })
      cb(null, servicesChild)
    })
  }
})
