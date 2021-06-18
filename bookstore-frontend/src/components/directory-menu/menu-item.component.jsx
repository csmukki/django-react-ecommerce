import React from 'react';

import "./menu-item.styles.scss";


const MenuItem = ({title, image}) => (
    <div className="menu-item">
        <div className="background-image"
            style={{backgroundImage: `url(${image})`}}
        />
        <div className="content">
            <span className="title">{title.toUpperCase()}</span>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);


export default MenuItem;