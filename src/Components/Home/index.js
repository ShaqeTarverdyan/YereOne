import React from 'react';
import Banner from './Banner/index';
import MainServices from '../Services/MainServices/index';
import RecentWorks from './RecentWorks/index';
import WhyChooseYereone from './WhyChooseYereone/index';
import Testimonials from './Testimonials/index';
import { connect } from 'react-redux';
import * as action from '../../StateManagement/Actions/actions';
import * as helperFunction from '../../helper';

import store from '../../StateManagement/Store/store';


class Home extends React.Component {
    componentDidMount() {
        console.log('component',store.getState())
        
    }
    render() {
        if (this.props.loading) {
            return (
                <div style={{ width: '1280px', height: '100vh' }}>
                    {helperFunction.LoaderExampleLoader()}
                </div>
            )
        }
        const bannerData = store.getState().reducerBanner.bannerData;
        console.log('bannerData', bannerData)
       // console.log('render',store.getState().reducerBanner)
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
}
const mapStateToProps = state => {
    console.log('state',state)
    return {
        //loading:state.reducerBanner.loading,
        bannerData:state.reducerBanner.bannerData,
        worksData:state.reducerWorks.worksData,
        servicesData:state.reducerService.servicesData
    }
}
const mapDispatchToState = dispatch => {
    return {
        getBannerData:() => dispatch(action.getBannerData()),
        getServiceData:() => dispatch(action.getServiceData())
    }
}
export default connect(mapStateToProps,mapDispatchToState)(Home);