import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

const MagentoService = (props) => {
    return (
        <Link to={'/' + props.service.url}>
            <div className='MagentoServiceDiv'>
                <div>
                    <img src={props.service.image} alt='service' />
                </div>
                <div>
                    <p>{props.service.name}</p>
                </div>
            </div>  
        </Link>

    )
}

export default MagentoService