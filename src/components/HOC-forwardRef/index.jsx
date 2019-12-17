import React, {createRef, Component} from 'react'
import ComInput from './Com-input'
import ComTextarea from './Com-textarea'
import Log from '../ConsoleLog'

export default class Index extends Component {
  state = { logs: [] }

  constructor(props) {
    super(props);
    this.inputRef = createRef();
    this.textareaRef = createRef();
  }

  render () {
    return [
      <ComInput data-type='input' key='input' ref={this.inputRef} {...{ handleclick: _ => {
        this.setState({ logs: [`inputvalue: ${ this.inputRef.current.value }`] })
        console.log(this.inputRef.current.value, 'inputvalue') 
      } }} />,
      <ComTextarea data-type='textarea' key='textarea' ref={this.textareaRef} {...{ handleclick: _ => {
        console.log(this.textareaRef.current.value, 'textarea value')
        this.setState({ logs: [`textarea value: ${ this.textareaRef.current.value }`] })
      }}} />,
      <Log key='log' logs={this.state.logs} />
    ]
  }
}

const ForwardRefHOCCoding = `
  
// 包裹组件
function HocComponent(WrappendComponent) {
  class MyComponent extends Component {
      render() {
          const { forwardedref, handleclick, ...rest } = this.props
          return (
              <div>
                  <WrappendComponent ref={forwardedref} {...rest} />
                  <button onClick={handleclick}>click me</button>
              </div>
          )
      }
  }
  return forwardRef((props, ref) => (
      <MyComponent {...props} forwardedref={ref} />
  ))
}

// 子组件1 - input
const DefaultComponent = forwardRef((props, ref) => <input ref={ref} {...props} />)
export default HocComponent(DefaultComponent)


// index导出
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.inputRef = createRef();
    this.textareaRef = createRef();
  }

  render () {
    return [
      <ComInput data-type='input' key='input' ref={this.inputRef} {...{ handleclick: _ => {
        console.log(this.inputRef.current.value, 'inputvalue') 
      } }} />,
      <ComTextarea data-type='textarea' key='textarea' ref={this.textareaRef} {...{ handleclick: _ => {
        console.log(this.textareaRef.current.value, 'textarea value')
      }}} />
    ]
  }
}


`

export { ForwardRefHOCCoding }