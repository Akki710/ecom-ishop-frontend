import React from 'react';
// Import scss
import "./SearchBox.scss";

const SearchBox = () => {
    return (
        <div className="search-box">
            <input className="search-type" type="text" name="search" />
        </div>
    );
};

export default SearchBox;
