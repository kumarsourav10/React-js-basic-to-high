import React,{ useState } from "react"

function Lavra() {
    const[data, setData]= useState(null)
    const[print, setPrint]= useState(false)

    function getData(val)
    {
        console.warn(val.target.value)
        setData(val.target.value)
        setPrint(true)
    }
  return (
    <div className="Lavra">
        {
            print ?
            <h1>{data}</h1>
            :null
        }
        <input type="text" onChange={getData} />
        <button onClick={()=> setPrint(true)}>Batan Daba</button>
    </div>
  )
}

export default Lavra