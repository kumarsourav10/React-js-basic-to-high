import React,{useState} from 'react'

function Mob() 
{ const[data, setData]= useState(null)
const[print, setPrint]= useState(false)

    function getData(val)
    {
        console.warn(val.target.value)
        setData(val.target.value)
        setPrint(false)
    }
  return (
    <div className='Mob'>
        {
            print?
            <h1>{data}</h1>
            :null
        }
        <input type="text" onChange={getData} />
        <button onClick={()=>setPrint(true)}>Print Data </button>
    </div>
  )
}

export default Mob


// first type {rfce}  to get functional component by snippet 
// then give input  and give the on chnage event , onchange event need value so create a function and give setData or whatever you want and give value in onChange
// then check your code by use console warn and create a data and set the Data and use useState 
// and give data to h1 tag
// then if you want to print the data by using tap the button then you have to create a button . 
// In button give onClick event and create a state by Print and set into setprint 