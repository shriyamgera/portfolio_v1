import React from 'react'

const RightSidebar = () => {
  return (
    <div className=' p-2 max-w-fit flex-col items-center bottom-0 right-[20px] text-lightest_slate fixed lg:flex hidden '>
        <a href='mailto:shriyamgera@gmail.com'>
          <div className='flex flex-col gap-4 font-mono text-md vertical-text cursor-pointer hover:text-primary duration-200 '>
            shriyamgera@gmail.com
          </div>
        </a>

        <div className='h-[130px] bg-lightest_slate w-[1px] mt-8'>
        </div>
    </div>
  )
}

export default RightSidebar