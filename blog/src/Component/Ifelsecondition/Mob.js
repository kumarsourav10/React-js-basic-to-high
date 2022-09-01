import {useState} from 'react'

function Mob() {
    const[loggedIn]=useState(2)

    if(loggedIn)
    {
        return (
          <div>
             {loggedIn===1?<h1>User 1</h1>:loggedIn===2?<h1>User 2</h1>:<h1>User3</h1>}
          </div>
        )
    }
}

export default Mob