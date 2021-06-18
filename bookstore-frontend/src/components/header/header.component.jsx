import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import "./header.styles.scss";

import logo from '../../assets/header-icon.webp';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';


const Header = ({currentUser, hidden}) => (
    <div className="header">
        <NavLink to="/" className="logo-container">
            <img src={logo} alt="Homepage" width="100" />
        </NavLink>
        <div className="options">
            <NavLink to="/shop" className="option">Shop</NavLink>
            <NavLink to="/contact" className="option">Contact</NavLink>
            {
                currentUser ? (
                    <div className="option">Sign Out</div>
                ) :(
                    <NavLink className="option" to="/sign-in">Sign In</NavLink>
                )
            }
            <CartIcon className="option" onClick={() => null} />
        </div>
        {
            hidden ? null : <CartDropdown />
        }
    </div>
);

const mapStateToProps = ({cart : {hidden}}) => ({
    hidden
});

export default connect(mapStateToProps, null)(Header);