import React, { useContext, createContext, useReducer } from "react";
import cartReducer from "./cartReducer";
import itemsData from "./data";

const setInitialCartState = () => {  
        return itemsData.reduce((prev, current) => {
                prev[current.id] = {count : current.amount, startingPrice : current.price, cumulativePrice : current.price}
                return prev;
        }, {});
}

const CartContext = createContext();

// create context provider and nest all state here
const CartProvider = ({children}) => {
    const initialState = setInitialCartState();
    // make total count and all items stateful
    initialState.totalCount = itemsData.length;
    initialState.data = itemsData;
    initialState.totalPriceToPay = itemsData.reduce((prev, current) => {
        prev = prev + current.price;
        return prev;
    },0);

    const [cartState, dispatchCartState] = useReducer(cartReducer, initialState);
    
    let bundledValue = {
        cartState,
        dispatchCartState
    }


    return (
        <CartContext.Provider value={bundledValue}>
            {children}
        </CartContext.Provider>
    )
}

// custom hook to consume context efficiently
const useCartContext = () => {
    return useContext(CartContext);
}

export { useCartContext, CartProvider }

