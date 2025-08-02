import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AppContextProvider } from './Context/ContextApi.jsx'
import {Toaster} from 'react-hot-toast'
createRoot(document.getElementById('root')).render(
<BrowserRouter>
<AppContextProvider>
<Toaster />
<App />
</AppContextProvider>
</BrowserRouter>
    
)
