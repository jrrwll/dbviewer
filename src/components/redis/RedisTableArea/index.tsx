import React, { useEffect, useState } from 'react'
import { Button } from '@blueprintjs/core'
import { load_profiles } from '../../../services/profile'

export default function () {
    const [name, setName] = useState('first')

    useEffect(() => {
        load_profiles((profiles) => {
            setName(profiles)
        })
    })

    return (
        <div>
            <Button text={name} />
        </div>
    )
}
