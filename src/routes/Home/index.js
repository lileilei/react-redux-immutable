import Home from './containers/HomeContainer'
import Service from '../services'

import ServiceChild from '../servicesChildren'
import ServiceChildAdd from '../servicesChildren/routes/servicesChildAdd'
import ServiceChildField from '../servicesChildren/routes/servicesChildField'
import manage from '../manage'
import Redirect from '../PageNotFound/redirect'
export default (store) => ({
  path: 'home',
  component: Home,
  indexRoute: {
    onEnter (nextState, replace) {
      replace('/home/services')
    }
  },
  childRoutes: [
    Service(store),
    ServiceChild(store),
    ServiceChildAdd(store),
    ServiceChildField(store),
    manage(store),
    Redirect
  ]
})

