'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const UserInfo = ({ userinfo }) => (
    <div className="user-info">
        <img src={userinfo.photo} />
        <h1 className="username">
            <a href={`https://github.com/${userinfo.login}`}>
                {userinfo.username}
            </a>
        </h1>
        <p>{userinfo.lastUpdated}</p>
        <p>{userinfo.location}</p>
        <ul className="repo-info">
            <li>Repositories: {userinfo.repos}</li>
            <li>Following: {userinfo.following}</li>
            <li>Followers: {userinfo.followers}</li>
        </ul>
    </div>
)

UserInfo.propTypes = {
    userinfo: PropTypes.shape({
        username: PropTypes.string,
        photo: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
        lastUpdated: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        repos: PropTypes.number.isRequired,
        followers: PropTypes.number.isRequired,
        following: PropTypes.number.isRequired
    })
}

export default UserInfo