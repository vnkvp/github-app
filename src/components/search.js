'use strict'

import React from 'react'

const Search = ({ handleSearch }) => (
    <div className="search">
        <input type="search"
            placeholder="Search for a GitHub user"
            className="search-bar"
            onKeyUp={handleSearch}
        />
    </div>
)

export default Search