import React from 'react'

const Button = ({title}) => {
  return (
    <div className=' p-2 border-2 border-primary text-primary rounded-md hover:border-r-4 hover:border-b-4'>{title}</div>
  )
}

export default Button