import React from 'react'

function TequilaCard({tequila}) {
  return (
    <div>
        <p>{tequila.name}</p>
        <img src={tequila.image} />
        <p>{tequila.ml}</p>
        <p>{tequila.price}</p>
    </div>
  )
}


export default TequilaCard