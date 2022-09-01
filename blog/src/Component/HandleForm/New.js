import {useState} from 'react'

function New() {
    const[name, setName]=useState("");
    const[tnc, setTnc]=useState("false")
    const[interest, setInterest]=useState("false")

    function getFormData(e)
    {
        console.warn(name,tnc,interest)
    }
  return (
    <div className='New'>
        <h1>
            This is me 
        </h1>
        <form onSubmit={getFormData}>
            <input type="text" placeholer="Enter Name" onChange={(e)=>setName(e.target.value)}/> <br/><br/>
            <select onChange={(e)=>setInterest(e.target.value)}>
                <option>Select Option</option>
                <option>Apple</option>
                <option>Mango</option>
                <option>Graps</option>
            </select>
            <br/><br/>
            <input type="checkbox"  onChange={(e)=>setTnc(e.target.checked)}/>
             <span>Accept TC</span>
        <button type='Submit'>Submit</button>
        <button>Clear</button>
        </form>
    </div>
  )
}

export default New