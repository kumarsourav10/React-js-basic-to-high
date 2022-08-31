import React, { Component } from 'react'

class Boat extends Component {
  constructor () {
    super();
    
      this.state = {
        data:"Sourav Pandit"
    
    };
  }
    apple ()
  {
    this.setState({data:"Suraj Mathur"})
  }
  render()
  {

    return (
      <div className='Boat'>
      <h1>
        {this.state.data}
      </h1>
      <button onClick={()=>this.apple()}>Update Data</button>
    </div>
  )
 }
}

export default Boat