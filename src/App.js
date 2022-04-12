
import { AOS } from 'aos';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import FamilyRoom from './component/FamilyRoom/FamilyRoom';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';

function App() {
 /*  useEffect(()=>{
    AOS.init()
  },[]) */
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/familyroom' element={<FamilyRoom/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
