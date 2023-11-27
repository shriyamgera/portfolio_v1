import React from 'react'
import Heading from '../UI elements/Heading'

export const AboutMe = () => {
  return (
    <div className=' text-lightest_slate font-[20px]'>
        <Heading index={'01'} title={"About Me"}/>
        <div  className='flex mt-8'>
            <div className=' max-w-[540px] mr-8'>
            <p>
        Hello! I'm a passionate and detail-oriented web developer with a flair for crafting engaging and responsive websites. With a strong foundation in front-end technologies like 
        <span className='text-primary'> HTML, CSS, and JavaScript</span>, coupled with expertise in popular frameworks and libraries, I specialize in creating seamless user experiences.
        <br/> <br/> Whether it's building visually appealing interfaces or optimizing back-end functionality, I am dedicated to delivering 
        <span className='text-primary'> high-quality, performance-driven web solutions.</span> <br/><br/> I thrive on staying up-to-date with the latest industry trends and technologies to ensure that the websites I develop not only meet but 
        <span className='text-primary'> exceed modern standards</span>. Let's collaborate to turn your web development vision into a reality!<br/><br/>
        Here are a few technologies I've been working with recently:

        <ul className='grid grid-cols-2 gap-1 font-mono mt-4'>
            <li><span className='text-primary'>&#9656;</span> JavaScript (ES6+)</li>
            <li><span className='text-primary'>&#9656;</span> React</li>         
            <li><span className='text-primary'>&#9656;</span> Next JS</li>
            <li><span className='text-primary'>&#9656;</span> React Native</li>
            <li><span className='text-primary'>&#9656;</span> Tailwind</li>
            <li><span className='text-primary'>&#9656;</span> Node.js</li>
            <li><span className='text-primary'>&#9656;</span> Mongo DB</li>
            <li><span className='text-primary'>&#9656;</span> TypeScript</li>
        </ul>
      </p>
            </div>
                <img src='https://wallpapercave.com/wp/WrSE2RC.jpg' alt='Profile' className='h-[300px] w-[300px]'/>
            <div>
                
            </div>
        </div>
    </div>
  )
}
