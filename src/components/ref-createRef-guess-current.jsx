import React, { createRef, Component } from 'react'
import Log from './ConsoleLog'

function createRef() {
    var refObject = {
      current: null
    };
  
    {
      Object.seal(refObject);
    }
  
    return refObject;
  }

export default class CreateRef extends Component {
    state = { logs: [] }
    constructor(props){
        super(props)
        this.inputRef = createRef()
    }

    show = _ => {
        const value = this.inputRef.current.value
        console.log('this.inputRef.current.value', value)
        this.setState({ logs: [`this.inputRef.current.value: ${value}`] })
    }

    render () {
        return [
            <input key='input' ref={this.inputRef} />,
            <button key='button' onClick={_ => this.show()}>show  input value</button>,
            <Log key='log' logs={this.state.logs} />
        ]
    }
}

const RefcreateRefCoding = `
export default class CreateRef extends Component {
    state = { logs: [] }
    constructor(props){
        super(props)
        this.inputRef = createRef()
    }

    show = _ => {
        const value = this.inputRef.current.value
        console.log('this.inputRef.current.value', value)
        this.setState({ logs: ['this.inputRef.current.value: \${value}'] })
    }

    render () {
        return [
            <input key='input' ref={this.inputRef} />,
            <button key='button' onClick={_ => this.show()}>show  input value</button>,
            <Log key='log' logs={this.state.logs} />
        ]
    }
}
`

export { RefcreateRefCoding } 