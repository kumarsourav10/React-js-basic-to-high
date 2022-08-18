// import logo from './logo.svg';
import './App.css';
// import User from './User'
// import Sourav from './Sourav'
// import Form from './Form';
// import User1 from './User1';
// import Check from './Check';
// import Jsx from './Jsx';
// alert("Hello")
function App() {
    let data = "Sourav Pandit"
  function apple() 
  {
    data = "peter"
   alert(data)
  }

  // function Apple() 
  // {
  //   return (<div>Apple Count</div>)
  // }
  return (
    <div className="App">
      <h1>{data}</h1>
      {/* <User />
      <Sourav />
      <Form />
      <User1 />
      <Apple />
      <Check />
      <Jsx /> */}

      {/* Whenever you give onClick event and give the alert it will come first without click it will appear first . How you prevent this after using  onClick's function ypu have to just remove the brackets which is return just after the apple `apple()`   */}
      {/* <button onClick={apple()}>Click Me</button> */}

      {/* See here how I removed the brackets */}
      <button onClick={()=>apple("Hello world")}>Click Me</button>
    </div>
  );
}

export default App;
