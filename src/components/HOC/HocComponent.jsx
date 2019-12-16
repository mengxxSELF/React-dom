import React, { Component } from 'react'
import Log from '../ConsoleLog'

function HocComponent (WrappendComponent) {
    class MyComponent extends Component {
        state = {show: null, logs: []}
        render () {
            return <div>
                <WrappendComponent {...this.props} />
                <button onClick={_ => this.setState({ show: !this.state.show , logs: [`当前属性: ${ this.props.type }`]})}>点击显示所有属性</button>
                {
                    this.state.show && <p>当前属性：{this.props.type}</p>
                }
                <Log logs={this.state.logs} />
            </div>
        }
    }
    return MyComponent
} 

 
export default HocComponent
