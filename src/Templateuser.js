import React from 'react';
import {Link} from 'react-router-dom'
import './Templateuser.css'

const Templateuser = (props) => {
    console.log(props)
    return (
    <div className="profile-card">
        <div className="img-profile">
            <img src={props.picture}/>
        </div>
            <div className="isi">
                <Link to={`/Userlist/${props.id}`}>
                    <p className="fullName">{props.fullName}</p>
                    <p className="email">{props.email}</p>
                </Link>
            </div>
    </div>
    )
}

export default Templateuser;