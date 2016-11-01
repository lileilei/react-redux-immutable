// import { injectReducer } from '../../store/reducers'
export default (store) => ({
  path: 'home',
  getComponents (nextState, cb) {
    require.ensure([], (require) => {
      const Home = require('./containers/HomeContainer').default
      // const reducer = require('./modules/zen').default
      // injectReducer(store, { key: 'zen', reducer })
      cb(null, Home)
    })
  }
})
