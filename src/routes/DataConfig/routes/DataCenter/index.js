import {injectReducer} from "../../../../store/reducers";
import cdr from './routes/cdr'
import sort from './routes/sort'
import entity from './routes/entity'
export default (store) => ({
  path: 'DataCenter',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const page = require('./DataCenterContainer.js').default
      const reducer = require('./reducers').default
      injectReducer(store, {key: 'dataCenter', reducer})
      cb(null, page)
    })
  },
  indexRoute: {
    onEnter (nextState, replace) {
      replace('/dcms/home/config/DataCenter/cdr')
    }
  },
  childRoutes: [
    cdr(store),
    sort(store),
    entity(store)
  ]
})

