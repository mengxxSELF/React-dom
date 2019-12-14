import React, { Component } from 'react'

function HocComponent(WrappendComponent) {
    class MyComponent extends Component {
        state = { show: null }
        render() {
            const { myforwardRef, handleclick, ...rest } = this.props
            return <div>
                <WrappendComponent ref={myforwardRef} {...rest} />
                <button onClick={this.props.handleclick}>click me</button>
            </div>
        }
    }
    return MyComponent
}


export default HocComponent
