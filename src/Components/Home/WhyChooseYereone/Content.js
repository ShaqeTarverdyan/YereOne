import React from 'react';
import { Icon } from 'semantic-ui-react';
import './contentStyle.css';


const Content = (props) => {
    return (
        <div className='contentDiv'>
            <div className='iconStyle'><Icon name={props.content.icon} /></div>
            <h4>{props.content.title} </h4>
            <p>{props.content.content}</p>
        </div>
    );
}
export default Content;