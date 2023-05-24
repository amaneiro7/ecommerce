import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { Wallet} from '@mercadopago/sdk-react'
import type { Order } from './services/mercadopago'
import { mercadopagoService } from './services/mercadopago'


export const order:Order = {
  preference: {
    payer: {
      name: "john",
      surname: "doe",
      email: "john@mail.com",
      address: {
        street_name: "Antupiren",
        street_number: 400,
        zip_code: "170000",
      },
      identification: {
        type: "CI",
        number: "",
      }
    },
    items: [
      {
        id: "item-ID-14534",
        title: "Product 1",
        currency_id: "CLP",
        description: "Descripción del Item",
        quantity: 5,
        unit_price: 250,
        picture_url:'https://images.unsplash.com/photo-1586370434639-0fe43b2d32e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'
      },
      {
        id: "item-ID-564748",
        title: "Product 2",
        currency_id: "CLP",
        picture_url:"https://images.unsplash.com/photo-1592845148519-b0d41df97ac2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        description: "Descripción del Item",
        quantity: 3,
        unit_price: 1500,
      }
    ],

    shipments: {
      cost: 5000,
    },
  },
  shipment: {
    provider:"Mercado Envios",
    cost: 5000
  },
};

function App() {
  const [preferenceId, setPreferenceId] = React.useState<string | null>(null)
  const [loading, setLoading] = React.useState(true)
  const getPreference = async () => {

    const result = await mercadopagoService.getPreferenceId(order)
    setPreferenceId(result)
    console.log(result);
    
    setLoading(false)
  }
  
  React.useEffect(()=>{
    getPreference()
  },[])
  return (
    <>
    <main>
      {!loading && (
        <Wallet initialization={{preferenceId:preferenceId as string}} />
      )}

    </main>
    </>
  )
}

export default App
