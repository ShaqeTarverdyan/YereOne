import React from 'react';
import './recentworksStyle.css';
import Work from './Work';
import { recentWorks } from '../../../data';

class Works extends React.Component {
    render() {
        return (
            <div>
                {
                    recentWorks.map((work,i) =>
                        <Work work={work} key={i} />
                    )
                }
            </div>
        );
    }
}

export default Works;