// 使用回调 -- 生命周期

import React, { Component } from 'react'
export default class RefBox extends Component {
    state = { node: null }
    render () {
        return (
            <div>
                <button key='button' onClick={_ => this.setState({ node: !this.state.node })}> {this.state.node ? 'destory' : 'render'}  Component </button>
                {
                    this.state.node ?  <RefCb /> : '组件已销毁'
                }
            </div>
        )
    }
}

class RefCb extends Component {
    state = { logs: [] }

    constructor (props) {
        super(props)
        console.log(`${this.input}, constructor`)
    }
    componentDidMount() {
        console.log(`${this.input}, componentDidMount`)
    }

    componentWillUnmount () {
        console.log(`${this.input}, componentWillUnmount`)
    }

    render() {
        return [
            <input key='input' ref={ref => {
                console.log(ref, '33')
                this.input = ref
            }} />,
        ]
    }
}
