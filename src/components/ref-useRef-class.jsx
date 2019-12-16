import React, { Component, useRef, createRef } from 'react'

export default class Userrefclass extends Component {
    constructor (props) {
        super(props)
        // this.inputRef = createRef()
        this.inputRef = useRef()
    }
    componentDidMount () {
        this.inputRef.current.focus()
    }
    render () {
        return [
            <input key='input' ref={this.inputRef} />
        ]
    }
}

const UserrefclassCoding = `
export default class Userrefclass extends Component {
    constructor (props) {
        super(props)
        this.inputRef = useRef()
    }
    componentDidMount () {
        this.inputRef.current.focus()
    }
    render () {
        return [
            <input key='input' ref={this.inputRef} />
        ]
    }
}
`

export { UserrefclassCoding }