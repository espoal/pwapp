import {
  React, createRoot, BrowserRouter
} from '@vendors/react'
import { App } from './App'
import './css/style.scss'

const container = document.getElementById('root')

createRoot(container).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
