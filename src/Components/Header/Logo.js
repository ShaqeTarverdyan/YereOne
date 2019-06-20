import React from 'react';
import logo from './logo.svg';
import './headerStyle.css';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Menu } from 'semantic-ui-react';

const Logo = () => {
    return (
      
            <Menu.Menu >
                <Menu.Item as={Link} to='/' >
                    <img src={logo} alt='logo' style={{ width: '40%' }} />
                </Menu.Item>
            </Menu.Menu>

    )
}
export default Logo;