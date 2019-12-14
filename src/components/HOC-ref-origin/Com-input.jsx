import React, { Component } from 'react'
import HocComponent from './HocComponent'

class DefaultComponent extends Component {
    render (){
        return (
            <input {...this.props} />
        )
    }
}

export default HocComponent(DefaultComponent)
