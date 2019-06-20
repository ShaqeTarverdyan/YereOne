import React from 'react';
import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';
import './headerStyle.css';


const Header = ({ children}) => {
    return (
        <>
            <DesktopContainer> { children }</DesktopContainer>
            <MobileContainer>{ children }</MobileContainer>
        </>
    );
}
export default Header;