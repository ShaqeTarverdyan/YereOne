import React from 'react';
import './FooterStyle.css';
import { FooterAbout } from '../../data';
import { Grid, Image } from 'semantic-ui-react'

const AboutYereone = () => {
    return (
        <div className=''>
            <h4>About Yereone</h4>
            <Grid>
                <Grid.Row columns={2}>
                <Grid.Column floated='left' width={4} >
                        <div>
                            <Image src={FooterAbout.image} alt='Yereone' style={{ width: '100%' }} />
                        </div>
                    </Grid.Column>

                    <Grid.Column floated='right' width={12}>
                        <div>
                            <p>{FooterAbout.content}</p>
                        </div>
                    </Grid.Column>
                </Grid.Row>
               
        

            </Grid>

        </div>
    )
}
export default AboutYereone;