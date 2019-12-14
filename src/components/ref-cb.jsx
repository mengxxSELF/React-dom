import React, { Component } from 'react'


function Tem ( {ref} ) {
  return <input ref={ref}></input>
}



export default class RefCb extends Component {
    componentDidMount() {
        const target = this.input
        console.log('RefCb', 8, target)
        target.focus()
    }

    show = _ => {
        const temInput = this.tem.current.value
        console.log('temInput', temInput)
    }

    render() {
        return [
            <input ref={ref => this.input = ref} />,
            <Tem ref={tem => this.tem = tem}  />,
            <button onClick={_ => this.show()}>show  input value</button>
        ]
    }
}
