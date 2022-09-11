import React from 'react'

function Dan() {
    const[status, setStatus] = React.useState(true)
  return (
    <div className='Dan'>
        {
            status?
            <h1>
                This
            </h1>
            :null
        }
        {/* <button onClick={()=> setStatus(false)}>Hide</button>
        <button onClick={()=> setStatus(true)}>Show</button> */}
        <button onClick={()=> setStatus(!status)}>Toggle</button>
    </div>
  )
}

export default Dan