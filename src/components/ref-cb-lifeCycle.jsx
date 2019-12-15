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
    state = { logs: [] }

    constructor (props) {
        super(props)
        this.setState({ log: [`${this.input}, constructor`]})
    }
    componentDidMount() {
        this.setState({ log: [...this.state.logs, `${this.input}, componentDidMount`] })
    }

    componentWillUnmount () {
        this.setState({ log: [...this.state.logs, `${this.input}, componentWillUnmount`] })
    }

    render() {
        return [
            <input key='input' ref={ref => {
                console.log(ref, '33')
                this.input = ref
            }} />,
            <button key='button' onClick={this.props.destory}>destory Component </button>,
        ]
    }
}
