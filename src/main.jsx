import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Add this line to detect low-end devices
const isLowEnd = navigator.hardwareConcurrency <= 4;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App isLowEnd={isLowEnd} />
  </React.StrictMode>,
)
