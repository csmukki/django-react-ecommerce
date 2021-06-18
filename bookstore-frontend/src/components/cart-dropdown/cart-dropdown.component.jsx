import React from 'react';

import "./cart-dropdown.styles.scss";


const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items"></div>
        <button className="button btn-primary">GO TO CHECKOUT</button>
    </div>  
);


export default CartDropdown;