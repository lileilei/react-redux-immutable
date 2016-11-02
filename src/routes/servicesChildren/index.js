import {injectReducer} from '../../store/reducers'

export default (store) => {
  return {
    path: 'servicesChild',
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        const servicesChild = require('./containers/ServicesChildren.containers').default
        const reducer = require('./reducers/ServiceList_reducers').default
        injectReducer(store, {key: 'servicesChild', reducer})
        cb(null, servicesChild)
      })
    }
  }
}
