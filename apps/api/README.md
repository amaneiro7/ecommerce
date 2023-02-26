# Usage

Init Mercado pago service

```ts

import mercadopago from "mercadopago";

import { config } from "../config";

const initMP = () => {
  try {
    mercadopago.configurations.setAccessToken(config.accessToken);
    mercadopago.configure({
      access_token: config.accessToken,
      integrator_id: config.integratorId,
    });
    console.log("[mercado-pago]: Configuracion exitosa");
  } catch (error) {}
    console.error("[mercado-pago]: Problemas con la configuracion")
};

export { initMP};

```

create preference from frontend preference

```ts

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
  const {body} = response.body
  
  return {
    id:body.id
  }
}

export {
  createPreference
}


```

after your mp server run, you have create a a endpoint where receive notifications of your orders and all information about it