import React from 'react'

const Heading = ({index, title}) => {
  return (
    <div className='flex items-center text-off_white font-[32px]'>
        <div className=' text-[26px]'>
            <span className=' font-mono text-primary'>{index}. </span><span className=' font-bold'>{title}</span>
        </div>
        <div className=' ml-4 h-[1px] w-[300px] bg-lightest_navy'></div>
    </div>
  )
}

export default Heading