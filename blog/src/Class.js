import React from 'react'

export default class Butun extends React.Component{

   
  render()
  {
    console.log(this.props)
    return(
      <div style={{backgroundColor:"skyblue", margin:20}}>
      <h1>{this.props.name}</h1>
      <h3>{this.props.email}</h3>
      </div>
    )
  }
}
