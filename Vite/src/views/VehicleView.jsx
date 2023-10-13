import React from 'react'

function VehicleView({vehicle}) {
  return (
    <div>
      <h1>{vehicle.name}</h1>
      <h2>{vehicle.description}</h2>
      <img src={vehicle.image} alt={vehicle.name + " imagen"}/>
    </div>
  )
}

export default VehicleView
