import React from 'react'

function Cha() {
    const[status, setStatus]= React.useState(true)
  return (
    <div className='Cha'>
        {
            status? <h1>Hello World</h1>:null
        }
        {/* <button onClick={()=>setStatus(false)}>Hide</button>
        <button onClick={()=>setStatus(true)}>Show</button> */}
        <button onClick={()=>setStatus(!status)}>Toggle</button> 
    </div>

  )
}

export default Cha