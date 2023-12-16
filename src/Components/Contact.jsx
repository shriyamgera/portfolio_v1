import React from 'react'
import Button from '../UI elements/Button'

const Contact = () => {
  return (
    <div className=' text-center max-w-[580px] flex flex-col items-center' id='contact'>
        <div className=' text-primary text-lg font-mono mb-2'>04. What's Next?</div>
        <div className=' font-bold text-off_white text-[48px]'> Get In Touch</div>
        <div className=' text-lightest_slate my-3 mb-12'>Feel free to reach out! I'm currently open to new freelancing projects and eager to explore exciting opportunities. Let's connect and discuss how we can collaborate on innovative and impactful ventures. Looking forward to hearing from you!</div>
        <a href='https://www.linkedin.com/in/shriyam-gera-664387135/' target='_blank' rel="noreferrer"><Button title={"Say Hello!"}/></a>
    </div>
  )
}

export default Contact