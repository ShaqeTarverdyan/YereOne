import React from 'react';
import Content from './Content';
import { WhyChooseYereoneData } from '../../../data';
import './contentStyle.css';


const Contents = (props) => {
    return (
        <div className='contents'>
            {
                WhyChooseYereoneData.map((content,i) =>
                    <Content content={content} key={i}/>
                )
            }

        </div>
    );
}
export default Contents;