import React from 'react';
import MainServices from './MainServices/index';
import MagentoServices from './MagentoServices/index';
import WordPressServicesComponent from '../Services/WordPressServices/index';
import './servicesPagestyle.css';


const ServicePage = () => {
    return (
     <div className='ServicePageDiv'>
         <MainServices/>
         <MagentoServices />
         <WordPressServicesComponent />
    </div>

    );
}

export default ServicePage;