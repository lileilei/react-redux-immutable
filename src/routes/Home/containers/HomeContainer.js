/**
 * Created by lilei on 2016/10/28.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import Header from '../../../components/Header/Header'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

class HomeView extends Component {
  render() {
    return (
      <div style={{textAlign:'center'}}>
        <h4>Welcome!</h4>
        <Header />
        <img
          alt='This is a duck, because Redux!'
          className='duck'
          src={DuckImage}/>
      </div>
    )
  }
}
export default connect()(HomeView)
