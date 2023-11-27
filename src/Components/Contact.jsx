import React from 'react'
import Button from '../UI elements/Button'

const Contact = () => {
  return (
    <div className=' text-center max-w-[580px] flex flex-col items-center'>
        <div className=' text-primary text-lg font-mono mb-2'>04. What's Next?</div>
        <div className=' font-bold text-off_white text-[48px]'> Get In Touch</div>
        <div className=' text-lightest_slate my-3 mb-12'>Feel free to reach out! I'm currently open to new freelancing projects and eager to explore exciting opportunities. Let's connect and discuss how we can collaborate on innovative and impactful ventures. Looking forward to hearing from you!</div>
        <Button title={"Say Hello!"}/>
    </div>
  )
}

export default Contact