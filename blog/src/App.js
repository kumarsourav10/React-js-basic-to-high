// import logo from './logo.svg';
import './App.css';
import User from './User'
import Sourav from './Sourav'
import Form from './Form';
import User1 from './User1';
function App() {

  function Apple() 
  {
    return (<div>Apple Count</div>)
  }
  return (
    <div className="App">
      <h1>Hello Sourav</h1>
      <User />
      <Sourav />
      <Form />
      <User1 />
      {Apple ()}
    </div>
  );
}

export default App;
