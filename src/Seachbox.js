import React from 'react';
import './Searchbox.css'

const SearchBox = (props) =>{
    return(
        <input type='search'
        className='search'
        placeholder={props.placeholder}
        onChange = {props.handleChange}
        />
    )
}

export default SearchBox;