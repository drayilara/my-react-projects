import React from "react";
import { CgShoppingBag } from "react-icons/cg";
import { useCartContext } from "./Context";

const Navbar = () => {
    let {cartState} = useCartContext();
   
    return (
        <nav>
            <div className="nav-center">
                <h3>useReducer</h3>

                <div className="nav-container">
                    <CgShoppingBag className="cart-bag"/>

                    <div className="amount-container">
                        <p className="total-amount">{cartState.totalCount}</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar