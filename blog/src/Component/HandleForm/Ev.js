import {useState} from 'react'

function Ev() {
    const[name,setName]=useState("");
    const[tnc,setTnc]=useState("false");
    const[interest, setInterest]=useState("");

    function getFormData (e)
    {
        console.warn(name,tnc,interest)
        e.preventDefault()
    }
  return (
    <div className='Ev'>
        <h1>Handle Form in React</h1>
        <form onSubmit={getFormData}> 
            <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/> <br/><br/>
            <select onChange={(e)=>setInterest(e.target.value)}>
                <option>Select Option</option>
                <option>Marvel</option>
                <option>Avenger</option>
            </select> <br/><br/>
            <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/> <span>Accept TD</span>
            <br/><br/>
            <button type="submit">Submit</button>
            <button>clear</button>
        </form>
    </div>
  )
}

export default Ev