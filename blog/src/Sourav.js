import React,{useState} from 'react';

function Sourav() {
    const[data, setData] = useState("Sourav")
    function updateData() {
        setData ({data:"Pandit"})
        alert(data)
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

export default Sourav;