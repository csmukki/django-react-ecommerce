import React from 'react';
import {connect} from 'react-redux';

import "./cart-dropdown.styles.scss";

import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                cartItems.map(({id, ...rest}) => (
                   <CartItem key={id} {...rest} />
                ))
                : <div className="empty">Cart is empty</div>
            }
        </div>
        <button className="button btn-primary">GO TO CHECKOUT</button>
    </div>  
);


const mapStateToProps = state => ({
    cartItems: selectCartItems(state), 
});


export default connect(mapStateToProps)(CartDropdown);