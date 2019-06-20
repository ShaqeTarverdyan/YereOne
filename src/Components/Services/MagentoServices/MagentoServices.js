import React from 'react';
import MagentoService from './MagentoService';
import './MagentoServicesStyle.css';

import { magentoServices } from '../../../data';

const MagentoServices = () => {
    return (
        < >
            {
                magentoServices.map((service, i) =>
                    <MagentoService service={service} key={i}/>
                )
            }
           
        </>
    )
}

export default MagentoServices