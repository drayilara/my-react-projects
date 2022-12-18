import React, { createContext, useContext, useState, useRef } from "react";
import Products from "./data";

const CartContext = createContext();

function CartProvider ({children}) {
    // Put all my state logic here.
    // came from app.js
    let itemCountRef = useRef(null);
    let [totalItems, setTotalItems] = useState(() => Products.length);

    // came from items.jsx
    let [products, setProducts] = useState(Products);
    let [totalPrice, setTotalPrice] = useState(() => Products.reduce((acc, product) => acc + product.price, 0));
    let [clear, setClear] = useState(true);

    const handleItemRemoval = (e) => {
        // e.target.id ===> removal button ID
        let removalBtnId = e.target.id
        // e.target.dataset.id ===> decrease item button ID
        let decreaseItemBtnId = e.target.dataset.id;

        let itemId = removalBtnId || decreaseItemBtnId;
        setProducts(prevProducts => {
            return prevProducts.filter(product => product.id !== parseInt(itemId, 0));
        })
        // reduce total price
        // prevent duplicate price setting as handleItemRemoval is called by decreaseItemCount
        // decreaseItemCount implements a decrease as well.
        if(!decreaseItemBtnId) {
            let currentProductUnitPrice = products.find(product => product.id === Number(itemId)).price;
            setTotalPrice(current => current - currentProductUnitPrice);
        }
        
        if(removalBtnId){
            setTotalItems(current => current - 1); 
        }
    }


    const handleClear = () => {

        if(clear){
            setProducts([]);
            setTotalPrice(0);
            setTotalItems(0);
            setClear(false);
        }else {
            setTotalPrice(() => Products.reduce((acc, product) => acc + product.price, 0));
            setProducts(Products);
            setTotalItems(() => Products.length);
            setClear(true);
        }
    }


    const increaseItemCount = (e) => {
        let map = getMap();
        let itemId = e.target.dataset.id;
        let node = map.get(Number(itemId));
        node.textContent = Number(node.textContent) + 1;

        // get current Product
        // get its unit price ===> constant
        // Add this to a stateful total price
        let currentProductUnitPrice = products.find(product => product.id === Number(itemId)).price;

        // Increase total Price
        setTotalPrice(current => current + currentProductUnitPrice);

        // increase the total amount
        setTotalItems(current => current + 1);
    }


    const decreaseItemCount = (e) => {
        let map = getMap();
        let itemId = e.target.dataset.id;
        let node = map.get(Number(itemId));
        if(node.textContent === "1") {
         handleItemRemoval(e);
        }else {
            node.textContent = Number(node.textContent) - 1;
        }

        // get current Product
        // get its unit price ===> constant
        // Add this to a stateful total price
        let currentProductUnitPrice = products.find(product => product.id === Number(itemId)).price;

        // decrease total price
        setTotalPrice(current => current - currentProductUnitPrice);

        // decrease total amount
        setTotalItems(current => current - 1);    
    }

    const getMap = () => {
        if(!itemCountRef.current) {
            // initialise your map
            itemCountRef.current = new Map();
        }
        return itemCountRef.current;
    }


    let values = {
        clear: clear,
        products: products,
        totalItems: totalItems,
        totalPrice: totalPrice,
        handleItemRemoval: handleItemRemoval,
        increaseItemCount: increaseItemCount,
        decreaseItemCount: decreaseItemCount,
        handleClear: handleClear, 
        getMap: getMap     
    }

    return <CartContext.Provider value={values}>
        {children}
    </CartContext.Provider>
}

const useCartContext = () => {
    return useContext(CartContext);
}

export {CartProvider, useCartContext}