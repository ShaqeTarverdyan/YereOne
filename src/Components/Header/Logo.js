import React from 'react';
import logo from './logo.svg';
import './headerStyle.css';
import { BrowserRouter as Link } from "react-router-dom";
import { Menu } from 'semantic-ui-react';

const Logo = () => {
    return (
        <div className='logo'>
            <Menu.Menu >
                <Menu.Item as={Link} to='/' >
                    <img src={logo} alt='logo' style={{ width: '40%' }} />
                </Menu.Item>
            </Menu.Menu>
        </div>
    )
}
export default Logo;