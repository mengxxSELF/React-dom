import React, { createRef, useState } from 'react'
import Log from './ConsoleLog'

function TemFn () {
    return <input defaultValue='我是函数组件例子' />
}

class TemClass extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    focusInput = () => {
        this.myRef.current.focus()
    }
    render() {
        return <input ref={this.myRef} defaultValue='我是类组件例子' />
    }
}

export default () => {
    const [logs, setLogs] = useState([])

    const funcRef = createRef()
    const classRef = createRef()

    const show = _ => {
        console.log('funcRef.current', funcRef.current)
        console.log('classRef.current', classRef.current)
        setLogs([`funcRef.current: ${funcRef.current}`, `classRef.current: ${classRef.current}`])

        classRef.current.focusInput()
    }

    return [
        <TemFn key='input' ref={funcRef} />,
        <TemClass key='TemClass' ref={classRef}  />,
        <button key='button' onClick={_ => show()}>show  input value</button>,
        <Log key='log' logs={logs} />
    ]
}

const RefcreateRefFuncVSclassCoding = `
function TemFn () {
    return <input defaultValue='我是函数组件例子' />
}

class TemClass extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    focusInput = () => {
        this.myRef.current.focus()
    }
    render() {
        return <input ref={this.myRef} defaultValue='我是类组件例子' />
    }
}

export default () => {
    const funcRef = createRef()
    const classRef = createRef()

    const show = _ => {
        console.log('funcRef.current', funcRef.current)
        console.log('classRef.current', classRef.current)
        classRef.current.focusInput()
    }

    return [
        <TemFn key='input' ref={funcRef} />,
        <TemClass key='TemClass' ref={classRef}  />,
        <button key='button' onClick={_ => show()}>show  input value</button>
    ]
}
`

export { RefcreateRefFuncVSclassCoding }