import React, { Component } from 'react'

class TemClass extends Component {
    handleClick = _ => {
        console.log(this.cbRef.focus(), 'this.cbRef')
    }
    render () {
        return <input ref={ref => this.cbRef = ref} defaultValue='我是类组件例子' />
    }
}

export default class RefCbClass extends Component {
    state = { logs: [] }

    show = _ => {
        this.temClass.handleClick()
    }

    render() {
        return [
            <TemClass key='TemClass' ref={temClass => this.temClass = temClass}  />,
            <button key='btn'onClick={_ => this.show()}>click me</button>,
        ]
    }
}

const RefCbClassCoding = `
class TemClass extends Component {
    handleClick = _ => {
        console.log(this.cbRef.focus(), 'this.cbRef')
    }
    render () {
        return <input ref={ref => this.cbRef = ref} defaultValue='我是类组件例子' />
    }
}

export default class RefCb extends Component {
    state = { logs: [] }

    show = _ => {
        this.temClass.handleClick()
    }

    render() {
        return [
            <TemClass key='TemClass' ref={temClass => this.temClass = temClass}  />,
            <button key='btn'onClick={_ => this.show()}>click me</button>,
        ]
    }
}
`

export { RefCbClassCoding }
