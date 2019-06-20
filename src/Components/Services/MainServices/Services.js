import React from 'react';
import './serviceStyle.css';
import { servicesData } from '../../../data';
import Service from './Service';
import { connect } from 'react-redux';
import * as action from '../../../StateManagement/Actions/actions';
import * as helperFunction from '../../../helper';


class Services extends React.Component {
    componentDidMount() {
        if (!this.props.servicesData) {
            this.props.getServiceData()
        }

    }
    render() {
        if (this.props.loading) {
            return (
                <div style={{ width: '1280px', height: '100vh' }}>
                    {helperFunction.LoaderExampleLoader()}
                </div>
            )
        }

        return (
            <>
                {
                    this.props.servicesData.map((service, i) =>
                        <Service service={service} key={i} />
                    )
                }
            </>
        );
    }
}
const mapStateToProps = state => {
    return {
        servicesData: state.reducerService.servicesData,
        loading: state.reducerService.loading
    }
}
const mapDispatchToState = dispatch => {
    return {
        getServiceData: () => dispatch(action.getServiceData())
    }

}
export default connect(mapStateToProps, mapDispatchToState)(Services);