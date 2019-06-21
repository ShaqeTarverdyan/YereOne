import React from 'react';
import Banner from './Banner/index';
import MainServices from '../Services/MainServices/index';
import RecentWorks from './RecentWorks/index';
import WhyChooseYereone from './WhyChooseYereone/index';
import Testimonials from './Testimonials/index';
import { connect } from 'react-redux';
import * as action from '../../StateManagement/Actions/actions';
import * as helperFunction from '../../helper';



class Home extends React.Component {
    render() {
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
    return {
       

    }
}
const mapDispatchToState = dispatch => {
    return {
        
    }
}
export default connect(mapStateToProps,mapDispatchToState)(Home);