import React from 'react'
import {Link} from 'react-router'
import {Icon} from 'antd'
import './style.scss'
import logo from  '../../assets/logo.png'
import keshi from  '../../assets/keshi.png'
export const Header = () => (
  <div id="header">
    <Link to="" activeClassName='active'>
      <img style={{width:19}} src={keshi}/>权限管理</Link>
    <Link to="" activeClassName='active'>
      <img style={{width:19}} src={keshi}/>数据统计</Link>
    <Link to="" activeClassName='active'>
      <img style={{width:19}} src={keshi}/>页面样板</Link>
    <span className="logoArea">
      <img src={logo}/>
    </span>
  </div>
)

export default Header
