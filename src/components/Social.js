import React from 'react';
import social_bg from "../image/social_bg.png";
import { FaFacebook, FaTwitter, FaDiscord  } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { ImYoutube } from "react-icons/im";
import { IoLogoTwitch } from "react-icons/io5";
import brand1 from "../image/brand/1.png";
import brand2 from "../image/brand/2.png";
import brand3 from "../image/brand/3.png";
import brand4 from "../image/brand/4.png";
import brand5 from "../image/brand/5.png";
import brand6 from "../image/brand/6.png";
import brand7 from "../image/brand/7.png";

const Social = () => {
    
  return (
    <div>
        <section className='relative flex h-[520px] overflow-hidden pt-[140px] pb-[150px] bg-[#050506] bg-cover bg-center' style={{backgroundImage: `url(${social_bg})`}}>
            <div className='relative w-[1300px] h-[325px] flex flex-col mx-auto px-[15px]'>
                <div className='w-[1300px] h-[160px] justify-center'>
                    <h4 className="uppercase text-center text-[#45F882] tracking-widest text-[14px] leading-[1.2] font-bold hidden md:block">
                    Connect With Us
                    </h4>
                    <h1 className='uppercase text-center text-white text-5xl leading-[1.5] font-bold hidden md:block'>
                    Stay Connected
                    </h1>
                    <div className='w-[65px] h-[5px] bg-[#45F882] mt-2 mx-auto' style={{ clipPath: 'polygon(0% 0%, 100% 0%, 93.846% 100%, 6.154% 100%, 0% 0%)' }}></div>
                </div>
                <div className='flex w-[1290px] h-[165px] flex-row justify-center space-x-6'>
                    <div className='flex relative flex-col w-[214.9px] h-[165px] border-4 border-[#45F882] bg-[#0A0B0F] items-center justify-center'>
                        <FaFacebook className='text-[44px] text-[#d8d8d8]'/>
                        <h5 className='uppercase text-[14px] font-medium mt-[22px] text-[#68fb9a] tracking-[2px]'>FaceBook</h5>
                        <svg xmlns="http://www.w3.org/2000/svg" width="65" height="5" viewBox="0 0 65 5" fill='#68fb9a' fillRule='evenodd' className='absolute left-[-3px] bottom-[-8px]'>
                            <path d="M968,5630h65l-4,5H972Z" transform="translate(-968 -5630)"></path>
                        </svg>
                    </div>
                    <div className='flex relative flex-col w-[214.9px] h-[165px] border-4 border-[#45F882] bg-[#0A0B0F] items-center justify-center'>
                        <FaTwitter className='text-[44px] text-[#d8d8d8]'/>
                        <h5 className='uppercase text-[14px] font-medium mt-[22px] text-[#68fb9a] tracking-[2px]'>Twitter</h5>
                        <svg xmlns="http://www.w3.org/2000/svg" width="65" height="5" viewBox="0 0 65 5" fill='#68fb9a' fillRule='evenodd' className='absolute left-[-3px] bottom-[-8px]'>
                            <path d="M968,5630h65l-4,5H972Z" transform="translate(-968 -5630)"></path>
                        </svg>
                    </div>
                    <div className='flex relative flex-col w-[214.9px] h-[165px] border-4 border-[#45F882] bg-[#0A0B0F] items-center justify-center'>
                        <GrInstagram className='text-[44px] text-[#d8d8d8]'/>
                        <h5 className='uppercase text-[14px] font-medium mt-[22px] text-[#68fb9a] tracking-[2px]'>Instagram</h5>
                        <svg xmlns="http://www.w3.org/2000/svg" width="65" height="5" viewBox="0 0 65 5" fill='#68fb9a' fillRule='evenodd' className='absolute left-[-3px] bottom-[-8px]'>
                            <path d="M968,5630h65l-4,5H972Z" transform="translate(-968 -5630)"></path>
                        </svg>
                    </div>
                    <div className='flex relative flex-col w-[214.9px] h-[165px] border-4 border-[#45F882] bg-[#0A0B0F] items-center justify-center'>
                        <ImYoutube className='text-[44px] text-[#d8d8d8]'/>
                        <h5 className='uppercase text-[14px] font-medium mt-[22px] text-[#68fb9a] tracking-[2px]'>Youtube</h5>
                        <svg xmlns="http://www.w3.org/2000/svg" width="65" height="5" viewBox="0 0 65 5" fill='#68fb9a' fillRule='evenodd' className='absolute left-[-3px] bottom-[-8px]'>
                            <path d="M968,5630h65l-4,5H972Z" transform="translate(-968 -5630)"></path>
                        </svg>
                    </div>
                    <div className='flex relative flex-col w-[214.9px] h-[165px] border-4 border-[#45F882] bg-[#0A0B0F] items-center justify-center'>
                        <FaDiscord className='text-[44px] text-[#d8d8d8]'/>
                        <h5 className='uppercase text-[14px] font-medium mt-[22px] text-[#68fb9a] tracking-[2px]'>Discord</h5>
                        <svg xmlns="http://www.w3.org/2000/svg" width="65" height="5" viewBox="0 0 65 5" fill='#68fb9a' fillRule='evenodd' className='absolute left-[-3px] bottom-[-8px]'>
                            <path d="M968,5630h65l-4,5H972Z" transform="translate(-968 -5630)"></path>
                        </svg>
                    </div>
                    <div className='flex relative flex-col w-[214.9px] h-[165px] border-4 border-[#45F882] bg-[#0A0B0F] items-center justify-center'>
                        <IoLogoTwitch className='text-[44px] text-[#d8d8d8]'/>
                        <h5 className='uppercase text-[14px] font-medium mt-[22px] text-[#68fb9a] tracking-[2px]'>Twitch</h5>
                        <svg xmlns="http://www.w3.org/2000/svg" width="65" height="5" viewBox="0 0 65 5" fill='#68fb9a' fillRule='evenodd' className='absolute left-[-3px] bottom-[-8px]'>
                            <path d="M968,5630h65l-4,5H972Z" transform="translate(-968 -5630)"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
        <section className='relative flex h-[402px] overflow-hidden pt-[110px] pb-[120px] bg-[#050506]'>
            <div className='relative w-[1300px] h-[172px] flex flex-col px-[15px] mx-auto'>
                <div className='flex justify-center w-[1300px] h-[115px] mb-[70px] text-center'>
                    <h2 className='uppercase text-white font-medium text-[45px] tracking-[3px]'>they trust us</h2>
                </div>
                <div className='flex flex-row w-[1300px] h-[57px] animate'>
                    <div className='flex flex-col items-center justify-center bg-cover bg-center w-[192px] h-[57px] px-[15px]'>
                        <a className='w-[162px] h-[57px] flex items-center justify-center'>
                            <img src={brand1}/>
                        </a>
                    </div>
                    <div className='flex flex-col items-center justify-center bg-cover bg-center w-[192px] h-[57px] px-[15px]'>
                        <a className='w-[162px] h-[57px] flex items-center justify-center'>
                            <img src={brand2}/>
                        </a>
                    </div>
                    <div className='flex flex-col items-center justify-center bg-cover bg-center w-[192px] h-[57px] px-[15px]'>
                        <a className='w-[162px] h-[57px] flex items-center justify-center'>
                            <img src={brand3}/>
                        </a>
                    </div>
                    <div className='flex flex-col items-center justify-center bg-cover bg-center w-[192px] h-[57px] px-[15px]'>
                        <a className='w-[162px] h-[57px] flex items-center justify-center'>
                            <img src={brand4}/>
                        </a>
                    </div>
                    <div className='flex flex-col items-center justify-center bg-cover bg-center w-[192px] h-[57px] px-[15px]'>
                        <a className='w-[162px] h-[57px] flex items-center justify-center'>
                            <img src={brand5}/>
                        </a>
                    </div>
                    <div className='flex flex-col items-center justify-center bg-cover bg-center w-[192px] h-[57px] px-[15px]'>
                        <a className='w-[162px] h-[57px] flex items-center justify-center'>
                            <img src={brand6}/>
                        </a>
                    </div>
                    <div className='flex flex-col items-center justify-center bg-cover bg-center w-[192px] h-[57px] px-[15px]'>
                        <a className='w-[162px] h-[57px] flex items-center justify-center'>
                            <img src={brand7}/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Social;