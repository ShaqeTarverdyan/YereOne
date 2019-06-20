import React from 'react';
// import { connect } from 'react-redux';
// import * as action from '../../../StateManagement/Actions/actions';
import { Loader, Dimmer, Segment, Image } from 'semantic-ui-react'

export const LoaderExampleLoader = () => (
    <Segment>
        <Dimmer active>
            <Loader />
        </Dimmer>
        <Image src='/images/wireframe/short-paragraph.png' />
    </Segment>
)