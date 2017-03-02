import {injectReducer} from "../../../../store/reducers";
import Redirect from '../../../PageNotFound/redirect'
export default (store) => ({
  path: 'reportedReport',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const page = require('./reportedReportContainer.js').default
      const reducer = require('./reducers').default
      injectReducer(store, {key: 'reportedReport', reducer})
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


