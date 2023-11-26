import React from 'react'
import Button from '../UI elements/Button'

const Navbar = () => {
  return (
    <div className=' font-mono flex justify-between gap-10 text-base items-center mb-36'>
        <div className=' text-primary text-base hover:cursor-pointer hover:text-white'>
            SHRIYAM
        </div>

        <div>
            <ul className='flex gap-8 items-center '>
                <li className=' flex gap-1 hover:text-primary hover:cursor-pointer'><span className=' text-primary'>01.</span><span>About</span></li>
                <li className=' flex gap-1 hover:text-primary hover:cursor-pointer'><span className=' text-primary'>02.</span><span>Experience</span></li>
                <li className=' flex gap-1 hover:text-primary hover:cursor-pointer'><span className=' text-primary'>03.</span><span>Work</span></li>
                <li className=' flex gap-1 hover:text-primary hover:cursor-pointer'><span className=' text-primary'>04.</span><span>Contact</span></li>
                <li className=' flex gap-1 hover:cursor-pointer'><Button title='Resume'/></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar