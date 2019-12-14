import React from 'react';
import './App.css';
import RefCb from './components/ref-cb'
import RefCbCycle from './components/ref-cb-lifeCycle'
import RefcreateRef from './components/ref-createRef'
import RefcreateRefReact from './components/ref-createRef-React'
import RefcreateRefFunc from './components/ref-createRef-Func'
import RefForwardRef0 from './components/ref-forwardRef0'
import RefUseRef from './components/ref-useRef'
import RefUseRefDiffCreate from './components/ref-useRef-diff-createRef'
import DefaultHOC from './components/HOC/index'
import MYForwardRefHOC from './components/HOC-ref-origin'

function App() {
  return (
    <div className="App">
      {/* <RefCb /> */}
      {/* <RefcreateRef /> */}
      {/* <RefCbCycle /> */}
      {/* <RefcreateRefReact /> */}
      {/* <RefcreateRefFunc /> */}
      {/* <RefForwardRef0 /> */}
      {/* <RefUseRef /> */}
      {/* <RefUseRefDiffCreate /> */}
      {/* <DefaultHOC/> */}
      <MYForwardRefHOC/>

    </div>
  );
}

export default App;
