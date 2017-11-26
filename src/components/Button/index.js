import React, {Component} from 'react';
import './index.css'

class Button extends Component {
    render() {
        const buttonStyle = {
            backgroundColor: 'green',
            color: 'yellow'
        };
        return (
            <div>
                <div className="btn-container">
                    <button style={buttonStyle}>{this.props.label}</button>
                </div>
            </div>
        );

    }
}

export default Button;