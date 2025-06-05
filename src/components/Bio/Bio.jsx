import React from 'react'
import Container from '../Layout/Container'


const Bio = () => {
  return (
    <section className='py-14 bg-black '>
      <Container>
        
        <div className='max-w-[772px]'>
          <h3 className='font-bold text-[30px]  text-white tracking-[20.54%] font-primary  '>"Let’s Build Something Great"</h3>
          <p className='font-secondary tracking-wide text-[15px] text-white leading-[155.7%] mt-9 '>If you're looking for a developer who cares as much about design as they do about functionality, let's connect. Whether you have a startup idea or need help polishing your existing site, I’m ready to help.</p>
          <div className="flex  mt-[60px]">
								<a href="#">
									<p className="overflow-hidden text-sm font-bold  text-white bg-none rounded-2xl py-3 px-[34px] border-x border-x-white relative group hover:text-black z-10  duration-[400ms] ease-in-out">
										More
										<div className="w-0 h-0 bg-white absolute left-0 top-0 duration-[350ms] ease-in-out rounded-t-none rounded-l-none rounded-br-[100%]   group-hover:w-[100%] -z-10 group-hover:h-[100%]  "></div>
										<div className="w-0 h-0 bg-white absolute right-0 bottom-0 duration-[450ms] ease-in-out rounded-tl-[180%] rounded-r-none rounded-b-none   group-hover:w-[100%] -z-10 group-hover:h-[100%]"></div>
									</p>
								</a>
							</div>
        </div>
      </Container>
    </section>
  )
}

export default Bio
