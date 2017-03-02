import {injectReducer} from "../../../../store/reducers";
import Redirect from '../../../PageNotFound/redirect'
export default (store) => ({
  path: 'reportedReportDetail/:id',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const reportedReportDetail = require('./ReportDetailContainer.js').default
      const reducer = require('./reducers').default
      injectReducer(store, {key: 'reportedReportDetail', reducer})
      cb(null, reportedReportDetail)
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


