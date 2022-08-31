import {useState} from 'react'

function Nao() {
    const[data, setData]= useState("Ajio")
    function updateData() {
     setData("FlipKart")
    }
  return (
    <div>
        <h1>
           {data}
        </h1>
        <button onClick={updateData}>Update Data</button>
    </div>
  )
}

export default Nao