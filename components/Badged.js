import React from 'react'
import { Badge } from '@geist-ui/core'

const config = require('../config.json')

const Badged = ({ c }) => {
    return (
        <Badge>
            <b>{c}</b>
        </Badge>
    )
}

export default Badged
