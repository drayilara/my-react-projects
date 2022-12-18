import React from "react";
import { useCartContext } from "./Cart.Provider.jsx";

const Items = () => {
    // consume context here and extract state and actions.
    let {
    products,
    clear,
    totalPrice,
    handleClear,
    handleItemRemoval,
    increaseItemCount,
    decreaseItemCount,
    getMap
    } = useCartContext();

    
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