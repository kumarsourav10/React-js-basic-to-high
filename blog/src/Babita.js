import { useState } from "react"

function Babita() {
    const[data, setData]= useState("TaTa Sky")
    function UpdateData()
  {
    setData("Mahindra")
    alert(data)
  }

  return (
    <div>
        <h1>
            {data}
        </h1>
        <button onClick={UpdateData}>Update Data</button>
    </div>
  )
}

export default Babita;    