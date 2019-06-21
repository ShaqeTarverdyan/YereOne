import React from 'react';
import axios from 'axios';
import { Grid } from 'semantic-ui-react'


class OnlineStore extends React.Component {
    state = {
        loading: false,
        onlineStoreData: {}
    }
    componentDidMount() {
        axios.get('https://api.myjson.com/bins/dvvx5')
            .then(res => this.setState({ onlineStoreData: res.data.onlineStore }))
    }
    render() {
        const { onlineStoreData } = this.state
        return (
            <div style={{textAlign:'left', maxWidth:'1280px', minWidth:'350px'}}>
                <h4> OnlineStore</h4>
                <Grid columns={2}>
                   
                            <Grid.Row>
                                <Grid.Column>
                                    <h4> {onlineStoreData.content1} </h4>
                                    <p> {onlineStoreData.content2} </p>
                                </Grid.Column>
                                <Grid.Column>
                                    <img  src={onlineStoreData.image2} alt='yereone'/>
                                </Grid.Column>
                            </Grid.Row>å
                </Grid>
            </div>
        );
    }
}
export default OnlineStore;

