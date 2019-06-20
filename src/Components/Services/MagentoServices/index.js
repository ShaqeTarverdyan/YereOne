import React from 'react';
import MagentoServices from './MagentoServices';
import { Container } from 'semantic-ui-react';
import * as title from '../../Titles/Titles';

const MagentoServicesComponent = () => {
    return ( 
        <div className='MagentoServicesDiv'>
            {title.MagentoService()}
            <Container style={{textAlign:'center'}}>
                 <p>We provide high-quality Magento services.<br />
                 We have huge experience in both Magento 1 and Magento 2.</p>
            </Container>
            <Container>
                <MagentoServices />
            </Container>
        </div>
    );
}
export default MagentoServicesComponent;