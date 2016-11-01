/**
 * Created by lilei on 2016/10/25.
 */
import makeRootReducer from '../../store/reducers'
import LoginReducers from './reducers/Login_reducers'
import LoginView from './containers/LoginContainer'

export default (store) => {
  store.replaceReducer(makeRootReducer({'login': LoginReducers}))
  return {
    component: LoginView
  }
}
