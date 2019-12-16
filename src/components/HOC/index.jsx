import React from 'react'
import HOC from './HocCom'

export default () => {
  return <HOC type='i am default hoc' />
}


const DefaultHOCCoding =`
// 包装组件

function HocComponent (WrappendComponent) {
  class MyComponent extends Component {
      state = {show: null}
      render () {
          return (
            <div>
              <WrappendComponent {...this.props} />
              <button onClick={_ => this.setState({ show: !this.state.show })}>点击显示所有属性</button>
              {
                  this.state.show && <p>当前属性：{this.props.type}</p>
              }
            </div>
          )
      }
  }
  return MyComponent
} 

// 子组件
class DefaultComponent extends Component {
  render (){
      return (
          <p>我是一个基本的子组件</p>
      )
  }
}

export default HocComponent(DefaultComponent)


// HOC 组件导出
export default () => {
  return <HOC type='i am default hoc' />
}

`

export { DefaultHOCCoding }