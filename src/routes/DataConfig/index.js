import {injectReducer} from "../../store/reducers";
import Container from './DataConfigContainer'
import DataCenter from './routes/DataCenter'
import push from './routes/push'
import ReportedData from './routes/ReportedData'
import Redirect from '../PageNotFound/redirect'
export default (store) => ({
  path: 'config',
  component: Container,
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const page = require('./DataConfigContainer.js').default
      const reducer = require('./reducers').default
      injectReducer(store, {key: 'config', reducer})
      cb(null, page)
    })
  },
  indexRoute: {
    onEnter (nextState, replace) {
      replace('/dcms/home/config/DataCenter')
    },
    onChange(prevState, nextState, replace, callback){
      console.log("hehe")
    }
  },
  childRoutes: [
    DataCenter(store),
    ReportedData(store),
    push(store),
    Redirect
  ]
})

