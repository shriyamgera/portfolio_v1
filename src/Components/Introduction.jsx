import React from 'react'
import Button from '../UI elements/Button'
import { Link } from 'react-scroll'

const Introduction = () => {
  return (
    <div className='flex flex-col justify-center h-screen d-[900px]' id='intro'>
        <div className=' font-mono text-primary text-md'>Hi, my name is</div>
        <div className=' font-[700] md:text-[70px] text-[40px] font-sans text-lightest_slate leading-[1.2] pb-3'>Shriyam Gera. <br/><span className='text-slate'>I build things for the web.</span></div>
        <div className=' font-[20px] text-lightest_slate max-w-[580px] mb-8'>I'm a software engineer specializing in <span className='text-primary'>building </span>and
          <span className='text-primary'> designing </span> exceptional digital experiences.
          I love to <span className='text-primary'>code</span> and looking for new ideas to
          implement in real life. Continuously striving to merge creativity with technology to deliver impactful solutions.</div>
          <Link to='projects' spy={true} smooth={true} duration={500} offset={-100}>
        <Button title='Check out my projects!'/>
        </Link>
    </div>
  )
}

export default Introduction