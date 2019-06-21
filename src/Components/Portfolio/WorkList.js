import React from 'react';
import Work from '../Home/RecentWorks/Work';
// import { recentWorks } from '../../../data';
import { connect } from 'react-redux';
import * as action from '../../StateManagement/Actions/actions';
import * as helperFunction from '../../helper'


class WorkList extends React.Component {
    componentDidMount() {
        this.props.getWorkData()
    }

    render() {
        if (this.props.loading) {
            return (
                <div style={{ width: '1280px', height: '100vh' }}>
                    {helperFunction.LoaderExampleLoader()}
                </div>
            )
        }
        return (
            <div>

                {
                    this.props.worksData.map((work,i) => 
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
export default connect(mapStateToProps, mapDispatchToState)(WorkList);