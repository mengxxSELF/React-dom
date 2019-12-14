import React, { createRef } from 'react'
import ComInput from './Com-input'
import ComTextarea from './Com-textarea'

export default () => {
  const commonRef = createRef()
  const handleclick = _ => {
    console.log(commonRef.current, 'handleClick')
  }
  return [
    <ComInput data-type='input' key='input' {...{handleclick, myforwardRef: commonRef}} />,
    <ComTextarea data-type='textarea' key='textarea' {...{handleclick, myforwardRef: commonRef}} />,
  ]
}
