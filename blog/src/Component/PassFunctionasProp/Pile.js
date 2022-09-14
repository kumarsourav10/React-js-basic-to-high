import React from 'react'

function Pile(props) {
  return (
    <div>
        <h1>USer Component</h1>
        <button onClick={()=>props.data()}>Call data function</button>
    </div>
  )
}

export default Pile 