import React, { createRef } from 'react'

const Comment = ({content}) => {
  return [
    <p>评论内容： {content}</p>,
    <input />
  ]
}

export default () => {
    const inputRef = createRef()
    const show = _ => {
        const value = inputRef.current.value
        console.log('value', value)
    }

    return [
        <div>
            {
                ['尘世三千条', '不及'].map((item) => <Comment content={item} />)
            }
        </div>,
        <button key='button' onClick={_ => show()}>show  input value</button>
    ]
}