import React, {Component, Fragment} from 'react';
import './Userlist.css';
import Templateuser from './Templateuser';
import axios from 'axios';
import APP_ID from './key';
import Searchbox from './Seachbox';

const BASE_URL = 'https://dummyapi.io/data/api';


class Userlist extends Component {
    state = {
        data: [],
        searchField: ''
    }

    componentDidMount(){
        axios.get(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } })
            .then(result => {
                this.setState({ 
                    data: result.data.data
                })
                console.log(this.state.data)
            })
            .catch(console.error)
    }

    render(){
        const {data,searchField} = this.state
        const filteredfirstName = data.filter(firstName => (
            firstName.firstName.toLowerCase().includes(searchField.toLowerCase())
        ))
        
        console.log(filteredfirstName)

        return(
            <Fragment>
                <div className="all">
                    
                    <Searchbox placeholder="Search..." handleChange={(e) => this.setState({searchField:e.target.value})}/>
                    <div className="data">
                        {filteredfirstName.length === 0? "Data Not Found": 
                            filteredfirstName.map(data => {
                                return <Templateuser 
                                key={data.id} 
                                id={data.id} 
                                picture={data.picture} 
                                fullName={data.firstName+" "+data.lastName} 
                                email={data.email} />
                            })
                        }   
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Userlist;