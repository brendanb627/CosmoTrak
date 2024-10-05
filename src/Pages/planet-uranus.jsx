import React from 'react'
import { PlanetDefault } from '../Components/planet-default'

export const PlanetUranus = () => {
    const Jupiter = {
        name: 'Jupiter',
        size: '142,984 km',
        mass: '318.0 x 10^23 kg',
        distance: '778.3 million km',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/J'
        
    }
  return (
    <PlanetDefault Planet={Jupiter}/>
  )
}