import React,{useState} from 'react'
// import logo from './logo.svg';
import './App.css';
import Sourav from './Sourav';
import Student from './Student';
import Anil from './Anil';
import Prec from './Prec';
import Suraj from './Suraj';
import Babita from './Babita';
import Butun from './Class';


function App() {

  function Apple()
  {
     return(
      <div>Apple Component</div>
     )
  }
  const[name, setname] = useState("Sourav")
  return(
    <div className="App">
      <h1>Props in React :</h1>
      <Student name={name} />
      <button onClick={()=>{setname("Pandit")}} >Update Name</button>
      {/* <Student name={"Sourav"} email="Sourav@test.com" address="Delhi"/>
      <Student name={"Akshay"} email="Akshay@test.com"  address="up"/> */}
     <Sourav />
     <Anil />
     <Prec />
     <Suraj />
     <Babita />
     <Butun />
     
     {Apple()}
          
     
    </div>
  )
}

export default App;