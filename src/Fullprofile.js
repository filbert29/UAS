import React, { Fragment, Component} from 'react';
import Templatefullprofile from './Templatefullprofile';
import './Fullprofile.css';
import APP_ID from './key';
import axios from 'axios';
import {Grid} from '@material-ui/core';

class Fullprofile extends Component {
    state = {
        data: [],
        id: this.props.match.params.id,
        location: []
    };
    handleData = (X) => {
        axios
            .get(`https://dummyapi.io/data/api/user/${X}`, { headers: { "app-id": APP_ID } })
            .then((res) => {
                this.setState({ data: res.data });
            })
            .catch(console.error);
    };

    handleDataLocation = (X) => {
        axios
            .get(`https://dummyapi.io/data/api/user/${X}`, { headers: { "app-id": APP_ID } })
            .then((result) => {
                this.setState({ location: result.data.location });
            })
            .catch(console.error);
    };

    componentDidMount() {
        this.handleData(this.props.match.params.id);
        this.handleDataLocation(this.props.match.params.id);
    }

    render() {
        console.log(this.state.location)
        return(
            <Fragment>
               
                    <Grid container direction="row" justify="center" alignItems="center">
                    <div className="post">
                    <Templatefullprofile 
                        key={this.state.data.id} 
                        id={this.state.data.id} 
                        picture={this.state.data.picture} 
                        fullName={this.state.data.title+". "+this.state.data.firstName+" "+this.state.data.lastName} 
                        email={this.state.data.email}
                        gender={this.state.data.gender}
                        dateOfBirth={this.state.data.dateOfBirth}
                        registerDate={this.state.data.registerDate}
                        phone={this.state.data.phone}
                        fullLocation={this.state.location.country+", "+this.state.location.state+", "+this.state.location.city+", "+this.state.location.street}
                        />
                    </div>
                    </Grid>
                
            </Fragment>
        )
    }
}
export default Fullprofile;