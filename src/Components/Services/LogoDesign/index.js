import React from 'react';
import axios from 'axios';
import { Grid } from 'semantic-ui-react'


class logoDesign extends React.Component {
    state = {
        loading: false,
        logoDesign: {}
    }
    componentDidMount() {
        axios.get('https://api.myjson.com/bins/11s175')
            .then(res => this.setState({ logoDesign: res.data.logoDesign }))
    }
    render() {
        console.log(this.state)
        const { logoDesign } = this.state
        return (
            <div style={{ textAlign: 'left', maxWidth: '1280px', minWidth: '350px' }}>
                <Grid columns={1}>
                    <Grid.Row>
                        <Grid.Column>
                            <h4> {logoDesign.title} </h4>
                            <p> {logoDesign.content} </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}
export default logoDesign;

