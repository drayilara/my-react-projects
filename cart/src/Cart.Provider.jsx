import React, { createContext, useContext, useRef, useReducer, useEffect } from "react";
import Products from "./data";
import {reducer} from "./reducer";

const CartContext = createContext();

function CartProvider ({children}) {

    let itemCountRef = useRef(null);

    let [state, dispatch] = useReducer(reducer, {
        totalItems: Products.length,
        products: Products,
        totalPrice: Products.reduce((acc, product) => acc + product.price, 0),
        clear: true,
        increaseToggler: false,
        decreaseToggler: false,
        id: ""
    });

    useEffect(
        () => {
            let id = state.id;
            if(id) {
                let map = getMap();
                let node = map.get(Number(id));
                node.innerText = parseInt(node.innerText, 10) + 1;
            }       
        }
    , [state.increaseToggler]);

    useEffect(
        () => {
            let id = state.id;
            if(id) {
                let map = getMap();
                let node = map.get(Number(id));
                node.innerText = parseInt(node.innerText, 10) - 1;
            }
        }
    , [state.decreaseToggler]);
    
    const getMap = () => {
        if(!itemCountRef.current) {
            // initialise your map
            itemCountRef.current = new Map();
        }
        return itemCountRef.current;
    }

    let values = { 
        getMap: getMap,
        state: state,
        dispatch: dispatch  
    }

    return <CartContext.Provider value={values}>
        {children}
    </CartContext.Provider>
}

const useCartContext = () => {
    return useContext(CartContext);
}

export {CartProvider, useCartContext}