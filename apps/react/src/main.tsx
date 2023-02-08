import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style.css'
import {config} from './config'
const mp_script = document.createElement('script')
mp_script.src = config.libraryUri
document.head.append(mp_script)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
