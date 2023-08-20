import React from "react"
import ReactDOM from "react-dom/client"
import App from "./components/App/App"
import { AppProvider } from './components/AppContext'
import "./globals.css"

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AppProvider>
            <App />
      </AppProvider>
    </React.StrictMode>
)