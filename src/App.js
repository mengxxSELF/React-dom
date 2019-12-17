import React, { useState } from 'react';
import './App.css';
import RefCb, { RefCbCoding } from './components/ref-cb'
import RefCbClass, { RefCbClassCoding } from './components/ref-cb-class'
import RefCbClassVsfn, { RefCbClassVsfnCoding } from './components/ref-cb-classVSfn'
import RefCbLifeCycle from './components/ref-cb-lifeCycle'
import RefcreateRef, { RefcreateRefCoding } from './components/ref-createRef'
import RefcreateRefFuncVSclass, { RefcreateRefFuncVSclassCoding } from './components/ref-createRef-classVsFn'
import ForwardRef, { ForwardRefCoding  } from './components/ref-forwardRef'
import RefUseRef, { RefUseRefCoding  } from './components/ref-useRef'
import RefUseRefClass, { UserrefclassCoding  } from './components/ref-useRef-class'
import RefUseRefDiffCreate, { RefUseRefDiffCreateCoding } from './components/ref-useRef-diff-createRef'
import DefaultHOC, { DefaultHOCCoding } from './components/HOC/index'
import MYForwardRefHOC from './components/HOC-ref-origin'
import ForwardRefHOC, { ForwardRefHOCCoding } from './components/HOC-forwardRef'
import parser from './utils/parser'
import 'highlight.js/styles/github.css'

const DATA = [
  { type: 'cb', title: '回调函数 - 基础版本', component: <RefCb />, coding: RefCbCoding },
  { type: 'cbclass', title: '回调函数 - 组件', component: <RefCbClass />, coding: RefCbClassCoding },
  { type: 'classVSfn', title: '回调函数 - 组件对比', component: <RefCbClassVsfn />, coding: RefCbClassVsfnCoding },
  // { type: 'lifeCycle', title: '回调函数 - 在生命周期中的表现', component: <RefCbLifeCycle /> },
  { type: 'createRef', title: 'createRef - 基本使用', component: <RefcreateRef />, coding: RefcreateRefCoding },
  { type: 'createRefClass', title: 'createRef - 子组件是类/函数组件', component: <RefcreateRefFuncVSclass /> , coding: RefcreateRefFuncVSclassCoding},
  { type: 'forwardRef', title: 'forward - 基本使用', component: <ForwardRef />, coding: ForwardRefCoding },
  // { type: 'hoc', title: 'HOC组件的概念', component: <DefaultHOC />, coding: DefaultHOCCoding },
  // { type: 'hocref', title: '< V16 HOC中父子组件如何传递ref - 模拟 forwardRef 以props传递 ', component: <MYForwardRefHOC /> },
  { type: 'hochooks', title: '> V16 HOC中父子组件如何传递ref - forwardRef ', component: <ForwardRefHOC />, coding: ForwardRefHOCCoding },
  { type: 'useRef', title: 'useRef - 基本使用', component: <RefUseRef /> , coding: RefUseRefCoding },
  // { type: 'useRefclass', title: 'useRef - 基本使用 - 在类组件中使用- 直接报错', component: <RefUseRefClass /> , coding: UserrefclassCoding },
  { type: 'useCreateRefdiff', title: 'useRef VS createRef', component: <RefUseRefDiffCreate />, coding: RefUseRefDiffCreateCoding },
]

function App() {
  const [action, setAction] = useState('cb')
  const [index, setIndex] = useState(0)
  const [showCoding, setShowCoding] = useState(true)
  const coding = DATA[index].coding
  return (
    <div className='cont'>
      <div className="App">
        <h3> React - DOM - Ref </h3>
        {
          DATA.map(({ type, title, component}, index) => <div>
            <h4 key={type} onClick={_ => {
              setAction(type)
              setIndex(index)
            }}>{index + 1}: {title}</h4>
            {
              action === type && component
            }
          </div>)
        }
      </div>
      {
        showCoding ? <div className='coding'>
        <button onClick={ _ => setShowCoding(false)}> hide coding </button>
        <h3> coding </h3>
        <div dangerouslySetInnerHTML={{ __html: parser( coding )  }}></div>
      </div> : ''
      }
      
    </div>
  );
}

export default App;
