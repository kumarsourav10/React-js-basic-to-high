import {useState} from 'react'
// import logo from './logo.svg';
import './App.css';

function App() {
const [data,setData]=useState("Sourav")
function updateData()
{
  setData("Pandit")
}
console.warn("_________")
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={updateData} >Update Data</button>
    </div>
  );
}

export default App;
