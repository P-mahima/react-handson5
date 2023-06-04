import React, { PureComponent } from 'react'

export default class Mypure extends PureComponent {
  render() {
    return (
      <h3 className=' space'>PureComponent is similar to Component but it skips re-renders for same props and state.</h3>
    )
  }
}
