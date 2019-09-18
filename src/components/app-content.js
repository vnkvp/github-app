'use strict'

import React from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'
import Starred from './starred'
import Loading from './loading'
import PropTypes from 'prop-types'


const AppContent = ({ userinfo, repos, starred, isFetching, handleSearch, seeRepo, seeStar }) => (
    <div className="app">
        <Search handleSearch={handleSearch} />
        {isFetching && <Loading
            type='spin'
            color='#aaa'
        />}
        {!!userinfo && <UserInfo userinfo={userinfo} />}
        {!!userinfo && <Actions
            seeRepo={seeRepo}
            seeStar={seeStar}
        />}
        {!!repos.length && <Repos
            className="repos"
            title="Repositories:"
            repos={repos}
        />}
        {!!starred.length && <Starred
            className="starred"
            title="Favorites:"
            starred={starred}
        />}
    </div>
)

AppContent.propTypes = {
    userinfo: PropTypes.object,
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired
}

export default AppContent