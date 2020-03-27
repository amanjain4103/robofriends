import React from 'react';
import './SearchBox.css';

const SearchBox = ({SearchChange})=>{
    return(
        <div>
            <input 
            className="search"
            type="search"
            placeholder="search robots"
            onChange={SearchChange}
            ></input>
        </div>
    )
}

export default SearchBox;