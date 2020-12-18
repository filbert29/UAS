import React, {useState, useEffect, Fragment, Component} from 'react'
import { Grid } from '@material-ui/core';
import Templatepost from './Templatepost';
import axios from 'axios';
import APP_ID from './key';

class Fulltags extends Component {
    state = {
        data: [],
        id: this.props.match.params.name
    };
    handleData = (X) => {
        axios
            .get(`https://dummyapi.io/data/api/tag/${X}/post`, { headers: { "app-id": APP_ID } })
            .then((res) => {
                this.setState({ data: res.data.data });
            })
            .catch(console.error);
    };

    componentDidMount() {
        this.handleData(this.props.match.params.name);
    }

    render() {
        console.log(this.state.data)
        return(
            <Fragment>
                <div className="all">
                    <Grid container direction="row" justify="center" alignItems="center">
                    <div className="post">
                    {
                        this.state.data.map(data => {
                            return <Templatepost
                                key={data.id} 
                                image={data.image} 
                                picture={data.owner.picture}
                                fullName={data.owner.firstName+" "+data.owner.lastName}
                                email={data.owner.email}
                                text={data.text}
                                likes={data.likes}
                                link={data.link}
                                />
                        })
                    }
                    </div>
                    </Grid>
                </div>
            </Fragment>
        )
    }
}
export default Fulltags;
