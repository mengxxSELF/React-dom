import React, { Component } from 'react'
import HocComponent from './HocComponent'

class DefaultComponent extends Component {
    render (){
        return (
            <textarea {...this.props}/>
        )
    }
}

export default HocComponent(DefaultComponent)
