/**
 * Created by lilei on 2016/10/28.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import Header from '../../../components/Header/Header'
import './HomeView.scss'
class HomeView extends Component {
  render() {
    return (
      <div id="home">
        <Header />
        <div style={{paddingTop:60}}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
export default connect()(HomeView)
