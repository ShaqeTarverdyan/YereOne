import React from 'react';
import WordPressServices from './WordPressServices';
import { Container } from 'semantic-ui-react';
import * as title from '../../Titles/Titles';


const WordPressServicesComponent = () => {
    return (
        <div className='WordpressServicesDiv'>
                {title.WordpressService()}
            <Container style={{textAlign:'center'}}>
                 <p>Our professionals will provide high-quality WordPress services.</p>
            </Container>
           
            <WordPressServices />
        </div>
    )
}

export default WordPressServicesComponent;