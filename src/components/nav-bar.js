'use strict'

import React from 'react'
import Search from './search'
import Actions from './actions'
import PropTypes from 'prop-types'

const NavBar = ({ handleSearch, seeRepo, seeStar}) => (
    <div className="navbar">
        <img src="/dist/images/github.png" className="logo"></img>
        <Search handleSearch={handleSearch} />
        <Actions
            seeRepo={seeRepo}
            seeStar={seeStar}
        />
    </div>
)

NavBar.propTypes = {
    handleSearch: PropTypes.func,
    seeRepo: PropTypes.func,
    seeStar: PropTypes.func
}

export default NavBar