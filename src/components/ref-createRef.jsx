import React, { createRef, useEffect, useState } from 'react'
import Log from './ConsoleLog'

export default () => {
    const [logs, setLogs] = useState([])
    const inputRef = createRef()

    useEffect(() => {
        console.log(inputRef.current, 'inputRef.current')
        inputRef.current.focus()
    }, [inputRef])

    const show = _ => {
        const value = inputRef.current.value
        console.log('value', value)
        setLogs([`value: ${value}`])
    }

    return [
        <input key='input' ref={inputRef} />,
        <button key='button' onClick={_ => show()}>show  input value</button>,
        <Log key='log' logs={logs} />
    ]
}

const RefcreateRefCoding = `
export default () => {
    const inputRef = createRef()

    useEffect(() => {
        console.log(inputRef.current, 'inputRef.current')
        inputRef.current.focus()
    }, [inputRef])

    const show = _ => {
        const value = inputRef.current.value
        console.log('value', value)
    }

    return [
        <input key='input' ref={inputRef} />,
        <button key='button' onClick={_ => show()}>show  input value</button>
    ]
}

`

export { RefcreateRefCoding }