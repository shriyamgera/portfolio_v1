import React from 'react'
import Heading from '../UI elements/Heading'
import projects from '../Assets/Data/projects.json'
import { FiGithub, FiLink } from 'react-icons/fi'

const Projects = () => {
  return (
    <div className='my-28' id='projects'>
        <div className=' mb-12'>
            <Heading index={'03'} title={"Some Things I've Built"}/>
        </div>
        {projects?.map((item, index)=>{
            const image = item.img
            return(
              <a href={item.link} target='_blank' rel="noreferrer">
                <div className=' relative md:hidden mb-32 rounded h-full duration-200' 
             style={{ backgroundImage : `url(${image})` }}
             >
                 {/* <img src={item.img} alt={`${item.name} Preview`} className=' rounded aspect-auto w-full h-full block ' /> */}
             
             <div className={` py-8 px-6  justify-center flex flex-col bg-light_navy bg-opacity-80 rounded hover:drop-shadow-2xl`}>
                <a href={item.link} target='_blank' rel="noreferrer"><div className={`font-bold text-off_white mb-2 text-3xl  hover:text-primary cursor-pointer duration-200`}>{item.name}</div></a>
                
                <div className={` text-lightest_slate my-4 rounded shadow-lg `}>{item.description}</div>
                <div className={`flex gap-3 my-2 flex-wrap`} > {item?.tech_used?.map((tech)=>(
                    <div className='font-mono text-lightest_slate'>{tech}</div>
                ))}</div>
                <div className={`flex text-xl gap-3 mt-5 `}>
                    <a href={item.git_Link} target='_blank' rel="noreferrer"><FiGithub className=' hover:text-primary cursor-pointer duration-200 '/></a>
                    <a href={item.link} target='_blank' rel="noreferrer"><FiLink className=' hover:text-primary cursor-pointer duration-200 '/></a>
                </div>
             </div>
             </div>
             </a>
             )
})}

        {projects?.map((item, index)=>{
            const image = item.img

            return(
             <div key={index} className={`md:flex hidden items-center my-20 ${index % 2 !== 0 ?`flex-row-reverse`:null}`}>
             <div className='z-1 relative'>
                    <img src={image} alt={`${item.name} Preview`} className=' rounded' />
                    <a href={item.link} target='_blank' rel="noreferrer">

                 <div className=' duration-300 bg-primary absolute inset-0 opacity-[40%] rounded hover:opacity-0 cursor-pointer '></div>
                 </a>
             </div>
             <div className={`relative w-[480px] z-10 ${index % 2 !== 0 ?`translate-x-10`:`-translate-x-10`}`}>
                <a href={item.link} target='_blank' rel="noreferrer">
                    <div className={` font-bold text-off_white relative mb-8 text-3xl ${index % 2 !== 0 ?null:`text-right`} hover:text-primary cursor-pointer duration-200`}>{item.name}</div>
                </a>
                
                <div className={` duration-200 bg-light_navy p-6 z-10 text-lightest_slate ${index % 2 !== 0 ?null:`text-right`} my-4 rounded shadow-lg hover:shadow-2xl`}>{item.description}</div>
                <div className={`flex gap-3 ${index % 2 !== 0 ?null:`justify-end`} my-2`} > {item?.tech_used?.map((tech)=>(
                    <div className=' whitespace-nowrap font-mono text-lightest_slate'>{tech}</div>
                ))}</div>
                <div className={` flex text-xl gap-3  ${index % 2 !== 0 ?null:`justify-end`}`}>
                    <a href={item.git_Link} target='_blank' rel="noreferrer">
                        <FiGithub className=' hover:text-primary cursor-pointer duration-200 '/>
                    </a>
                    <a href={item.link} target='_blank' rel="noreferrer">
                        <FiLink className=' hover:text-primary cursor-pointer duration-200 '/>
                    </a>
                </div>
             </div>
         </div>)
})}
       

    </div>
  )
}

export default Projects