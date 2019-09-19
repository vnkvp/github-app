'use strict'

import React from 'react'
import Search from './search'
import PropTypes from 'prop-types'

const NavBar = ({ handleSearch }) => (
    <div className="navbar">
        <img src="/dist/images/github.png" className="logo"></img>
        <Search handleSearch={handleSearch}/>
        <div>
            <a href="#" className="links">Home</a>
            <a href="#" className="links">About</a>
        </div>
    </div>
)

NavBar.propTypes = {
    handleSearch: PropTypes.function
}

export default NavBar