import React, { useState } from 'react';
import './App.css';
import RefCb from './components/ref-cb'
import RefCbClassVsfn from './components/ref-cb-classVSfn'
import RefCbCycle from './components/ref-cb-lifeCycle'
import RefcreateRef from './components/ref-createRef'
import RefcreateRefReact from './components/ref-createRef-React'
import RefcreateRefFunc from './components/ref-createRef-Func'
import RefForwardRef0 from './components/ref-forwardRef0'
import RefUseRef from './components/ref-useRef'
import RefUseRefDiffCreate from './components/ref-useRef-diff-createRef'
import DefaultHOC from './components/HOC/index'
import MYForwardRefHOC from './components/HOC-ref-origin'
import ForwardRefHOC from './components/HOC-forwardRef'

const DATA = [
  { type: 'cb', title: '回调函数 - 基础版本', component: <RefCb /> },
  { type: 'classVSfn', title: '回调函数 - 组件对比', component: <RefCbClassVsfn /> },
  { type: 'lifeCycle', title: '回调函数 - 在生命周期中的表现', component: <RefCbCycle /> },
  { type: 'createRef', title: 'createRef - 基本使用', component: <RefcreateRef /> },
  { type: 'createRefClass', title: 'createRef - 父子组件ref的使用 -> 子组件是类组件', component: <RefcreateRefReact /> },
  { type: 'createRefFn', title: 'createRef - 父子组件ref的使用 -> 子组件是函数组件', component: <RefcreateRefFunc /> },
  { type: 'useRef', title: 'useRef - 基本使用', component: <RefUseRef /> },
  { type: 'useCreateRefdiff', title: '对比 useRef 和 createRef 的不同', component: <RefUseRefDiffCreate /> },
  { type: 'hoc', title: 'HOC组件的概念', component: <DefaultHOC /> },
  { type: 'hocref', title: '< V16 HOC中父子组件如何传递ref - 模拟 forwardRef 以props传递 ', component: <MYForwardRefHOC /> },
  { type: 'hochooks', title: '> V16 HOC中父子组件如何传递ref - Hooks登场 - forwardRef ', component: <ForwardRefHOC /> },
]

function App() {
  const [action, setAction] = useState('cb')
  return (
    <div className="App">
      <h3> React - DOM - Ref </h3>
      {
        DATA.map(({ type, title, component}, index) => <div>
          <h4 key={type} onClick={_ => setAction(type)}>{index + 1}: {title}</h4>
          {
            action === type && component
          }
        </div>)
      }
    </div>
  );
}

export default App;
