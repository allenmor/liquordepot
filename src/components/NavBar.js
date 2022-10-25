import React from 'react'
import './NavBar.css'
import { useNavigate } from 'react-router-dom'

function NavBar() {

  const navigate = useNavigate()

  function handleHomeClick() {
    navigate('/')
  }
  function handleTequilaClick(){
    navigate('/tequila')
  }
  return (
    <div className='nav-container'>
      <p onClick={handleHomeClick}>Home</p>
      <p onClick={handleTequilaClick}>Tequila</p>
      <p>Whiskey</p>
      <p>Arak</p>
      <p>Vodka</p>
      <p>Mezcal</p>
      <p>Gin</p>
      <p>Rum</p>
      <p>Wine</p>
      <p>Cognac</p>
    </div>
  )
}

export default NavBar
