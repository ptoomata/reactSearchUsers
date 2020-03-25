import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div>
            <input 
                placeholder='Search Robots' 
                className='bg-light-blue pa3'
                onChange={ searchChange } >
            </input>
        </div>
    );
}

export default SearchBox;