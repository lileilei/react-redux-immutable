import {injectReducer} from "../../store/reducers";
import ViewList from './routes/ViewList'
export default (store) => ({
  path: 'view',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const page = require('./DataViewContainer.js').default
      const reducer = require('./reducers').default
      injectReducer(store, {key: 'view', reducer})
      cb(null, page)
    })
  },
  indexRoute: {
    onEnter (nextState, replace) {
      replace('/dcms/home/view/ViewList')
    }
  },
  childRoutes: [
    ViewList(store)
  ]
})

