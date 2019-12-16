import React, { Component, useRef, createRef } from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true,
        })
    }
  
    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children; 
    }
  }
 class Userrefclass extends Component {
    constructor (props) {
        super(props)
        this.inputRef = useRef()
    }
    componentDidMount () {
        this.inputRef.current.focus()
    }

    render () {
        return <input key='input' ref={this.inputRef} /> 
    }
}

export default class Default extends Component {
    render () {
        return <ErrorBoundary> <Userrefclass /> </ErrorBoundary> 
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