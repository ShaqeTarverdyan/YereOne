import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Container } from 'semantic-ui-react';


export const MainService = () => {
    return (
        <Container className='headerStyle'>
            <Link to='/service' style={{ color: 'black' }}>Main Services</Link>
        </Container>
    );
}

export const MagentoService = () => {
    return (
        <Container className='headerStyle'>
            <p>Magento Services</p>
        </Container>
    );
}
export const WordpressService = () => {
    return (
        <Container className='headerStyle'>
            <p>WordPress Services</p>
        </Container>
    );
}

export const RecentWorks = () => {
    return (
        <Container className='headerStyle'>
            <Link to='/portfolio'>Recent Works</Link>
        </Container>
    );
}