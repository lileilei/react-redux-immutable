/**
 * Created by lilei on 2016/10/25.
 */
import {injectReducer} from '../../store/reducers'
export default (store) => {
  return {
    path: 'login',
    getComponents (nextState, cb) {
      require.ensure([], (require) => {
        const LoginView = require('./containers/LoginContainer').default
        const reducer = require('./reducers/Login_reducers').default
        injectReducer(store, {key: 'login', reducer})
        cb(null, LoginView)
      })
    }
  }
}
