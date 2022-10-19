import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react'


function App() {
  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/allenmor/liquordepot/main/inventory.json')
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  },[])
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
