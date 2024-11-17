import React from 'react';
import footer from "../image/footer_shape.png";
import { MdArrowLeft,MdArrowRight } from "react-icons/md";
import logo from '../logo mykd.png';

const Footer = () => {
  return (
    <div>
        <footer className='relative h-[498.1px] z-[1] overflow-hidden bg-[#050506]'>
            <div className='absolute z-[-1] left-0 top-0 bg-cover bg-center w-[100%] h-[100%]'>
                <img src={footer} alt='footer' className='h-full'/>
            </div>
            <div className='flex mb-[100px] w-full h-[76.5px] px-[15px]'>
                <div className='flex flex-row w-[1490px] h-[76.5px]'>
                    <div className='flex flex-col w-[50%] h-[76.5px] px-[15px]'>
                        <h2 className='capitalize m-0 inline-block text-[90px] text-transparent font-extrabold opacity-[0.66] leading-[0.85]' 
                        style={{
                            WebkitTextStrokeWidth: '2px',
                            WebkitTextStrokeColor: 'white',
                          }}>Dubai</h2>
                    </div>
                    <div className='flex flex-col w-[50%] h-[76.5px] px-[15px]'>
                        <h2 className='capitalize text-end m-0 inline-block text-[90px] text-transparent font-extrabold opacity-[0.66] leading-[0.85]' 
                        style={{
                            WebkitTextStrokeWidth: '2px',
                            WebkitTextStrokeColor: 'white',
                          }}>France</h2>
                    </div>
                </div>
            </div>
            <div className='flex mb-[20px] w-full h-[233.6px]'>
                <div className='flex mx-auto px-[15px] w-[1490px] h-[233.6px] flex-row'>
                    <div className='flex flex-col w-[496.66px] h-[233.6px] px-[15px]'>
                        <div className='mt-[30px] mb-[50px] w-[466.66px] h-[153.6px]'>
                            <h4 className='uppercase relative font-bold text-white text-[18px] pl-[30px] mb-[20px] w-[466.66px] h-[21.6px] tracking-[1px]'>
                                <div className='absolute left-0 top-1/2 text-[20px] -translate-y-1/2 text-white font-bold'>
                                    <MdArrowLeft />
                                </div>
                                Information
                                <div className='absolute left-[11px] top-1/2 text-[20px] -translate-y-1/2 text-[#45f882] font-bold'>
                                <MdArrowRight />
                                </div>
                            </h4>
                            <ul className='m-0 p-0 w-[466.66px] h-[112px]'>
                                <li className='text-[#e2e1e1] font-medium h-[28px] hover:text-[#45f882]'>+971 333 222 557</li>
                                <li className='text-[#e2e1e1] font-medium h-[28px] hover:text-[#45f882]'>info@exemple.com</li>
                                <li className='text-[#e2e1e1] font-medium h-[28px]'>Firestone building, Sharjah Ain</li>
                                <li className='text-[#e2e1e1] font-medium h-[28px]'>Box 265, Dubai</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex flex-col w-[496.66px] h-[233.6px] px-[15px]'>
                        <div className='mb-[50px] w-[290px] h-[153.6px]'>
                            <div className='mb-[35px] w-[466.66px] h-[37.24px] bg-cover bg-center justify-center flex'>
                                <img src={logo} className='h-full'/>
                            </div>
                            <ul className='m-0 p-0 w-[466.66px] h-[110px] text-center'>
                                <li className='text-[#e2e1e1] font-medium uppercase mb-[13px] hover:text-[#45F882] cursor-pointer transition-all duration-200 relative group hidden lg:block'>
                                    Home
                                    <div className='bg-[#45F882] absolute h-[1px] w-[30px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-200 ease-in-out group-hover:-rotate-45 group-hover:opacity-100'></div>
                                </li>
                                <li className='text-[#e2e1e1] font-medium uppercase mb-[13px] hover:text-[#45F882] cursor-pointer transition-all duration-200 relative group hidden lg:block'>
                                    About Us
                                    <div className='bg-[#45F882] absolute h-[1px] w-[30px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-200 ease-in-out group-hover:-rotate-45 group-hover:opacity-100'></div>
                                </li>
                                <li className='text-[#e2e1e1] font-medium uppercase mb-[13px] hover:text-[#45F882] cursor-pointer transition-all duration-200 relative group hidden lg:block'>
                                    Tournament
                                    <div className='bg-[#45F882] absolute h-[1px] w-[30px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-200 ease-in-out group-hover:-rotate-45 group-hover:opacity-100'></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex flex-col w-[496.66px] h-[233.6px] px-[15px]'>
                        <div className='mt-[30px] mb-[50px] w-[466.66px] h-[153.6px] text-right'>
                            <h4 className='uppercase relative font-bold text-white text-[18px] pl-0 pr-[30px] mb-[20px] w-[466.66px] h-[21.6px] tracking-[1px]'>
                                <div className='absolute left-auto right-[11px] top-1/2 text-[20px] -translate-y-1/2 text-white font-bold'>
                                    <MdArrowLeft />
                                </div>
                                Head Office
                                <div className='absolute left-auto right-0 top-1/2 text-[20px] -translate-y-1/2 text-[#45f882] font-bold'>
                                <MdArrowRight />
                                </div>
                            </h4>
                            <ul className='m-0 p-0 w-[466.66px] h-[112px]'>
                                <li className='text-[#e2e1e1] font-medium h-[28px] hover:text-[#45f882]'>+33 423 222 555</li>
                                <li className='text-[#e2e1e1] font-medium h-[28px] hover:text-[#45f882]'>info@exemple.com</li>
                                <li className='text-[#e2e1e1] font-medium h-[28px]'>New Central Park W7 Street Lan</li>
                                <li className='text-[#e2e1e1] font-medium h-[28px]'>France</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#050506] py-[20px] px-0 w-full h-[68px] z-[1]'>
                <div className='w-full h-[28px] flex mx-auto px-[15px] items-center flex-row'>
                    <div className='flex flex-col w-[745px] h-[24.5px] px-[15px]'>
                        <p className='uppercase text-[14px] font-semibold text-[#9f9f9f]'>Copyright © 2024 - All Rights Reserved By <span className='text-[#45f882]'>Mykd</span></p>
                    </div>
                    <div className='flex flex-col w-[745px] h-[28px] px-[15px] items-end'>
                        <ul className='flex items-center justify-center gap-[55px]'>
                            <li className='uppercase text-[#9f9f9f] font-semibold hover:text-[#45f882]'>Contact Us</li>
                            <li className='uppercase text-[#9f9f9f] font-semibold hover:text-[#45f882]'>Join our team</li>
                            <li className='uppercase text-[#9f9f9f] font-semibold hover:text-[#45f882]'>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer;