import React from 'react';
import { connect } from 'react-redux';

import "./collection-item.styles.scss";

import { addItemToCart } from '../../redux/cart/cart.actions';


const CollectionItem = ({item, addItem}) => {
    const {imageUrl, name, price} = item;
    return (
    <div className="collection-item">
        <div className="image"
            style={{backgroundImage: `url(${imageUrl})`}}
        />
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <button className="custom-button" onClick={() => addItem(item)}>ADD TO CART</button>
    </div>
)};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItemToCart(item))
});


export default connect(null, mapDispatchToProps)(CollectionItem);