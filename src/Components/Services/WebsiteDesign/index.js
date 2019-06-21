import React from 'react';
import axios from 'axios';
import { Grid } from 'semantic-ui-react'


class WebsiteDesign extends React.Component {
    state = {
        loading: false,
        webDesignData: {}
    }
    componentDidMount() {
        axios.get('https://api.myjson.com/bins/yd7wh')
            .then(res => this.setState({ webDesignData: res.data.websiteDesign }))
    }
    render() {
        console.log(this.state)
        const { webDesignData } = this.state
        return (
            <div style={{ textAlign: 'left', maxWidth: '1280px', minWidth: '320px' }}>
                <h4> Why you need an awesome web site?</h4>
                <Grid columns={2}>

                    <Grid.Row>
                        <Grid.Column>
                            <p> {webDesignData.content1} </p>
                            <p> {webDesignData.content2} </p>
                            <p> {webDesignData.content3} </p>
                            <p>
                                
                            </p>
                        </Grid.Column>
                        <Grid.Column>
                            <img src={webDesignData.image2} alt='yereone' />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}
export default WebsiteDesign;

