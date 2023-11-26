import React from 'react'

const Button = ({title}) => {
  return (
    <div className=' font-mono cursor-pointer px-4 py-[10px] border-[1px] border-primary text-primary rounded-md hover:border-r-4 hover:border-b-4 max-w-fit'>{title}</div>
  )
}

export default Button