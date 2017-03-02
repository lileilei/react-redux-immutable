import {injectReducer} from "../../../../store/reducers";
import Container from './ReportedDataContainer'
export default (store) => ({
  path: 'ReportedData',
  component: Container,
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const page = require('./ReportedDataContainer.js').default
      const reducer = require('./reducers').default
      injectReducer(store, {key: 'ReportedData', reducer})
      cb(null, page)
    })
  },
  indexRoute: {
    onEnter (nextState, replace) {
      // replace('/dcms/home/view')
    }
  },
  childRoutes: [
  ]
})

