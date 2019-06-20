import React from 'react';
import WordPressService from './WordPressService';
import './WordPressServiceStyle.css';
import { wordpressServices } from '../../../data';


const WordPressServices = () => {
    return (
        <>
            {
                wordpressServices.map((service, i) =>
                    <WordPressService  service={service} key={i}/>
                )
            }

        </>
    );
}

export default WordPressServices