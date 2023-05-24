import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { initMercadoPago} from '@mercadopago/sdk-react'
initMercadoPago(import.meta.env.VITE_MP_PUBLIC_KEY);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
