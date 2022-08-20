// import logo from './logo.svg';
import './App.css';
import Student from './Student';

function App() {
  return(
    <div className="App">
      <h1>Props in React :</h1>
      <Student name={"Sakshi"} email="Sakshi@test.com"  address="Noida"/>
      <Student name={"Sourav"} email="Sourav@test.com" address="Delhi"/>
      <Student name={"Akshay"} email="Akshay@test.com"  address="up"/>
    </div>
  )
}

export default App;