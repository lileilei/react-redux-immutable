export default (store) => ({
  path: 'servicesChildField',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const servicesChildField = require('./containers/servicesChildField.js').default
      // const reducer = require('./modules/zen').default
      // injectReducer(store, { key: 'zen', reducer })
      cb(null, servicesChildField)
    })
  }
})
