import React, { useState } from 'react'
import Heading from '../UI elements/Heading'
import experience from '../Assets/Data/experience.json'

const Experience = () => {

    const onSelectHandle = (item)=>{
        setselectedJob(item)
        // setSelectedStyling(`text-primary border-primary`)

    }

    const [selectedJob, setselectedJob] = useState(experience[0])
    // const [selectedStyling, setSelectedStyling] = useState()
    return (
        <div className='mt-44'>
            <Heading index={'02'} title={"Where I've Worked"} />

            <div className='flex mt-6'>
                <div className='mr-8'>{
                    experience?.map((item) => (
                        <div key={item.j_no}
                             className={` font-mono py-3 px-3 border-l-4 ${selectedJob === item ? `text-primary border-primary` :`text-lightest_slate border-lightest_navy`} hover:bg-lightest_navy cursor-pointer hover:text-primary duration-[600ms] ease-in-out`}
                             onClick={()=>{onSelectHandle(item)}}>
                            {item.name}
                        </div>
                    ))
                }
                </div>
                <div className=' max-w-[600px]'>
                    <div className='text-off_white font-[600] text-2xl'>{selectedJob.position}<span className=' text-primary'> @ {selectedJob.name}</span></div>
                    <div className=' text-lightest_slate mb-4'>{selectedJob.time_period}</div>
                    <div>
                        
                        {selectedJob?.description?.map((item, index)=>(
                            <div className='flex'><div className=' text-primary'>&#9656;</div><span key={index} className=' text-lightest_slate'> {item}<br/> <br/></span></div>
                            
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience