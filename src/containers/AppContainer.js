import React, { Component, PropTypes } from 'react'
import { browserHistory, Router } from 'react-router'

class AppContainer extends Component {
  static propTypes = {
    routes: PropTypes.object.isRequired
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    const { routes } = this.props

    return (<Router history={browserHistory} children={routes} />)
  }
}

export default AppContainer
