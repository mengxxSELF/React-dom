import React, { Component } from 'react'
import HocComponent from './HocComponent'

class DefaultComponent extends Component {
    render (){
        return (
            <p>我是一个基本的子组件</p>
        )
    }
}

export default HocComponent(DefaultComponent)
