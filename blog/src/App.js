// import React,{useState} from 'react'
// // import logo from './logo.svg';
import './App.css';
// import Sourav from './Sourav';
// import Student from './Student';
// import Anil from './Anil';
// import Prec from './Prec';
// import Suraj from './Suraj';
// import Babita from './Babita';
// import Butun from './Class';
import Teacher from './Propinfun';


// function App() {

//   function Apple()
//   {
//      return(
//       <div>Apple Component</div>
//      )
//   }
//   const[name, setname] = useState("Sourav")
//   return(
//     <div className="Teacher">
//       <h1>Props in React :</h1>
//       <Student name={name} />
//       <Student name={"Sourav"} email="Sourav@test.com" address="Delhi"/>
//       <Student name={"Akshay"} email="Akshay@test.com"  address="up"/>
//       <button onClick={()=>{setname("Pandit")}} >Update Name</button>
//      <Sourav />
//      <Anil />
//      <Prec />
//      <Suraj />
//      <Babita />
//      <Butun />
     <Teacher />
//      {Apple()}
     function App() {
      return(
        <div className="Teacher">
          <h1>Props in React</h1>
          <Teacher name={"Sourav"} email="Souravkumaarji99@gmail.com" address="Delhi" 
          other={{height:"5" , weight:"60"}} />
        </div>
      )
     }
          
     
//     </div>
//   )
// }

export default App;

