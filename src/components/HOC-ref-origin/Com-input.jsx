import React, { Component } from 'react'
import HocComponent from './HocComponent'

class DefaultComponent extends Component {
    render (){
        const { myforwardref } = this.props
        return (
            <input ref={myforwardref} {...this.props} />
        )
    }
}

export default HocComponent(DefaultComponent)
