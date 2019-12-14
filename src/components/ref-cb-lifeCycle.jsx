// 使用回调 -- 生命周期

import React, { Component } from 'react'

export default class RefBox extends Component {
    state = { node: true }


    render () {
        if (!this.state.node) return '组件已销毁'

        return <RefCb destory={_ => this.setState({ node: false })} />
    }

}

class RefCb extends Component {
    constructor (props) {
        super(props)
        console.log(this.input, 'constructor')
    }
    componentDidMount() {
        console.log(this.input, 'componentDidMount')
    }

    componentWillUnmount () {
        console.log(this.input, 'componentWillUnmount')
    }

    render() {
        return [
            <input key='input' ref={ref => this.input = ref } />,
            <button key='button' onClick={this.props.destory}>destory Component </button>
        ]
    }
}
