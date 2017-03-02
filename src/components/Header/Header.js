import React from 'react'
import {Link} from 'react-router'
import {Icon} from 'antd'
import './style.scss'
import logo from  '../../assets/logo.png'
import keshi from  '../../assets/keshi.png'
export const Header = () => (
  <div id="header">
    <Link to="/dcms/home/config" activeClassName='active'>
      <img style={{width:19}} src={keshi}/>系统配置</Link>
    <Link to="/dcms/home/reported" activeClassName='active'>
      <img style={{width:19}} src={keshi}/>数据上报</Link>
    <Link to="/dcms/home/view" activeClassName='active'>
      <img style={{width:19}} src={keshi}/>数据浏览</Link>
    <span className="logoArea">
      <img src={logo}/>
    </span>
  </div>
)

export default Header
