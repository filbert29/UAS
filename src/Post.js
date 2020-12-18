import React, {Component, Fragment} from 'react';
import axios from 'axios';
import Templatepost from './Templatepost';
import APP_ID from './key';
import './Post.css';
import { Grid } from '@material-ui/core';

const BASE_URL = 'https://dummyapi.io/data/api';

class App extends Component {
    state = {
        data: []
    }

    componentDidMount(){
        axios.get(`${BASE_URL}/post`, { headers: { 'app-id': APP_ID } })
            .then(result => {
                this.setState({ 
                    data: result.data.data
                })
                console.log(this.state.data)
            })
            .catch(console.error)
    }

    render(){
        return(
            <Fragment>
                <div className="all">
                    <Grid container direction="row" justify="center" alignItems="center">
                    <div className="post">
                    {
                        this.state.data.map(data => {
                            return <Templatepost
                                key={data.id} 
                                id={data.owner.id} 
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

export default App;
