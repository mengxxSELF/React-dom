import React, {useRef} from 'react'
import ComInput from './Com-input'
import ComTextarea from './Com-textarea'

export default () => {
  const inputRef = useRef()
  const textareaRef = useRef()
  return [
    <ComInput data-type='input' key='input' {...{ handleclick: _ => console.log(inputRef.current.value, 'inputvalue'), myforwardRef: inputRef}} />,
    <ComTextarea data-type='textarea' key='textarea' {...{ handleclick: _ => console.log(textareaRef.current.value, 'textarea value'), myforwardRef: textareaRef}} />,
  ]
}
