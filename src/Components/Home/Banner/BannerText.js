import React from 'react';
import './bannerStyle.css';
import magentoLogo from './Images/magentoLogo.png';
import { connect } from 'react-redux';
import * as action from '../../../StateManagement/Actions/actions';
import * as helperFunction from '../../../helper';

class BannerText extends React.Component {
    // componentDidMount() {
    //         this.props.getBannerData();
    // }


    render() {
        if (this.props.loading) {
            return (
                <div style={{ width: '1280px', height: '100vh' }}>
                    {helperFunction.LoaderExampleLoader()}
                </div>
            )
        }
        return (
            <div className='bannertextDiv'>
                <h1> {this.props.bannerData.title} </h1>
                <p> {this.props.bannerData.content} </p>
                <img src={magentoLogo} alt='magentoCertified' />
                <br />
                <button>See more about us</button>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        bannerData: state.reducerBanner.bannerData,
        loading: state.reducerBanner.loading
    }
}
const mapDispatchToState = dispatch => {
    return {
        getBannerData: () => dispatch(action.getBannerData())
    }
}
export default connect(mapStateToProps, mapDispatchToState)(BannerText);