import React from 'react'

function Hide () {
  const[status, setStatus]= React.useState(false)
  return (
    <div className="Hide">
      {
        status?<h1>This is Me</h1>:null
      }
      
      {/* <button onClick={()=>setStatus(false)}>Hide</button>
      <button onClick={()=>setStatus(true)}>Show</button> */}
      <button onClick={()=>setStatus(!status)}>Toggle</button>
    </div>
  )
}

export default Hide