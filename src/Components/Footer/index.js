import React from 'react';
import './FooterStyle.css';
import AboutYereone from './Aboutyereone';
import FooterContacts from './FooterContacts';
import WeAreCertified from './WeAreCertified';
import { Grid, Segment } from 'semantic-ui-react'

const Footer = () => {
    return (
        <div>
            <hr />
            <div className='FooterDiv'>
                <Grid>
                    <Grid.Row columns={3}>
                        <Grid.Column >
                            <AboutYereone />
                        </Grid.Column>
                        <Grid.Column >
                            <FooterContacts />
                        </Grid.Column>
                        <Grid.Column >
                            <WeAreCertified />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={1}>
                        <Grid.Column>
                            <Segment
                                style={{
                                    textAlign: 'center',
                                    backgroundColor: '#ececec'
                                }}
                            >
                                <p>Copyright  2015-2019 Yereone LLC</p>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </div>
    );
}
export default Footer;