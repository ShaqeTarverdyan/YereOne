import React from 'react';
import Banner from './Banner/index';
import MainServices from '../Services/index';
import RecentWorks from './RecentWorks/index';
import WhyChooseYereone from './WhyChooseYereone/index';
import Testimonials from './Testimonials/index';
import { connect } from 'react-redux';
import * as action from '../../StateManagement/Actions/actions';
import * as helperFunction from '../../helper';



class Home extends React.Component {
    componentDidMount() {
        this.props.getDataForHomePage()
    }
    render() {
        // if (this.props.loading) {
        //     return (
        //         <div style={{ width: '1280px', height: '100vh' }}>
        //             {helperFunction.LoaderExampleLoader()}
        //         </div>
        //     )
        // }
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
    console.log('state', state)
    return {
        bannerData: state.reducerHomePage.bannerData,
        loading: state.reducerHomePage.loading,
        error: state.reducerHomePage.error,
        servicesData: state.reducerHomePage.servicesData,

    }
}
const mapDispatchToState = dispatch => {
    return {
        getDataForHomePage: () => dispatch(action.getDataForHomePage())
    }
}
export default connect(mapStateToProps,mapDispatchToState)(Home);