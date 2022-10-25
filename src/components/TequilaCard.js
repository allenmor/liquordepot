import React from 'react'
import './Tequila.css'

function TequilaCard({tequila}) {
  return (
    <div className='each-tequila'>
        <p>{tequila.name}</p>
        <img className='tequila-image' src={tequila.image} />
        <p>{tequila.ml}</p>
        <p>{tequila.price}</p>
        <div className='tequila-description-div'>
        <p className='tequila-description'>{tequila.description}</p>
        </div>
    </div>
  )
}


export default TequilaCard