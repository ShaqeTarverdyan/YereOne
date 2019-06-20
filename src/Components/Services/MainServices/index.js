import React from 'react';
import './serviceStyle.css';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Services from './Services';
import { Container } from 'semantic-ui-react';
import * as title from '../../Titles/Titles';
import { connect } from 'react-redux';
import * as action from '../../../StateManagement/Actions/actions';

class MainServices extends React.Component {
 
    render() {
        return (
            <div className='servicesStyle'>
                {title.MainService()}
                <Container style={{ textAlign: 'center' }}>
                    <p>Yereone provides a wide variety of eCommerce services and traditional web related solutions.<br />
                        With a highly experienced team that has worked on sites of all sizes – from newly formed start-ups through to<br />
                        established sites with sales in excess of £100m – we’re able to offer eCommerce services to a vast range of clients.
                    </p>
                </Container>
                <Container>
                    <Services  />
                </Container>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        bannerData: state.bannerData,
        servicesData:state.servicesData
    }
}
const mapDispatchToState = dispatch => {
    return {
        getBannerData: () => dispatch(action.getBannerData()),
        getServiceData:() => dispatch(action.getServiceData())
    }
}
export default connect(mapStateToProps, mapDispatchToState)(MainServices);

