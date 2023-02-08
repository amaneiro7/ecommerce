import { config } from './config'
import { Order } from './models/order.model';
import './style.css'
const preference = {
  items: [
    {
      id: "item-ID-14534",
      title: "nada",
      currency_id: "CLP",
      description: "Descripción del Item",
      quantity: 5,
      unit_price: 250,
    },
    {
      id: "item-ID-564748",
      title: "titulo del producto",
      currency_id: "CLP",
      description: "Descripción del Item",
      quantity: 3,
      unit_price: 1500,
    },
  ],
  payer: {
    name: "El Chile",
    surname: "Surname",
    email: "argentino@email.com",
    phone: {
      area_code: "56",
      number: 44444444,
    },
    identification: {
      type: "DNI",
      number: "",
    },
    address: {
      street_name: "Street",
      street_number: 123,
      zip_code: "5700",
    },
  },
  shipments: {
    cost: 3000,
  },
};
const shipment = {
  address: {
    street_name: "Antupiren",
    street_number: 400,
    city: "Santiago",
  },
  cost: 3000,
};
declare global {
  interface Window {
    MercadoPago: any;
  }
}

const mp_script = document.createElement('script')
mp_script.src = config.libraryUri
document.head.append(mp_script)

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

const payButton =  document.querySelector('#paybutton') as HTMLButtonElement
payButton.addEventListener('click',async (event:Event)=>{

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
})


