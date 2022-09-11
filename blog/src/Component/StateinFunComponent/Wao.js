import React from 'react'

function Wao() {
    const[data, setData]= React.useState("Ganesh")

    function updateData () 
    {
       setData("Vandana");
    //    alert{data}
    }
  return (
    <div>
        <h1>
            {data}
        </h1>
        <button onClick={updateData}>update data</button>
    </div>
  )
}

export default Wao