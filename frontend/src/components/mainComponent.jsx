import React, { Component } from 'react';
import WithToolTip from '../hoc/withTooltip';

class MainComponent extends Component {
    render() {
        return(
            <div className="content">
                <h1>Hello World, (Higher Order Component)</h1>
            </div>
        );
    }
};

export default WithToolTip(MainComponent);