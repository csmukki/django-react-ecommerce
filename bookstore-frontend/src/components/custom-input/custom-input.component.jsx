import React from 'react';

import "./custom-input.styles.scss";

const CustomInput = ({label, errors, ...rest}) => (
    <div className="group">
        {
            errors ? (
                <div className="error-message">{errors.name}</div>
            ) : null
        }
        <input 
            className="custom-input"
            required
            {...rest}
        />
         {
            label ? 
            <label className={`${rest.value}` ? 'shrink': 'custom-input-label'}>
                {label}
            </label> : 
            null
        }

    </div>
);

export default CustomInput;