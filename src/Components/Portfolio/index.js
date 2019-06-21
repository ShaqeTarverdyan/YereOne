import React from 'react';
import WorkList from './WorkList';

class PortfolioPage extends React.Component {
    render() {
        return (
            <div style={{textAlign:'center', maxWidth:'1280px'}}>
                <hr />
                <h3>Our Portfolio</h3>
                <p>Take a look at our portfolio and see all of the sites we have created.</p>
                <WorkList/>
            </div>
        );
    }
}

export default PortfolioPage;