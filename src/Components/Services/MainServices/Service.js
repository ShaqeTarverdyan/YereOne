import React from 'react';
import './serviceStyle.css';
import { Grid, Segment } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Service extends React.Component {
    render() {
        return (
            <Link to={'/' + this.props.service.rooturl}>
                <div className='serviceDiv'>
                    <div >
                        <img src={this.props.service.image} alt='service' style={{ width: '100%' }} />
                    </div>
                    <div >
                        <p>{this.props.service.name}</p>
                    </div>
                </div>
            </Link>

        );
    }
}
export default Service;