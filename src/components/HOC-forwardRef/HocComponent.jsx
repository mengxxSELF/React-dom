import React, { Component, forwardRef } from 'react'

function HocComponent(WrappendComponent) {
    class MyComponent extends Component {
        render() {
            const { forwardedref, handleclick, ...rest } = this.props
            return (
                <div>
                    <WrappendComponent ref={forwardedref} {...rest} defaultValue={this.props['data-type']} />
                    <button onClick={handleclick}>click me</button>
                </div>
            )
        }
    }
    return forwardRef((props, ref) => (
        <MyComponent {...props} forwardedref={ref} />
    ))
}

export default HocComponent
