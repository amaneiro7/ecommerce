import mercadopago from 'mercadopago'

import { config } from '../config'
import { Preference } from '../models/preference.model'



const createPreference = async (preference: Preference) => {
  const mpPreference: Preference = {
    ...preference,
    back_urls: {
      success: `${config.frontendUrl}/payments/success`,
      failure: `${config.frontendUrl}/payments/failure`,
      pending: `${config.frontendUrl}/payments/pending`
    },
    auto_return: 'approved',
    notification_url: `${config.apiUrl}/api/notification_url`,
    external_reference: ''
  }

  const response = await mercadopago.preferences.create(mpPreference)
  const {body} = response
  
  return {
    id:body.id
  }
}

export {
  createPreference
}
