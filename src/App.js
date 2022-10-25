import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react'
import TequilaContainer from './components/TequilaContainer';


function App() {

  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/allenmor/liquordepot/main/inventory.json')
    .then(res => res.json())
    .then(data => {
      console.log(data.tequila)
    })
  },[])
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/tequila' element={<TequilaContainer />} />
    </Routes>
    </>
  );
}

export default App;
