import React, { useRef } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineUp } from "react-icons/ai";
import { useCartContext } from "./Context";
import { v4 as key } from 'uuid';

const Items = () => {
    const {dispatchCartState, cartState} = useCartContext();
    const itemCountRef = useRef(null);

    const incrementItemCount = (e) => {
        const { id : itemId } = e.target;

        dispatchCartState({
            type : "INCREASE ITEM COUNT",
            id : itemId,
            count : itemCountRef.current.textContent
        })
    }

    const decrementItemCount = (e) => {
        let { id : itemId } = e.target;

        if(cartState[itemId].count === 1) {
            dispatchCartState({
                type : "REMOVE ITEM",
                id : Number(itemId)
            })
        }

        else{
            dispatchCartState({
                type : "DECREASE ITEM COUNT",
                id : itemId,
                count : itemCountRef.current.textContent
            })
        }
        
        
    }

    const removeItem = (e) => {
        const { id : itemId } = e.target;

        dispatchCartState({
            type : "REMOVE ITEM",
            id : Number(itemId)
        })
    }

    return (
        <section className="cart">
            <header>
                <h2>your bag</h2>
            </header>

        <div>
        {
            cartState.data.map(item => (     
            <article className="cart-item" key={key()}>
                <img src={item.img} alt={item.title}/>

                <div>
                    <h4>{item.title}</h4>
                    <h4 className="item-price">{item.price}</h4>
                    <button className="remove-btn" id={item.id}
                    onClick={(e) => removeItem(e)}
                    >remove</button>
                </div>
                <div>
                    <button 
                    className="amount-btn">
                        <AiOutlineUp onClick={(e) => incrementItemCount(e)} id={item.id}
                            key={key()}
                        />
                    </button>

                    <p className="amount" ref={itemCountRef}>
                    {
                      cartState[item.id].count
                    }
                    </p>

                    <button className="amount-btn">
                        <AiOutlineDown onClick={(e) => decrementItemCount(e)} id={item.id}
                            key={key()}
                        />
                    </button>
                </div>
            </article>
            ))  
        }
        </div>

            <footer>
                <hr />
                <div className="cart-total">
                    <h4>total
                    <span>$ {cartState.totalPriceToPay.toFixed(2)}</span>
                    </h4>
                </div>

                <button className="btn clear-btn"> Clear cart </button>
            </footer>
        </section>
    )
}

export default Items;