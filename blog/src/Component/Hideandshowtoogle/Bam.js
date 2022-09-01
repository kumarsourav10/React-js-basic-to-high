import React from 'react'

function Bam() {
    const[status, setStatus]= React.useState(true)
  return (
    <div className='Bam'>
        {
            status? 
            <h1>Bam Bhole</h1>
            :null
        }
        {/* <button onClick={()=> setStatus(false)}>Hide</button>
        <button onClick={()=> setStatus(true)}>show</button> */}
        <button onClick={()=> setStatus(!status)}>Toggle</button>
    </div>
  )
}

export default Bam