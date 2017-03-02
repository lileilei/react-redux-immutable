import {injectReducer} from "../../../../store/reducers";
import Container from './pushContainer'
export default (store) => ({
  path: 'push',
  component: Container,
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const page = require('./pushContainer.js').default
      const reducer = require('./reducers').default
      injectReducer(store, {key: 'push', reducer})
      cb(null, page)
    })
  }
})

