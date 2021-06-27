import React from 'react';
import './SearchBox.css'


const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2' style={{marginBottom: 20}}>
            <input 
                className="pa3 ba bw1 b--green"
                type="search" 
                placeholder="Search Robots"
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;