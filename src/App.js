import { useState } from 'react';
import { ToggleMenu } from './Components/ToggleMenu';
import { RecordingForm } from './Components/RecordingForm';
import { MainPage } from './Pages/MainPage';
import About from './Pages/About';
import Shedule from './Pages/Shedule';
import Coach from './Pages/Coach';
import Location from './Pages/Location';
import Galery from './Pages/Galery';
import ForCorp from './Pages/ForCorp';
import Contacts from './Pages/Contacts';
//import './App.css';

function App() {
  const [modalActive, setModalActive] = useState(false);
/*const changeMenuVis = () => {
  setMenuVis((prev) => !prev);
}*/
/*  const {hash, key} = useLocation();
  useEffect(()=>{
    if(hash){
       const targetElement = document.getElementById(hash.substring(1));
        targetElement?.scrollIntoView({behavior: 'smooth'});
    }
  }, [key, hash]);*/

  return (
    <div className="App">
      <ToggleMenu setActive={setModalActive}/>
      <RecordingForm active={modalActive} setActive={setModalActive}/>
      <MainPage/>
      <About/>
      <Shedule/>
      <Galery/>
      <Coach/>
      <Location/>
      <ForCorp/>
      <Contacts/>
    </div>
  );
}

export default App;
