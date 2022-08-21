import React,{useState} from 'react'
// import logo from './logo.svg';
import './App.css';
import Sourav from './Sourav';
import Student from './Student';


function App() {
  const[name, setname] = useState("Sourav")
  return(
    <div className="App">
      <h1>Props in React :</h1>
      <Student name={name} />
      <button onClick={()=>{setname("Pandit")}} >Update Name</button>
      {/* <Student name={"Sourav"} email="Sourav@test.com" address="Delhi"/>
      <Student name={"Akshay"} email="Akshay@test.com"  address="up"/> */}
     <Sourav />
     
    </div>
  )
}

export default App;