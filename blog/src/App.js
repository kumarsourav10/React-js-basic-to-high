import './App.css'
// import Butun from './Class'
// import GetInpu from '../src/Component/Getinput/GetInpu';
// import Mob from '../src/Component/Getinput/Mob';
// import Lap from './Component/Getinput/Lap';
// import Map from './Component/Getinput/Map';
// import Sou from './Component/Getinput/Sou';
// import Boat from './Component/StateinClassComponent/Boat';
// import Goat from './Component/StateinClassComponent/Goat';
// import Cap from './Component/StateinFunComponent/Cap';
// import Prec from './Prec';
// import Nao from './Component/StateinFunComponent/Nao';
// import Cha from './Component/Hideandshowtoogle/Cha';
// import Hide from './Component/Hideandshowtoogle/hide'
// import Lavra from './Component/Getinput/Lavra';
// import Joo from './Component/Getinput/Joo';
// import Ev from './Component/HandleForm/Ev'
// import Bam from './Component/Hideandshowtoogle/Bam';
// import New from './Component/HandleForm/New';
// import Kis from './Component/Ifelsecondition/Kis';
// import Mob from './Component/Ifelsecondition/Mob'
// import Bos from './Component/BasicFormValidation/Bos'
// import Boo from './Component/Hideandshowtoogle/Boo'
// import Dan from './Component/Hideandshowtoogle/Dan'
// import Wao from './Component/StateinFunComponent/Wao'
// import Flu from './Component/StateinClassComponent/Flu'
// import Login from './Component/Form_Validation/Login'
import Pile from './Component/PassFunctionasProp/Pile'

function App() {
  function getData()
  {
    alert("This is my alert")
  }
  return (
    <div className='App'> 
      {/* <Login /> */}
      <Pile data={getData}/> 
      <Pile data={getData}/> 
      <Pile data={getData}/> 
      <Pile data={getData}/> 
      <div style={{float: 'right', border: "2px solid black"}}>
        <Pile data= {getData} />
      </div>
  {/* <Bam />
  <Ev />
  <New />
  <Kis /> */}
  {/* <Mob /> */}
  {/* <Bos /> */}
  {/* <Boo /> */}
  {/* <Dan />
  <Wao /> */}
  {/* <Flu /> */}
  {/* <Joo />
  <Cha />
  <Lavra />
  <Butun />
  <Hide />
  <GetInpu />
  <Mob />
  <Lap />
  <Map />
  <Sou />
  <Boat />
  <Goat />
  <Cap />
  <Prec />
  <Nao /> */}
    </div>
  )
}

export default App