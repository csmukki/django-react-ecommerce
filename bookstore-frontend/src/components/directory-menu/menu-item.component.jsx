import React from 'react';
import {withRouter} from 'react-router-dom';

import "./menu-item.styles.scss";


const MenuItem = ({title, image, history}) => (
    <div className="menu-item">
        <div className="background-image"
            style={{backgroundImage: `url(${image})`}}
        />
        <div className="content" onClick={() => history.push(`/${title.toLowerCase()}`)}>
            <span className="title">{title.toUpperCase()}</span>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);


export default withRouter(MenuItem);