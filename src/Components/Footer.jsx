import React from 'react'
import { FaXTwitter } from 'react-icons/fa6'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

const Footer = () => {
  return (
    <>
    <div className='flex lg:hidden gap-4 text-2xl mt-10 '>
    <a href='https://github.com/shriyamgera' target='_blank' rel="noreferrer"><FiGithub className='  hover:text-primary cursor-pointer duration-300'/></a>
    <a href='https://twitter.com/shriyamgera' target='_blank' rel="noreferrer"><FaXTwitter className='  hover:text-primary cursor-pointer duration-300'/></a>
    <a href='https://www.linkedin.com/in/shriyamgera' target='_blank' rel="noreferrer"><FiLinkedin className='  hover:text-primary cursor-pointer duration-300'/></a>
        </div>
        <a href='https://www.linkedin.com/in/shriyamgera' target='_blank' rel="noreferrer"><div className=' font-mono hover:text-primary text-center text-lightest_slate my-8 cursor-default duration-300'>Built by Shriyam Gera</div></a>

        </>
  )
}

export default Footer