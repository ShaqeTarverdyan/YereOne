import React from 'react';
import './recentworksStyle.css';
import Work from './Work';
import { recentWorks } from '../../../data';
import { connect } from 'react-redux';
import * as action from '../../../StateManagement/Actions/actions';
import * as helperFunction from '../../../helper';
class Works extends React.Component {
    componentDidMount() {
        this.props.getWorkData()
    }
    workFourHomePage = () => {
        const worksFourHomePage = this.props.worksData.filter(work => work.id < 5);
        return worksFourHomePage
    }
    render() {
     
        if (this.props.loading) {
            return (
                <div style={{ width: '1280px', height: '100vh' }}>
                    {helperFunction.LoaderExampleLoader()}
                </div>
            )
        }
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
const mapDispatchToState = dispatch => {
    return {
        getWorkData: () => dispatch(action.getWorkData())
    }
}
export default connect(mapStateToProps, mapDispatchToState)(Works);