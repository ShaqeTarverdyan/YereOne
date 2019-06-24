import React from 'react';
import './serviceStyle.css';
import Service from './Service';
import { connect } from 'react-redux';
import * as action from '../../../StateManagement/Actions/actions';
import * as helperFunction from '../../../helper';

import { Link } from 'react-router-dom'
import { Query } from "react-apollo";
import gql from "graphql-tag";


const Services = (props) =>  {

        // if (this.props.loading) {
        //     return (
        //         <div style={{ width: '1280px', height: '100vh' }}>
        //             {helperFunction.LoaderExampleLoader()}
        //         </div>
        //     )
        // }

        return (
            <>
                {
                    props.servicesData.map((service, i) => 
                            < Service service = { service } key = { i } />
                    )
                }
            </>
        );
    }

const mapStateToProps = state => {
    return {
        servicesData: state.reducerService.servicesData,
        loading: state.reducerService.loading
    }
}

export default connect(mapStateToProps)(Services);