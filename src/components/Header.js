import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

class Header extends Component {
    render(){
        return(
            <div>
                <h1>App Header</h1>
                <ul>
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/todo">To do</Link></li>
                    <li><Link to="/counter">Counter</Link></li>
                </ul>
                <Button label ='OK!'/>
            </div>
        );
    }
}

export default Header;