import React from 'react';
import './recentworksStyle.css';

const  Work = (props) =>  {
        return (
             <div className='workDiv'>
                 <img  src={props.work.image} alt='work' style={{width:'100%'}}/>
             </div>
        );
    }
export default  Work;