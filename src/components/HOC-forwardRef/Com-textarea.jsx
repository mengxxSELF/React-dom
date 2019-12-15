import React, { forwardRef } from 'react'
import HocComponent from './HocComponent'

const DefaultComponent = forwardRef((props, ref) => <textarea ref={ref} {...props} />)
export default HocComponent(DefaultComponent)
