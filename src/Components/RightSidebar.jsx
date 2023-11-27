import React from 'react'

const RightSidebar = () => {
  return (
    <div className=' p-2 max-w-fit flex flex-col items-center bottom-0 right-[20px] text-lightest_slate fixed '>
        <div className='flex flex-col gap-4 font-mono text-md vertical-text cursor-pointer hover:text-primary '>
            shriyamgera@gmail.com
        </div>

        <div className='h-[130px] bg-lightest_slate w-[1px] mt-8'>
        </div>
    </div>
  )
}

export default RightSidebar