import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import "./cart-icon.styles.scss";

import {ReactComponent as Logo} from '../../assets/cart-icon.svg';

import {toggleHiddenCart} from '../../redux/cart/cart.actions';
import { selectCartCount } from '../../redux/cart/cart.selectors';


const CartIcon = ({toggleHiddenCart, total}) => (
    <div className="cart-icon" onClick={() => toggleHiddenCart()}>
        <div className="shopping-icon">
            <Logo />
        </div>
        <div className="item-count">{total}</div>
    </div>
);


const mapDispatchToProps = dispatch => ({
    toggleHiddenCart: () => dispatch(toggleHiddenCart())
});

const mapStateToProps = createStructuredSelector({
    total: selectCartCount
});


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);