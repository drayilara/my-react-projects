import React from "react";
import * as ReactDOM from 'react-dom';
import "./index.css";
import App from  "./App";
import { CartProvider } from "./Cart.Provider";




ReactDOM.render(
<React.StrictMode>
    <main>
        <CartProvider>
           <App />
        </CartProvider>
    </main>    
</React.StrictMode>, 
document.getElementById("root"));