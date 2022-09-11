import React from 'react'

function Boo() {
     const[post, setPost] = React.useState(false)
  return (
    <div className='Boo'>
        {
            post?
            <h2>
                Shree Ram
            </h2>
            :null
        }
        <button onClick={()=> setPost(false)}>Hide</button>
        <button onClick={()=> setPost(true)}>Show</button>
    </div>
  )
}

export default Boo