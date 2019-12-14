import React, { createRef, useEffect } from 'react'

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