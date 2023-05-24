
import { config } from "../config";
import type { CreatePreferencePayload } from 'mercadopago/models/preferences/create-payload.model'

export type Order = {
  shipment:any,
  preference:CreatePreferencePayload
}

class MercadopagoService{


    async getPreferenceId(order:Order):Promise<string>{
        const response = await fetch(`${config.serverUri}/api/create_preference`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(order),
          });
        
          const data = await response.json();
          
          return data.id;
    }
}

export const mercadopagoService = new MercadopagoService()
