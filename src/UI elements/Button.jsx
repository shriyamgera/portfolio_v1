import React from 'react'

const Button = ({title}) => {
  return (
    <div className=' font-mono cursor-pointer px-4 py-[10px] border-[1px] border-primary text-primary rounded-md  max-w-fit hover:-translate-x-1 hover:-translate-y-1 duration-200 btn_hover_shadow'>{title}</div>
  )
}

export default Button

// hover:border-r-4 hover:border-b-4