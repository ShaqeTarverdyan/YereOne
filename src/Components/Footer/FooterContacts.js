import React from 'react';
import './FooterStyle.css';
import { ContactsFooter } from '../../data';
import { Grid, Icon, Container } from 'semantic-ui-react'

const FooterContacts = () => {
    return (
        <div className=''>
            <h4>Contacts</h4>
            <Grid>
                {
                    ContactsFooter.map((contact,i) =>
                        <Grid.Row columns={1} key={i}>
                            <Grid.Column width={2} >
                                <Icon name={contact.icon} style={{color:'#03acc1'}} size='large'/>
                            </Grid.Column>
                            <Grid.Column width={13}>
                                <p>{contact.contact}</p>
                            </Grid.Column>
                        </Grid.Row>
                    )
                }
            </Grid>
        </div>
    )
}
export default FooterContacts;