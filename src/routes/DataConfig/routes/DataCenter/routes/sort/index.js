import {injectReducer} from "../../../../../../store/reducers";
export default (store) => ({
  path: 'sort/:id',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const page = require('./SortContainer.js').default
      const reducer = require('./reducers').default
      injectReducer(store, {key: 'sort', reducer})
      cb(null, page)
    })
  }
})

