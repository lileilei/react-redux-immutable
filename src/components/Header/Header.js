import React from 'react'
import { IndexLink } from 'react-router'
import './style.scss'

export const Header = () => (
  <div id="header">
    <IndexLink to='/' activeClassName='route--active'>
      服务一体化
    </IndexLink>
  </div>
)

export default Header
