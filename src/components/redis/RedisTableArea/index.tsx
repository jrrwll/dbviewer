import {useEffect, useState} from 'react'
import {invoke} from '@tauri-apps/api'
import {Button} from '@blueprintjs/core'

export default function () {
    const [name, setName] = useState('first')

    useEffect(() => {
        invoke('greet', { name: 'World' })
        // `invoke` returns a Promise
        .then((response) => {
            console.log(response)
            setName(response as string)
        })
    })

    return <div>
        <Button text={name}/>
    </div>
}
