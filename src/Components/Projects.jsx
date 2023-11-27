import React from 'react'
import Heading from '../UI elements/Heading'
import projects from '../Assets/Data/projects.json'
import { FiGithub, FiLink } from 'react-icons/fi'

const Projects = () => {
  return (
    <div className='my-28'>
        <div className=' mb-12'>
            <Heading index={'03'} title={"Some Things I've Built"}/>
        </div>
        {projects?.map((item, index)=>(
             <div key={index} className={`flex items-center my-20 ${index % 2 !== 0 ?`flex-row-reverse`:null}`}>
             <div className='z-1 relative'>
                 <img src={item.img} alt={`${item.name} Preview`} className='w-[580px] h-[362px]' />
                 <div className=' bg-primary w-[580px] h-[362px] absolute inset-0 opacity-[20%] rounded hover:opacity-0 cursor-pointer '></div>
             </div>
             <div className={`relative w-[480px] z-10 ${index % 2 !== 0 ?`translate-x-10`:`-translate-x-10`}`}>
                <div className={` font-bold text-off_white relative mb-8 text-3xl ${index % 2 !== 0 ?null:`text-right`} hover:text-primary cursor-pointer`}>{item.name}</div>
                
                <div className={` bg-light_navy p-6 z-10 text-lightest_slate ${index % 2 !== 0 ?null:`text-right`} my-4 rounded shadow-lg hover:shadow-2xl`}>{item.description}</div>
                <div className={`flex gap-3 ${index % 2 !== 0 ?null:`justify-end`} my-2`} > {item?.tech_used?.map((tech)=>(
                    <div className='font-mono text-lightest_slate'>{tech}</div>
                ))}</div>
                <div className={`flex text-xl gap-3  ${index % 2 !== 0 ?null:`justify-end`}`}>
                    <FiGithub className=' hover:text-primary cursor-pointer '/>
                    <FiLink className=' hover:text-primary cursor-pointer '/>
                </div>
             </div>
         </div>
        ))}
       

    </div>
  )
}

export default Projects