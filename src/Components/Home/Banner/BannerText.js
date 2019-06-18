import React from 'react';
import './bannerStyle.css';
import magentoLogo from './Images/magentoLogo.png';
import { bannerData } from '../../../data'

class BannerText extends React.Component {
    render() {
        return (
            <div className='bannertextDiv'>
                <h1> { bannerData.title } </h1>
                <p> { bannerData.content } </p>
                <img src={magentoLogo} alt='magentoCertified' />
                 <br/>
                <button>See more about us</button>
            </div>
        );
    }
}

export default BannerText;