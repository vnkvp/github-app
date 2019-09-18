'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const Starred = ({ className, title, starred }) => (
    <div className={className}>
        <h4>{title}</h4>
        <ul>
        {starred.map((star, index) => (
                <li key={index}>
                    <a href={star.link}>
                        {star.name}
                    </a>
                </li>
            ))}
        </ul>
    </div>
)

Starred.defaultProps = {
    className: ''
}

Starred.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    starred: PropTypes.array
}

export default Starred