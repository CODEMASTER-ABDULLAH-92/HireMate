import React, { useRef } from 'react'
import { data } from '../assets/assets'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const Hero = () => {
  const imageRef = useRef();
useGSAP(()=>{
  gsap.fromTo(imageRef.current ,{
    x:30,
    opacity:0,
  },{
    x:-60,
    opacity:1,
    duration:2,
  })
  })

  return (
    <div className='pt-20 flex md:flex-row flex-col-reverse justify-between items-center'>
      

      {/* left  */}
      <div className=' md:max-w-[40%] w-[100%] '>
        <h1 className='text-5xl -tracking-tighter'>Navigating the  digital landscape  for success</h1>
        <p>At HireMate, our digital marketing agency helps tech professionals and businesses thrive in the digital world. We specialize in boosting visibility and opportunity through SEO, PPC, social media marketing, and content creation — helping web developers, app developers, and other skilled individuals connect with the right jobs and clients online.</p>
        <button className='py-3 mt-5 text-xl rounded-[10px] text-white px-10 bg-black '>Let's Started</button>
      </div>
      {/* Right  */}

      <div>
        <img ref={imageRef} src={data.homeImage} className='sm:h-80 h-56' alt="" />
      </div>
    </div>
  )
}

export default Hero
