import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const serviceRef = useRef();
  const serviceRef1 = useRef();

  useGSAP(()=>{
    gsap.fromTo(serviceRef.current,{
      y:0,
      opacity:0,
    },{
      y:50,
      opacity:1,
      duration:4,
      scrollTrigger:{
        trigger:serviceRef.current,
        start:"top 80%",
        end:"top 50%",
        scrub:true
      }
    })
  })
  useGSAP(()=>{
    gsap.fromTo(serviceRef1.current,{
      y:0,
      opacity:0,
    },{
      y:50,
      opacity:1,
      duration:4,
      scrollTrigger:{
        trigger:serviceRef1.current,
        start:"top 80%",
        end:"top 50%",
        scrub:true
      }
    })
  })
  return (
    <div className=''>
      <div className='flex sm:items-center items-start sm:flex-row flex-col gap-6'>
        <span ref={serviceRef} className='bg-[#B9FF66] py-2 px-4 rounded-[5px] text-3xl'>Services</span>
        <p ref={serviceRef1}>At our digital marketing agency, we offer a range of services to help <br /> businesses grow and succeed online. These services include:</p>
      </div>
    </div>
  )
}

export default Services
