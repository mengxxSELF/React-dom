import React from 'react'
export default ({ logs = [] }) => {
  return <div className='logs'>
    {
      logs.length ? logs.map((item, index) => <p key={index}>{item}</p>) : '我是控制台log，请看我'
    }
  </div>
}
