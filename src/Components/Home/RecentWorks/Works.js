import React from 'react';
import './recentworksStyle.css';
import Work from './Work';
import { connect } from 'react-redux';


class Works extends React.Component {
    workFourHomePage = () => {
        const worksFourHomePage = this.props.worksData.filter(work => work.id < 5);
        return worksFourHomePage
    }
    render() {
        const workFourHomePage = this.workFourHomePage()
        return (
            <div>

                {
                    workFourHomePage.map((work,i) => 
                      <Work work={work} key={i} />
                    )
                }
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        loading: state.reducerWorks.loading,
        worksData: state.reducerWorks.worksData

    }
}
export default connect(mapStateToProps)(Works);