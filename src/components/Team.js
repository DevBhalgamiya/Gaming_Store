import React from 'react';
import bg from "../image/team/team_bg.jpeg";
import t1 from "../image/team/t1.png";
import t2 from "../image/team/t2.png";
import t3 from "../image/team/t3.png";
import t4 from "../image/team/t4.png";

const Team = () => {
  return (
    <div>
        <section className="relative h-[792px] overflow-hidden bg-cover bg-center pt-[130px] pb-[110px]" style={{ backgroundImage: `url(${bg})` }}>
            <div className='flex w-[1300px] h-[566.6px] px-[15px] mx-auto flex-col'>
                <div className='w-[1300px] h-[160px] mx-auto'>
                    <h4 className="uppercase text-center text-[#45F882] tracking-widest text-[14px] leading-[1.2] font-bold hidden md:block">
                    Our Team Member
                    </h4>
                    <h1 className='uppercase text-center text-white text-5xl leading-[1.5] font-bold hidden md:block'>
                    Active Team Members
                    </h1>
                    <div className='w-[65px] h-[5px] bg-[#45F882] mt-2 mx-auto' style={{ clipPath: 'polygon(0% 0%, 100% 0%, 93.846% 100%, 6.154% 100%, 0% 0%)' }}></div>
                </div>
                <div className='flex flex-row justify-center w-[1300px] h-[406.6px] space-x-6'>
                    <div className='relative flex flex-col w-[290px] h-[376.6px] bg-[#1c242f] mb-[30px] text-center border-solid border border-[#27313f] px-[25px] pt-[30px] pb-[35px] rounded-[12px] overflow-hidden' style={{ boxShadow: '0px 3px 13px 0px rgba(0, 0, 0, 0.17)' }}>
                        <div className='absolute left-0 top-[-60px] w-[70px] h-[320px] rotate-[-55deg] -z-0 bg-[#45f882]'></div>
                        <div className='mb-[33px] w-[224px] h-[224px] rounded-full z-[1] border-white border-[3px] flex mx-auto'>
                            <div className='absolute left-[75px] top-[-50px] w-[1px] h-[260px] rotate-[-55deg] -z-[1] bg-[#45f882]'></div>
                            <img src={t1} className='object-cover h-full'/>
                            <div className='absolute right-[75px] top-[-50px] w-[1px] h-[260px] rotate-[55deg] -z-[1] bg-[#45f882]'></div>
                        </div>
                        <div className='flex flex-col'>
                            <h4 className='uppercase text-white text-[20px] tracking-wider font-extrabold'>killer master</h4>
                            <h5 className='text-[16px] font-semibold text-[#45f882]'>Blockchain Expert</h5>
                        </div>
                        <div className='absolute right-0 top-[-60px] w-[70px] h-[320px] rotate-[55deg] -z-0 bg-[#45f882]'></div>
                    </div>
                    <div className='relative flex flex-col w-[290px] h-[376.6px] bg-[#1c242f] mb-[30px] text-center border-solid border border-[#27313f] px-[25px] pt-[30px] pb-[35px] rounded-[12px] overflow-hidden' style={{ boxShadow: '0px 3px 13px 0px rgba(0, 0, 0, 0.17)' }}>
                        <div className='absolute left-0 top-[-60px] w-[70px] h-[320px] rotate-[-55deg] -z-0 bg-[#45f882]'></div>
                        <div className='mb-[33px] w-[224px] h-[224px] rounded-full z-[1] border-white border-[3px] flex mx-auto'>
                            <div className='absolute left-[75px] top-[-50px] w-[1px] h-[260px] rotate-[-55deg] -z-[1] bg-[#45f882]'></div>
                            <img src={t2} className='object-cover h-full'/>
                            <div className='absolute right-[75px] top-[-50px] w-[1px] h-[260px] rotate-[55deg] -z-[1] bg-[#45f882]'></div>
                        </div>
                        <div className='flex flex-col'>
                            <h4 className='uppercase text-white text-[20px] tracking-wider font-extrabold'>Tanu Mark</h4>
                            <h5 className='text-[16px] font-semibold text-[#45f882]'>Developer</h5>
                        </div>
                        <div className='absolute right-0 top-[-60px] w-[70px] h-[320px] rotate-[55deg] -z-0 bg-[#45f882]'></div>
                    </div>
                    <div className='relative flex flex-col w-[290px] h-[376.6px] bg-[#1c242f] mb-[30px] text-center border-solid border border-[#27313f] px-[25px] pt-[30px] pb-[35px] rounded-[12px] overflow-hidden' style={{ boxShadow: '0px 3px 13px 0px rgba(0, 0, 0, 0.17)' }}>
                        <div className='absolute left-0 top-[-60px] w-[70px] h-[320px] rotate-[-55deg] -z-0 bg-[#45f882]'></div>
                        <div className='mb-[33px] w-[224px] h-[224px] rounded-full z-[1] border-white border-[3px] flex mx-auto'>
                            <div className='absolute left-[75px] top-[-50px] w-[1px] h-[260px] rotate-[-55deg] -z-[1] bg-[#45f882]'></div>
                            <img src={t3} className='object-cover h-full'/>
                            <div className='absolute right-[75px] top-[-50px] w-[1px] h-[260px] rotate-[55deg] -z-[1] bg-[#45f882]'></div>
                        </div>
                        <div className='flex flex-col'>
                            <h4 className='uppercase text-white text-[20px] tracking-wider font-extrabold'>Thompson scot</h4>
                            <h5 className='text-[16px] font-semibold text-[#45f882]'>Art Director</h5>
                        </div>
                        <div className='absolute right-0 top-[-60px] w-[70px] h-[320px] rotate-[55deg] -z-0 bg-[#45f882]'></div>
                    </div>
                    <div className='relative flex flex-col w-[290px] h-[376.6px] bg-[#1c242f] mb-[30px] text-center border-solid border border-[#27313f] px-[25px] pt-[30px] pb-[35px] rounded-[12px] overflow-hidden' style={{ boxShadow: '0px 3px 13px 0px rgba(0, 0, 0, 0.17)' }}>
                        <div className='absolute left-0 top-[-60px] w-[70px] h-[320px] rotate-[-55deg] -z-0 bg-[#45f882]'></div>
                        <div className='mb-[33px] w-[224px] h-[224px] rounded-full z-[1] border-white border-[3px] flex mx-auto'>
                            <div className='absolute left-[75px] top-[-50px] w-[1px] h-[260px] rotate-[-55deg] -z-[1] bg-[#45f882]'></div>
                            <img src={t4} className='object-cover h-full'/>
                            <div className='absolute right-[75px] top-[-50px] w-[1px] h-[260px] rotate-[55deg] -z-[1] bg-[#45f882]'></div>
                        </div>
                        <div className='flex flex-col'>
                            <h4 className='uppercase text-white text-[20px] tracking-wider font-extrabold'>Shakh Danial</h4>
                            <h5 className='text-[16px] font-semibold text-[#45f882]'>Crypto Advisor</h5>
                        </div>
                        <div className='absolute right-0 top-[-60px] w-[70px] h-[320px] rotate-[55deg] -z-0 bg-[#45f882]'></div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Team