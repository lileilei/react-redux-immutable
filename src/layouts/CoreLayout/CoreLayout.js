import React from 'react'
import 'antd/dist/antd.css'
import './CoreLayout.scss'

export const CoreLayout = ({ children }) => (
  <div id="layout">
    {children}
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
