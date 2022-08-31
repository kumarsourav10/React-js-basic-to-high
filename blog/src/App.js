import './App.css'
import Butun from './Class'
import GetInpu from '../src/Component/Getinput/GetInpu';
import Mob from '../src/Component/Getinput/Mob';
import Lap from './Component/Getinput/Lap';
import Map from './Component/Getinput/Map';
import Sou from './Component/Getinput/Sou';
import Boat from './Component/StateinClassComponent/Boat';
import Goat from './Component/StateinClassComponent/Goat';
import Cap from './Component/StateinFunComponent/Cap';
import Prec from './Prec';
import Nao from './Component/StateinFunComponent/Nao';
import Cha from './Component/Hideandshowtoogle/Cha';
import Hide from './Component/Hideandshowtoogle/hide'
import Lavra from './Component/Getinput/Lavra';


function App() {
  return (
    <div className='App'>
      <h1>This is Heading</h1>

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
  <Nao />
    </div>
  )
}

export default App