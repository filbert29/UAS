import React, {Component, Fragment} from 'react';
import axios from 'axios';
import Templatetags from './Templatetags';
import APP_ID from './key';

const BASE_URL = 'https://dummyapi.io/data/api';

class Tags extends Component {
    state = {
        data: []
    }

    componentDidMount(){
        axios.get(`${BASE_URL}/tag`, { headers: { 'app-id': APP_ID } })
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
                <p className="title">Tags</p>
                <div className="tags">
                {
                    this.state.data.map(data => {
                        return <Templatetags 
                            tags= {'#'+data}
                            tagsname = {data}
                            />
                    })
                }
                </div>
            </Fragment>
        )
    }
}

export default Tags;
