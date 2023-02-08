import { FormEvent, MouseEventHandler } from "react";
import { config } from "../../config";
import { Order } from "../../models/order.model";
import { Preference } from "../../models/preference.model";

declare global {
  interface Window {
    MercadoPago: any;
  }
}

export const PayButton = ({preference,shipment}:Order) => {
  
  
  const getPreferenceId = async (order:Order) => {
    try {
      const response = await fetch(`${config.server}/api/create_preference`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      const data = await response.json();
      
      return data.id
    } catch (error) {
      console.error('Error en la order')
    }
  }

  const handleClick = async (event:FormEvent) => {
    const preferenceId = await getPreferenceId({preference,shipment})
    const mp = new window.MercadoPago(config.mpPublicKey, {
      locale: 'es-CL'
    });
  
    mp.checkout({
      preference: {
        id: preferenceId
      },
      autoOpen:true

    });
  }
  return (
    <button onClick={handleClick}>PayButton</button>
  )
}
