import React, {useRef, useState} from "react";
import Products from "./data.js"

const Items = ({ setTotalItems }) => {
    // create a ref and reference nothing yet.
    let itemCountRef = useRef(null);
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
        // decreaseItemCountimplements a decrease as well.
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

    // create a map that allows you collect nodes to one ref
    const getMap = () => {
        if(!itemCountRef.current) {
            // initialise your map
            itemCountRef.current = new Map();
        }
        return itemCountRef.current;
    }

    
    return (
        <section className="cart">
            <header>
                <h2>YOUR BAG</h2>
            </header>

        {clear && <div>
            {products.map(product => 
                (
                    <article className="cart-item" key={product.id}>
                    <img src={product.img} alt={product.title}/>

                    <div>
                        <h4>{product.title}</h4>
                        <h4 className="item-price">{product.price}</h4>
                        <button className="remove-btn" id={product.id}
                        onClick={(e) => handleItemRemoval(e)}
                        >remove</button>
                    </div>

                    <div>
                    <i 
                    className="fa-solid fa-chevron-up amount-btn"
                    data-id={product.id}
                    onClick={(e) => increaseItemCount(e)}
                    >
                    </i>
                
                        <p className="amount"
                        id={product.id}
                        ref={node => {
                            let map = getMap();
                            if(node) {
                                map.set(product.id, node);
                            }else {
                                map.delete(product.id);
                            }
                        }}
                        >
                        {product.amount}
                        </p>

                    <i 
                    className="fa-solid fa-chevron-down amount-btn"
                    data-id={product.id}
                    onClick={(e) => decreaseItemCount(e)}
                    >
                    </i>
                    </div>
                </article>
            ))}
        </div>
        }

        <footer>
            <hr />
            <div className="cart-total">
                <h4>total
                <span>${totalPrice.toFixed(2)}</span>
                </h4>
            </div>

            <button className="btn clear-btn"
            onClick={() => handleClear()}
            >{clear ? "Clear cart" : "Show cart"}</button>
        </footer>
        </section>
    )
}

export default Items;