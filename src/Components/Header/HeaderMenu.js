import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './headerStyle.css';
import { Menu } from 'semantic-ui-react';
import './headerStyle.css'


const HeaderMenu = () => {
    return (
            <Menu.Menu position='left'  >
                 <Menu.Item  as={Link}  to='/service' style={ MenuItemStyle }> Services </Menu.Item> 
                 <Menu.Item as={Link} to='/portfolio' style={ MenuItemStyle } > Portfolio </Menu.Item> 
                 <Menu.Item as={Link} to='/about'  style={ MenuItemStyle }> About </Menu.Item>
                <Menu.Item as={Link} to='/contacts' style={ MenuItemStyle } > Contacts </Menu.Item> 
           </Menu.Menu>
    


    )
}
const MenuItemStyle = {
    color:'grey',
    fontWeight: '600',
    fontFamily: "'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif",
}
export default HeaderMenu;