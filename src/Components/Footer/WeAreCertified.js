import React from 'react';
import './FooterStyle.css';
import { weAreCertified } from '../../data';
import { Grid, Image } from 'semantic-ui-react'

const WeAreCertified = () => {
    return (
        <div className=''>
            <h4>We Are Certified</h4>
            <Grid>
                <Grid.Row columns={2}>
                    <Grid.Column floated='left' width={4} >
                        <div>
                            <Image src={weAreCertified.image} alt='Yereone' style={{ width: '100%' }} />
                        </div>
                    </Grid.Column>

                    <Grid.Column floated='right' width={12}>
                        <div>
                            <p>{weAreCertified.content}</p>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
export default WeAreCertified;