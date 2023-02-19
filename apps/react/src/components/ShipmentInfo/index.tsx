import React from 'react'
import { Shipment } from '../../models/shipment.model'

export const ShipmentInfo = ({shipment}:any) => {
    const {cost,provider} = shipment
    console.log(shipment)
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
        <span>Cost:{cost}</span>
        <span>Provider: {provider}</span>
    </div>
  )
}
