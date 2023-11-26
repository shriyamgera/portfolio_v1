import React from 'react'
import Button from '../UI elements/Button'

const Navbar = () => {
  return (
    <div className=' font-mono flex justify-between gap-10 text-xs items-center'>
        <div className=' text-primary'>
            Shriyam
        </div>

        <div>
            <ul className='flex gap-4 items-center '>
                <li className=' flex gap-1 hover:text-primary'><span className=' text-primary'>01.</span><span>About</span></li>
                <li className=' flex gap-1 hover:text-primary'><span className=' text-primary'>02.</span><span>Experience</span></li>
                <li className=' flex gap-1 hover:text-primary'><span className=' text-primary'>03.</span><span>Work</span></li>
                <li className=' flex gap-1 hover:text-primary'><span className=' text-primary'>04.</span><span>Contact</span></li>
                <li className=' flex gap-1'><Button title='Resume'/></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar