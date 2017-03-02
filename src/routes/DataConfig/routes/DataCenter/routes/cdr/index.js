import {injectReducer} from "../../../../../../store/reducers";
export default (store) => ({
  path: 'cdr(/:id)',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const page = require('./CdrContainer.js').default
      const reducer = require('./reducers').default
      injectReducer(store, {key: 'cdr', reducer})
      cb(null, page)
    })
  }
})

