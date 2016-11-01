import {combineReducers} from 'redux-immutable'
import locationReducer from './location'
export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    ...asyncReducers,
    routing: locationReducer
  })
}
export const injectReducer = (store, {key, reducer}) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
