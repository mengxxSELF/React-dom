import React, { Component } from 'react'

function HocComponent (WrappendComponent) {
    class MyComponent extends Component {
        state = {show: null}
        render () {
            return <div>
                <WrappendComponent {...this.props} />
                <button onClick={_ => this.setState({ show: !this.state.show })}>点击显示所有属性</button>
                {
                    this.state.show && <p>当前属性：{this.props.type}</p>
                }
            </div>
        }
    }
    return MyComponent
} 

 
export default HocComponent
