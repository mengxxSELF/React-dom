import React, { createRef, useEffect } from 'react'


class Temp extends React.Component {
    focusInput = () => {
        console.log('focusInput', 5)
    }
    render() {
        return <input key='input' />
    }
}

export default () => {
    const inputRef = createRef()

    useEffect(() => {
        console.log(inputRef.current, 'inputRef.current')
        // inputRef.current 接受的是Temp组件实例
        inputRef.current.focusInput()
    }, [inputRef])

    const show = _ => {
        const value = inputRef.current.value
        console.log('value', value)
    }

    return [
        <Temp key='input' ref={inputRef} />,
        <button key='button' onClick={_ => show()}>show  input value</button>
    ]
}