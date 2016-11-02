/**
 * Created by lilei on 2016/10/28.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import Header from '../../../components/Header/Header'
import './HomeView.scss'
import menu_1 from  '../assets/menu_1.png'
import menu_2 from  '../assets/menu_2.png'
import menu_3 from  '../assets/menu_3.png'

class HomeView extends Component {
  componentDidMount() {
    var menu = this.leftMenu
    window.onscroll = function (e) {
      if ((document.documentElement.scrollTop || document.body.scrollTop) > 60) {
        menu.style.top = 0 + 'px'
      } else {
        menu.style.top = 60 + 'px'
      }
    }
  }

  componentWillUnmount() {
    window.onscroll = null
  }

  render() {
    return (
      <div id="home">
        <Header />
        <div className="leftMenu" ref={(ref) => this.leftMenu = ref}>
          <ul>
            <li><Link to='/home/services' activeClassName='route--active'>
              <img src={menu_1}/>
              <p>服务库</p>
            </Link></li>
            <li><Link to='/home/servicesChild' activeClassName='route--active'>
              <img src={menu_2}/>
              <p>子服务库</p>
            </Link></li>
            <li><Link to='/home/manage' activeClassName='route--active'>
              <img src={menu_3}/>
              <p>管理</p>
            </Link></li>
          </ul>
        </div>
        <div className="rightContent">{this.props.children}</div>
      </div>
    )
  }
}
export default connect()(HomeView)
