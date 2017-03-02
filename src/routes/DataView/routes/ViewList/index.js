import {injectReducer} from "../../../../store/reducers";
import Container from './ViewListContainer'
export default (store) => ({
  path: 'ViewList',
  component: Container,
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const page = require('./ViewListContainer.js').default
      const reducer = require('./reducers').default
      injectReducer(store, {key: 'ViewList', reducer})
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

