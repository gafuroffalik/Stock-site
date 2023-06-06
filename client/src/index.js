import React, {createContext} from "react";
import ReactDOM from 'react-dom/client'
import App from './App'
import UserStore from "./store/UserStore";
import ProductStore from "./store/ProductStore";
import LotStore from "./store/LotStore";

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Context.Provider value={{
            user: new UserStore(),
            product: new ProductStore(),
            lot: new LotStore()
        }}>
            <App />
        </Context.Provider>
    </React.StrictMode>

);