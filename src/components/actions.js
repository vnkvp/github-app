'use strict'

import React from 'react'

const Actions = ({ seeRepo, seeStar }) => (
    <div className="actions">
        <button onClick={seeRepo}>See Repositories</button>
        <button onClick={seeStar}>See Favorites</button>
    </div>
)

export default Actions