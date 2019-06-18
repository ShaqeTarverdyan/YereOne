import React from 'react';
import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';
import './headerStyle.css';
import { Menu, Container } from 'semantic-ui-react'


const Header = ({ children}) => {
    return (
        <>
            <DesktopContainer> { children }</DesktopContainer>
            <MobileContainer>{ children }</MobileContainer>
        </>
    );
}
export default Header;