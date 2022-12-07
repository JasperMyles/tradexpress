import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './Pages/LandingPage';
import Navbar1 from './Component/Navbar1';
import GetStartedPage from './Pages/GetStartedPage';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar1/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/getstarted' element={<GetStartedPage/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
