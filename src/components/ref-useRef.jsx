import React, { useRef, useEffect, useState } from 'react'

export default () => {
    const [time, setTime] = useState(new Date())
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return [
        <input key='input' value={time} ref={inputRef} />,
        <button key='button' onClick={_ => setTime(new Date())}>change  input value</button>
    ]
}

const RefUseRefCoding = `
export default () => {
    const [time, setTime] = useState(new Date())
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return [
        <input key='input' value={time} ref={inputRef} />,
        <button key='button' onClick={_ => setTime(new Date())}>change  input value</button>
    ]
}
`

export { RefUseRefCoding }