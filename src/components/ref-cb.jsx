import React, { Component } from 'react'
import Log from './ConsoleLog'

export default class RefCb extends Component {
    state = { logs: [] }

    componentDidMount() {
        const target = this.input
        console.log('RefCb', 8, target)
        target.focus()
    }

    show = _ => {
        console.log('default', this.input.value)
        this.setState({ logs: [`default: ${ this.input.value }`] })
    }

    render() {
        return [
            <input key='input' ref={ref => this.input = ref} />,
            <button key='btn'onClick={_ => this.show()}>show value</button>,
            <Log key='log' logs={this.state.logs} />
        ]
    }
}


const RefCbCoding = `
class RefCb extends Component {
    componentDidMount() {
        const target = this.input
        console.log('RefCb', 8, target)
        target.focus()
    }

    show = _ => {
        console.log('default', this.input.value)
    }

    render() {
        return [
            <input key='input' ref={ref => this.input = ref} />,
            <button key='btn' onClick={_ => this.show()}>show value</button>,
        ]
    }
}
`

export { RefCbCoding }