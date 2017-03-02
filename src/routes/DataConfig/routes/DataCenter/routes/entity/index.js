import {injectReducer} from "../../../../../../store/reducers";
export default (store) => ({
  path: 'entity/:id',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const page = require('./EntityContainer.js').default
      const reducer = require('./reducers').default
      injectReducer(store, {key: 'entity', reducer})
      cb(null, page)
    })
  }
})

