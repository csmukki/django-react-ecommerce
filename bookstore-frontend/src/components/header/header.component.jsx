import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import "./header.styles.scss";

import logo from '../../assets/header-icon.webp';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectHidden } from '../../redux/cart/cart.selectors';


const Header = ({currentUser, hidden}) => (
    <div className="header">
        <Link to="/" className="logo-container">
            <img src={logo} alt="Homepage" width="100" />
        </Link>
        <div className="options">
            <Link to="/shop" className="option">Shop</Link>
            <Link to="/contact" className="option">Contact</Link>
            {
                currentUser ? (
                    <div className="option">Sign Out</div>
                ) :(
                    <Link className="option" to="/sign-in">Sign In</Link>
                )
            }
            <CartIcon className="option" onClick={() => null} />
        </div>
        {
            hidden ? null : <CartDropdown />
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    hidden: selectHidden, 
});

export default connect(mapStateToProps, null)(Header);