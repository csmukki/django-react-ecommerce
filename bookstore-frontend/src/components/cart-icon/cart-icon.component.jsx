import React from 'react';
import { connect } from 'react-redux';

import "./cart-icon.styles.scss";

import {ReactComponent as Logo} from '../../assets/cart-icon.svg';

import {toggleHiddenCart} from '../../redux/cart/cart.actions';


const CartIcon = ({toggleHiddenCart}) => (
    <div className="cart-icon" onClick={() => toggleHiddenCart()}>
        <div className="shopping-icon">
            <Logo />
        </div>
        <div className="item-count">0</div>
    </div>
);


const mapDispatchToProps = dispatch => ({
    toggleHiddenCart: () => dispatch(toggleHiddenCart())
});

export default connect(null, mapDispatchToProps)(CartIcon);