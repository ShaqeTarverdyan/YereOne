import React from 'react';
import './recentworksStyle.css';

class Work extends React.Component {
    render() {
        return (
             <div className='workDiv'>
                 <img  src={this.props.work.image} alt='work' style={{width:'100%'}}/>
             </div>
        );
    }
}

export default  Work;