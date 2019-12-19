import React, { Component } from 'react'
import Log from './ConsoleLog'

class TemChild extends Component {
    render () {
        return [
            <input key='input' ref={ref => this.cbRef = ref} defaultValue='我是类组件例子' />,
            <p key='p' ref={ref => this.box = ref}>我是元素盒子，请测量我的高度</p>
        ]
    }
}

export default class RefCbClass extends Component {
    state = { logs: [] }

    show = _ => {
        const height = this.temClass.box.getBoundingClientRect().height
        console.log('get child size', height)
        this.temClass.cbRef.focus()
        this.setState({ logs: [`get child size: ${ height }`] })
    }

    render() {
        return [
            <TemChild key='TemClass' ref={temClass => this.temClass = temClass}  />,
            <button key='btn'onClick={_ => this.show()}>click me</button>,
            <Log key='log' logs={this.state.logs} />
        ]
    }
}

const RefCbClassCoding = `
class TemChild extends Component {
    render () {
        return [
            <input key='input' ref={ref => this.cbRef = ref} defaultValue='我是类组件例子' />,
            <p key='p' ref={ref => this.box = ref}>我是元素盒子，请测量我的高度</p>
        ]
    }
}

export default class RefCb extends Component {
    state = { logs: [] }

    show = _ => {
        const height = this.temClass.box.getBoundingClientRect().height
        console.log('get child size', height)
        this.temClass.cbRef.focus()
    }

    render() {
        return [
            <TemChild key='TemClass' ref={temClass => this.temClass = temClass}  />,
            <button key='btn'onClick={_ => this.show()}>click me</button>,
        ]
    }
}
`

export { RefCbClassCoding }
