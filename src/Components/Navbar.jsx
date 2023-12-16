import React, { useState, useEffect } from 'react'
import Button from '../UI elements/Button'
import { FiMenu } from "react-icons/fi"
import { IoClose } from "react-icons/io5"
import { motion, useAnimation } from "framer-motion"
import { Link } from 'react-scroll'



const Navbar = () => {

  const controls = useAnimation();

  const [toggleMenu, settoggleMenu] = useState(false)
  const [prevScroll, setprevScroll] = useState(0)

  useEffect(() => {

    const html = document.querySelector('html')

    if (toggleMenu) {
      html.style.overflow = 'hidden'
    } else {
      html.style.overflow = 'auto'
    }

  }, [toggleMenu])

  const handleScroll = () => {
    const currentScroll = window.pageYOffset
    if (currentScroll <= prevScroll) {
      controls.start({ opacity: 1 })
    } else {
      controls.start({ opacity: 0 })
    }
    setprevScroll(currentScroll)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScroll])


  return (
    <>
    <div className='flex items-center justify-center '>
      <motion.div
        animate={controls}
        transition={{ duration: 0.3 }}
        className={`hidden md:flex font-mono justify-between gap-10 text-base items-center fixed bg-navy p-10 h-16 w-full -mt-2 z-50 glassmorphism ${window.pageYOffset < 100?null:'drop-shadow-2xl'} duration-1000`} >

        <div className=' text-primary text-base hover:cursor-pointer hover:text-white'>
          <Link to='intro' spy={true} smooth={true} duration={500} offset={-100}>
          SHRIYAM
          </Link>
        </div>

        <div>
          <ul className='flex gap-8 items-center '>
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className=' flex gap-1 hover:text-primary hover:cursor-pointer'>
              <Link to='about' spy={true} smooth={true} duration={500} offset={-100}>


                <span className=' text-primary'>01.</span><span>About</span>
              </Link>
            </motion.li>
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className=' flex gap-1 hover:text-primary hover:cursor-pointer'>

                <Link to='experience' spy={true} smooth={true} duration={500} offset={-100}>
                <span className=' text-primary'>02.</span><span>Experience</span>
                </Link>
                </motion.li>
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}

              className=' flex gap-1 hover:text-primary hover:cursor-pointer'>
                <Link to='projects' spy={true} smooth={true} duration={500} offset={-100}>
                  <span className=' text-primary'>03.</span><span>Work</span></Link></motion.li>
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}

              className=' flex gap-1 hover:text-primary hover:cursor-pointer'>
                                <Link to='contact' spy={true} smooth={true} duration={500} offset={-100}>

                <span className=' text-primary'>04.</span><span>Contact</span>
                </Link></motion.li>
            <a href='ShriyamResume.pdf' target="_blank"  >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}

                className=' flex gap-1 hover:cursor-pointer'><Button title='Resume' />
              </motion.li>
            </a>
          </ul>
        </div>

      </motion.div>
      </div>

      <div className='flex items-center justify-center w-full '>
      <motion.div animate={controls} transition={{duration:0.3}} className={`flex md:hidden font-mono justify-between text-base gap-8 fixed bg- p-10 h-16 w-full -mt-2 z-50 glassmorphism bg-navy ${window.pageYOffset < 100?null:'drop-shadow-2xl'} duration-1000`}>
      <div className=' text-primary text-base hover:cursor-pointer hover:text-white'>
          <Link to='intro' spy={true} smooth={true} duration={500} offset={-100}>
          SHRIYAM
          </Link>
        </div>


        {toggleMenu ?
          <motion.div animate={{x:-20}}
        transition={{ duration: 0.3 }} className=' flex -mr-16 flex-col w-full h-screen -mt-10 bg-light_navy'>
            <IoClose className='absolute top-10 text-4xl mr-[50px] text-primary hover:text-off_white self-end' onClick={() => { settoggleMenu((prev => (!prev))) }} />

            <ul className='flex flex-col items-center w-full h-full justify-center '>
              <li className=' h-[15%] w-full items-center justify-center flex gap-1 hover:text-primary hover:cursor-pointer'>              <Link to='about' spy={true} smooth={true} duration={500} offset={-100} onClick={(prev)=>{settoggleMenu(!prev)}}>
<span className=' text-primary'>01.</span><span>About</span></Link></li>
              <li className=' h-[15%] w-full items-center justify-center flex gap-1 hover:text-primary hover:cursor-pointer'>              <Link to='experience' spy={true} smooth={true} duration={500} offset={-100} onClick={(prev)=>{settoggleMenu(!prev)}}>
<span className=' text-primary'>02.</span><span>Experience</span></Link></li>
              <li className=' h-[15%] w-full items-center justify-center flex gap-1 hover:text-primary hover:cursor-pointer'>              <Link to='projects' spy={true} smooth={true} duration={500} offset={-100} onClick={(prev)=>{settoggleMenu(!prev)}}>
<span className=' text-primary'>03.</span><span>Work</span></Link></li>
              <li className=' h-[15%] w-full  items-center justify-center flex gap-1 hover:text-primary hover:cursor-pointer'>              <Link to='contact' spy={true} smooth={true} duration={500} offset={-100} onClick={(prev)=>{settoggleMenu(!prev)}}>
<span className=' text-primary'>04.</span><span>Contact</span></Link></li>
              <li className=' h-[15%] w-full items-center justify-center flex gap-1  hover:cursor-pointer'><div><Button title='Resume' /></div></li>
            </ul>

          </motion.div> :
          <>
            <FiMenu className={`text-3xl text-primary hover:text-off_white`} onClick={() => { settoggleMenu((prev => (!prev))) }} />
          </>}

      </motion.div>
      </div>
    </>
  )
}

export default Navbar