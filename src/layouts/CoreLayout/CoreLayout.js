import React from 'react'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div>
    {children}
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
