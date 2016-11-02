export default (store) => ({
  path: 'services',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Services = require('./containers/ServicesContainer').default
      // const reducer = require('./modules/zen').default
      // injectReducer(store, { key: 'zen', reducer })
      cb(null, Services)
    })
  }
})
