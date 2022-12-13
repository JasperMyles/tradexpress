import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './Pages/LandingPage';
import Navbar1 from './Component/Navbar1';
import GetStartedPage from './Pages/GetStartedPage';
import GetStartedPage2 from './Pages/GetStartedPage2';
import LoginPage from './Pages/LoginPage';
import Instant from './Pages/Instant';
import Instant2 from './Pages/Instant2'
import Signup from './Pages/Signup';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState({rate: [] });
  useEffect(() => {
    let fetchData = async (url) => {
      let response = await fetch(url);
      let dataGotten = await response.json();
      console.log(dataGotten);
      setData({ ...data, rate: dataGotten.data });
    };
    fetchData("https://api.coinlore.net/api/tickers/?start=0&limit=5");
  }, []);
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar1/>
    <Routes>
      <Route path='/' element={<LandingPage rates={data.rate}/>}/>
      <Route path='/business' element={<GetStartedPage2/>}></Route>
      <Route path='/getstarted' element={<GetStartedPage/>}/>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/instant' element={<Instant/>}></Route>
      <Route path='/instant2' element={<Instant2/>}></Route>
      <Route path='/signin' element={<Signup/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
