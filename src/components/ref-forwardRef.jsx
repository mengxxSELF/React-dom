import React, { forwardRef, Component, createRef} from 'react'
import Log from './ConsoleLog'


const ChildrenBtn = forwardRef((props, ref)=>  <input key='input' ref={ref} defaultValue={props.children} />)

export default class ForwardRefExample extends Component {
    state = { logs: [] }
    constructor(props){
        super(props)
        this.childRef = createRef()
    }

    show = _ => {
        const value = this.childRef.current.value
        console.log('this.childRef.current.value', value)
        this.setState({ logs: [`this.childRef.current.value: ${value}`] })
    }

    render () {
        return [
            <ChildrenBtn ref={this.childRef}  key='button' onClick={_ => this.show()}> 清风过 曳烛光 </ChildrenBtn>,
            <button key='btn'onClick={_ => this.show()}>show value</button>,
            <Log key='log' logs={this.state.logs} />
        ]
    }
}

const ForwardRefCoding = `
const ChildrenBtn = forwardRef((props, ref)=>  <input key='input' ref={ref} defaultValue={props.children} />)

export default class ForwardRefExample extends Component {
    constructor(props){
        super(props)
        this.childRef = createRef()
    }

    show = _ => {
        const value = this.childRef.current.value
        console.log('this.childRef.current.value', value)
    }

    render () {
        return [
            <ChildrenBtn ref={this.childRef}  key='button' onClick={_ => this.show()}> 清风过 曳烛光 </ChildrenBtn>,
            <button key='btn'onClick={_ => this.show()}>show value</button>,
        ]
    }
}
`

export { ForwardRefCoding } 