import React from 'react'
import { Payer, Preference } from '../../models/preference.model'

export const CustomerInfo = ({payer}:any) => {
  
  const {name,surname,email} = payer
  return (
    <div>
      <h4>{name} {surname}</h4>
      <span>{email}</span>
    </div>
  )
}
