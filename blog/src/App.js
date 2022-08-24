// import logo from './logo.svg';
import './App.css'
import Butun from './Class'
import React from 'react'
import GetInpu from './GetInpu';

class App extends React.Component {
     constructor()
    {
      super();
      
        this.state={
          name:"Veena Devi"
        }
      
    }
    render()
    { 
        return (
          <div className='App'>
      <h1>Props</h1>
      <Butun name={this.state.name} email="Priyanshu@gmail.com"></Butun>
      <GetInpu />
      <button onClick={()=>this.setState({name:"Beena Devi"})}>Update Name</button>
    </div>
           );
          }
        }
        

export default App