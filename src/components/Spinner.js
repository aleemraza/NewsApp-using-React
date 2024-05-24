import React, { Component } from 'react'
import loading from './loading.gif'
export class Spinner extends Component {
  render() {
    const myImageStyle = { width: '30px', height: '30px' };
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" style={myImageStyle} />
      </div>
    )
  }
}

export default Spinner
