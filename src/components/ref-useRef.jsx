import React, { useRef, useEffect, useState } from 'react'

export default () => {
    const [time, setTime] = useState(new Date())
    const inputRef = useRef()

    useEffect(() => {
        console.log(inputRef.current.value, '8')
    }, [inputRef])

    useEffect(() => {
        console.log(inputRef.current.value, '12')
    })

    return [
        <input key='input' value={time} ref={inputRef} />,
        <button key='button' onClick={_ => setTime(new Date())}>change  input value</button>
    ]
}