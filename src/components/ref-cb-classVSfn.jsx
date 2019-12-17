import React, { Component } from 'react'
import Log from './ConsoleLog'
class TemClass extends Component {
    render () {
        return <p>我是类组件例子</p>
    }
}

function TemFn () {
  return <p>我是函数组件例子</p>
}

export default class RefCb extends Component {
    state = { logs: [] }

    show = _ => {
        console.log('TemFn', this.temFn)
        console.log('TemClass', this.temClass)
        const logs = [
            `TemFn: ${this.temFn}`,
            `TemClass: ${this.temClass}`,
        ]
        this.setState({ logs })
    }

    render() {
        return [
            <TemFn key='tem' ref={temFn => this.temFn = temFn}  />,
            <TemClass key='TemClass' ref={temClass => this.temClass = temClass}  />,
            <button key='btn'onClick={_ => this.show()}>click me</button>,
            <Log key='log' logs={this.state.logs} />
        ]
    }
}

const RefCbClassVsfnCoding = `
class TemClass extends Component {
    render () {
        return <p>我是类组件例子</p>
    }
}

function TemFn () {
  return <p>我是函数组件例子</p>
}

export default class RefCb extends Component {
    show = _ => {
        console.log('TemFn', this.temFn)
        console.log('TemClass', this.temClass)
    }

    render() {
        return [
            <TemFn key='tem' ref={temFn => this.temFn = temFn}  />,
            <TemClass key='TemClass' ref={temClass => this.temClass = temClass}  />,
            <button key='btn' onClick={_ => this.show()}>click me</button>,
        ]
    }
}
`

export { RefCbClassVsfnCoding }
