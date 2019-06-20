import React from 'react';
import './bannerStyle.css';
import BannerText from './BannerText';



class Banner extends React.Component {
    render() {
        return (
            <div className='bannerContent'>
                <BannerText />
            </div>
        );
    }

}
export default Banner;