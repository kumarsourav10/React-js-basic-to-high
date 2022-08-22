import { useState } from 'react';

function Prec() {
    const[data, SetData]= useState("Sourav")
    function updateData()
    {
        SetData("Pandit")
    }
 return(
     <div>
        <h1>
            {data}
        </h1>
        <button onClick={updateData}>Update Data</button>
    </div>
 )
  
}

export default Prec ;