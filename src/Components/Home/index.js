import React from 'react';
import Banner from './Banner/index';
import MainServices from '../Services/MainServices/index';
import RecentWorks from './RecentWorks/index';
import WhyChooseYereone from './WhyChooseYereone/index';
import Testimonials from './Testimonials/index';


const  Home = () =>  {
        return (
            <>
                <Banner />
                <MainServices  />
                <RecentWorks />
                <WhyChooseYereone />
                <Testimonials />   
            </>
        );
    }

export default Home;