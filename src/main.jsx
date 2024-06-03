// main.jsx 

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ShowImage } from './ShowImage.jsx'
import { store } from './Store.jsx'
import Overlay from './overlays/OverLay.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Overlay onClick={()=>store.image = ''} />
    <ShowImage />
  </React.StrictMode>,
)
