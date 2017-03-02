import {injectReducer} from "../../store/reducers";
import Container from './ReportedContainer'
import Redirect from '../PageNotFound/redirect'
import ReportedReport from './routes/reportedReport'
import ReportedReportDetail from './routes/reportedReportDetail'
import ReportedLog from './routes/reportedLog'

export default (store) => ({
  path: 'reported',
  component: Container,
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const reported = require('./ReportedContainer.js').default
      cb(null, reported)
    })
  },
  indexRoute: {
    onEnter (nextState, replace) {
      replace('/dcms/home/reported/reportedReport')
    }
  },
  childRoutes: [
    ReportedReport(store),
    ReportedReportDetail(store),
    ReportedLog(store),
    Redirect,
  ]
})











