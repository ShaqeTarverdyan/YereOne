import React from 'react';
import { Container } from 'semantic-ui-react';
import Banner from './Banner/index';
import MainServices from './Services/index';

const Home = () => {
    return (
        <Container>
            <Banner/>
            <MainServices/>
        </Container>
    );
}
export default Home;