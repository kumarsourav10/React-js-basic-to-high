// import logo from './logo.svg';
import './App.css';
import Student from './Student';

function App() {
  return(
    <div className="App">
      <h1>Student Data</h1>
      <Student  allinone={{name:"Sumit", address: "Noida", Mobile: 8368149399, Height: "5'6", Weight: "90"}}/>
      <Student allinone={{name:"Amit", address: "Delhi", Mobile: 8799709424, Height: "4'6", Weight: "80"}}/>
      <Student allinone={{name:"Akshay", address: "GuruGram", Mobile: 7827901829, Height: "5'11", Weight: "75"}}/>
    </div>
  )
}

export default App;