import {injectReducer} from "../../../../store/reducers";
import Container from './reportedReportContainer'
import Redirect from '../../../PageNotFound/redirect'
export default (store) => ({
  path: 'reportedLog',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const page = require('./reportedReportContainer.js').default
      const reducer = require('./reducers').default
      injectReducer(store, {key: 'reportedLog', reducer})
      cb(null, page)
    })
  },
  indexRoute: {
    onEnter (nextState, replace) {

    }
  },
  childRoutes: [
    Redirect
  ]
})














