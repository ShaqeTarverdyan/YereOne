import React from 'react';
import Work from '../Home/RecentWorks/Work';
import { connect } from 'react-redux';


const WorkList = (props) =>  {
        return (
            <div>

                {
                    props.worksData.map((work,i) => 
                      <Work work={work} key={i} />
                    )
                }
            </div>
        );
    }
const mapStateToProps = state => {
    return {
        worksData: state.reducerWorks.worksData,

    }
}
export default connect(mapStateToProps)(WorkList);