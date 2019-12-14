// 对比  useRef 和 createRef 的不同

import React, { useRef, useEffect, useState, createRef } from 'react'

export default () => {
    const [time, setTime] = useState(new Date())
    const inputUseRef = useRef()
    const inputCreateRef = createRef()

    useEffect(() => {
        console.log(inputUseRef.current.value, '9')
    }, [inputUseRef])

    useEffect(() => {
        console.log(inputCreateRef.current.value, '13')
    }, [inputCreateRef])

    useEffect(() => {
        console.log(inputUseRef.current.value, '17')
        console.log(inputCreateRef.current.value, '18')
    })

    return [
        <input key='inputUseRef' value={time} ref={inputUseRef} />,
        <input key='inputCreateRef' value={time} ref={inputCreateRef} />,
        <button key='button' onClick={_ => setTime(new Date())}>change  input value</button>
    ]
}