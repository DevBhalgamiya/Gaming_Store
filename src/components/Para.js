import React from 'react';
import { Parallax as ParallaxEffect } from 'react-parallax';
import bg from "../image/parallax.jpeg";
import shadow from "../image/parallax_shadow.png";
import { FaCirclePlay } from "react-icons/fa6";

const Para = () => {
  return (
    <div>
      <ParallaxEffect strength={300} bgImage={bg}>
        <section className='relative h-[565px] overflow-hidden items-center flex py-[100px]'>
          <div className='w-[960px] h-[284.25px] z-[2] px-[15px] flex mx-auto'>
            <div className='flex flex-col justify-center items-center w-[960px] h-[284.25px]'>
              <a href="https://www.youtube.com/watch?v=ssrNcwxALS4" className='inline-block text-[86px] leading-[1px] text-white hover:text-[#45F882] mb-[14px]' style={{ textShadow: '0px 5px 12px 0px rgba(0, 0, 0, 0.13)' }}>
                <FaCirclePlay />
              </a>
              <h2 className='uppercase text-[55px] mb-[6px] text-white font-[800]' style={{textShadow: `0px 3px 7px rgba(0, 0, 0, 0.33)`}}>Join The  <span className='text-[#45f882]'>Community</span></h2>
              <p className='font-medium tracking-[0.9px] text-[16px] text-[#fefefe] mb-[30px]'>Join our Discord community and choosec onsteur</p>
              <div className="relative">
                <svg preserveAspectRatio="none" viewBox="0 0 157 48" fill="#45F882" className='w-40 h-15 group cursor-pointer'>
                  <path className="transition-all duration-200 ease-in-out group-hover:fill-[#fff]" fillRule="evenodd" clipRule="evenodd" d="M131.75 2L155.75 25L131.75 47L148.75 24L131.75 2Z" fill="#fff" stroke="#fff" strokeWidth="2.5"></path>
                  <path className="transition-all duration-200 ease-in-out group-hover:fill-[#fff]" fillRule="evenodd" clipRule="evenodd" d="M25 1L1 24.5111L25 47L8 23.4889L25 1Z" fill="#fff" stroke="#fff" strokeWidth="2.5"></path>
                  <path className="transition-all duration-200 ease-in-out group-hover:fill-[#fff]" fillRule="evenodd" clipRule="evenodd" d="M24.75 1L0.75 25L23.75 47H131.75L155.75 25L131.75 1H24.75Z" stroke="#fff" strokeWidth="1.5"></path>
                  <text x="30" y="30" fill="#FFFFFF" fontSize="15" fontFamily="Arial, sans-serif" className='font-semibold transition-colors duration-200 ease-in-out fill-[#201f2a] uppercase'>contact us</text>
                </svg>
              </div>
            </div>
          </div>
          <div className='w-[100%] h-[100%] z-0 left-0 top-0 absolute bg-cover bg-center opacity-[0.38]' style={{backgroundImage: `url(${shadow})`}}></div>
        </section>
      </ParallaxEffect> 
    </div>
  );
}

export default Para;
