import React from 'react';

import "./custom-input.styles.scss";

const CustomInput = ({label, error, ...rest}) => (
    <div className="group">
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
        <div className="error">
            {
                error ? (
                    <div className="error-message">{error}</div>
                ) : null
            }
        </div>

    </div>
);

export default CustomInput;