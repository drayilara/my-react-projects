import React from "react";
import { useCartContext } from "./Cart.Provider.jsx";

const Items = () => {

    let {
    getMap,
    state,
    dispatch
    } = useCartContext();
  
    return (
        <section className="cart">
            <header>
                <h2>YOUR BAG</h2>
            </header>

        {state.clear && <div>
            {state.products.map(product => 
                (
                    <article className="cart-item" key={product.id}>
                    <img src={product.img} alt={product.title}/>

                    <div>
                        <h4>{product.title}</h4>
                        <h4 className="item-price">{product.price}</h4>
                        <button className="remove-btn" id={product.id}
                        onClick={(event) => {
                            event.persist();
                            dispatch({type: "remove_item", event: event})
                        }}
                        >remove</button>
                    </div>

                    <div>
                    <i 
                    className="fa-solid fa-chevron-up amount-btn"
                    data-id={product.id}
                    onClick={(event) => {
                        event.persist();
                        dispatch({type: "increase_item", event: event})
                        }}
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
                    onClick={(event) => {
                        event.persist();
                        dispatch({type: "decrease_item", event: event, getMap: getMap}) 
                    }}
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
                <span>${state.totalPrice.toFixed(2)}</span>
                </h4>
            </div>

            <button className="btn clear-btn"
            onClick={() => dispatch({type: "clear"})}
            >{state.clear ? "Clear cart" : "Show cart"}</button>
        </footer>
        </section>
    )
}

export default Items;