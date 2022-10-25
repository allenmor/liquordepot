import React from 'react'
import TequilaCard from './TequilaCard'
import { useState, useEffect } from 'react'

function TequilaContainer() {

    const [tequila, setTequila] = useState([])

    useEffect(()=>{


            fetch('https://raw.githubusercontent.com/allenmor/liquordepot/main/inventory.json')
            .then(res => res.json())
            .then(data => {
                setTequila(data.tequila)
                console.log(tequila)
            })
        
      },[])
  return (
    <div>
        {tequila.map((el, i) => {
            return <TequilaCard tequila={el} key={i}/>
        })}
    </div>
  )
}


export default TequilaContainer