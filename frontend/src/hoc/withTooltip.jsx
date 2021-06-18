import React from 'react';


function WithToolTip(Component) {
    return class HigherOrderComponent extends React.Component {
        state = {
            showTooltip: false
        };

        handleMouseOver = () => this.setState({showTooltip: true});

        handleMouseOut = () => this.setState({showTooltip: false});

        render() {
            return(
                <div className="tooltip" 
                    onMouseOver={this.handleMouseOver}
                    onMouseOut={this.handleMouseOut}
                >
                    <Component />
                    {this.state.showTooltip && <h2 style={{color: "red"}}>Hello, From Tooltip</h2>}
                </div>
            );
        }
    }
}

export default WithToolTip;