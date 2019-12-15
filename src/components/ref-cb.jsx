import React, { Component } from 'react'

export default class RefCb extends Component {
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
            <button key='btn'onClick={_ => this.show()}>show value</button>
        ]
    }
}
