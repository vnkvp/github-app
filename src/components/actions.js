'use strict'

import React from 'react'

const Actions = ({ seeRepo, seeStar }) => (
    <div>
        <button className="actions" onClick={seeRepo}>See Repositories</button>
        <button className="actions" onClick={seeStar}>See Favorites</button>
    </div>
)

export default Actions