import React from 'react';

const Templatefullprofile = (props) => {
    console.log(props)
    return (
        <div className="profile">
            <div className="picture-profile">
                <img src={props.picture}/>
                <div className="id-name">
                    <p className="id">{props.id}</p>
                    <p className="fullName">{props.fullName}</p>
                   
                </div>
            </div>
            <div className="jenis-data">
                <p className="gender">Gender </p>
                <p className="dateOfBirth">Date Of Birth </p>
                <p className="registerDate">Register Date </p>
                <p className="email">Email </p>
                <p className="phone">Phone </p>
            </div>
            <div className="data-profile">
                <p className="gender">:  {props.gender}</p>
                <p className="dateOfBirth">:  {props.dateOfBirth}</p>
                <p className="registerDate">:  {props.registerDate}</p>
                <p className="email">:  {props.email}</p>
                <p className="phone">:  {props.phone}</p>
            </div>
            <div className="location">
                <p>Address</p>
                <p className="fullLocation">{props.fullLocation}</p>
            </div>
        </div>
    )
}

export default Templatefullprofile;