import React from 'react';
import './recentworksStyle.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Works from './Works';
import * as title from '../../Titles/Titles';


class RecentWorks extends React.Component {
    render() {
        return (
            <div className='recentWorksDiv'>
                    {title.RecentWorks()}
                <Works />
                <button>see our portfolio</button>
            </div>
        );
    }
}

export default RecentWorks;