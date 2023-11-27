import React from 'react'
import Button from '../UI elements/Button'

const Introduction = () => {
  return (
    <div className='justify-center items-center mb-[450px]'>
        <div className=' font-mono text-primary text-md'>Hi, my name is</div>
        <div className=' font-[700] text-[70px] font-sans text-lightest_slate leading-[1.2] pb-3'>Shriyam Gera. <br/><span className='text-slate'>I build things for the web.</span></div>
        <div className=' font-[20px] text-lightest_slate max-w-[580px] mb-8'>I'm a software engineer specializing in <span className='text-primary'>building </span>and
          <span className='text-primary'> designing </span> exceptional digital experiences.
          I love to <span className='text-primary'>code</span> and looking for new ideas to
          implement in real life. Continuously striving to merge creativity with technology to deliver impactful solutions.</div>
        <Button title='Checkout my projects!'/>
    </div>
  )
}

export default Introduction