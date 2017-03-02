import Home from './containers/HomeContainer'
import DataView from '../DataView'
import DataConfig from '../DataConfig'
import Reported from '../Reported'

import Redirect from '../PageNotFound/redirect'
export default (store) => ({
  path: 'home',
  component: Home,
  indexRoute: {
    onEnter (nextState, replace) {
      replace('/dcms/home/view')
    }
  },
  childRoutes: [
    DataView(store),
    DataConfig(store),
    Reported(store),
    Redirect
  ]
})

