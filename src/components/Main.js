import React from 'react';
import bg from "../image/team/d1.png";
import team1 from "../image/team/win1.png"
import team2 from "../image/team/win2.png"

const Main = () => {
  return (
    <div>
      <section className="relative -mt-20 min-h-screen overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
        <div className="relative w-11/12 max-w-[1080px] mt-16 mx-auto pt-10">
          <h4 className="uppercase text-center text-[#45F882] tracking-widest text-[14px] leading-[1.2] font-bold hidden md:block">
            latest result for
          </h4>
          <h1 className='uppercase text-center text-white text-5xl leading-[1.5] font-bold hidden md:block'>
            Experience just for
          </h1>
          <div className='w-[65px] h-[5px] bg-[#45F882] mt-2 mx-auto' style={{ clipPath: 'polygon(0% 0%, 100% 0%, 93.846% 100%, 6.154% 100%, 0% 0%)' }}></div>
          <h2 className='uppercase text-center text-[#45F882] tracking-wide text-2xl mt-20 font-bold hidden md:block'>Premier league</h2>
          <div className='flex w-full min-h-[10vh] mt-10 justify-evenly flex-row'>
            <div className="flex items-center space-x-4">
              <div className="flex flex-col space-y-2">
                <h3 className='uppercase text-white text-2xl font-bold tracking-wide'>Black Hunt</h3>
                <h3 className='text-[#45F882] text-[14px] font-semibold tracking-wide leading-6 flex justify-end'>$500 000</h3>
              </div>
              <div className='flex items-center -space-x-6'>
                <div className='w-[112px] h-[112px] rounded-full bg-[#171717] border-[3px] border-[#45F882] flex items-center justify-center z-10'>
                  <img src={team1} className='max-w-[70px]' />
                </div>
                <div className="relative -mt-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="135" height="75" viewBox="0 0 135 75" className="absolute top-0 left-0">
                    <path id="rectangle" className="cls-1" d="M924,1194H809v75H924s20-37.5,20-37.63C944,1231.5,924,1194,924,1194Z" transform="translate(-809 -1194)" fill="#45F882"></path>
                  </svg>
                  <h3 className="relative z-10 font-bold uppercase text-4xl text-[#20202a] text-center pt-4 pl-8">Win</h3>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className='flex items-center space-x-1'>
                <div className="relative -mt-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="135" height="75" viewBox="0 0 135 75" className="absolute top-0 left-0 rotate-180">
                    <path id="rectangle" class="cls-1" d="M924,1194H809v75H924s20-37.5,20-37.63C944,1231.5,924,1194,924,1194Z" transform="translate(-809 -1194)" fill="#45F882"></path>
                  </svg>
                  <h3 className="relative z-10 font-bold uppercase text-4xl text-[#20202a] text-center pt-4 pl-8">2nd</h3>
                </div>
                <div className='w-[112px] h-[112px] rounded-full bg-[#171717] border-[3px] border-[#45F882] flex items-center justify-center z-10'>
                  <img src={team2} className='max-w-[70px]' />
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className='uppercase text-white text-2xl font-bold tracking-wide'>sky Hunter</h3>
                <h3 className='text-[#45F882] text-[14px] font-semibold tracking-wide leading-6 flex justify-start'>$300 000</h3>
              </div>
            </div>
          </div>
          <h4 className='uppercase text-white text-center mt-10 font-medium tracking-wide hidden md:block'>December 19, 2023 | 9:50 am</h4>
          <h3 className='uppercase text-[#45F882] text-center mt-1 font-semibold tracking-wide hidden md:block'>grand dubai</h3>
          <div className="flex items-center justify-center mt-10">
            <svg preserveAspectRatio="none" viewBox="0 0 157 48" fill="none" className='w-40 h-15 group cursor-pointer'>
              <path className="transition-all duration-200 ease-in-out group-hover:fill-[#45F882]" fillRule="evenodd" clipRule="evenodd" d="M131.75 2L155.75 25L131.75 47L148.75 24L131.75 2Z" fill="#45F882" stroke="#45F882" strokeWidth="2"></path>
              <path className="transition-all duration-200 ease-in-out group-hover:fill-[#45F882]" fillRule="evenodd" clipRule="evenodd" d="M25 1L1 24.5111L25 47L8 23.4889L25 1Z" fill="#45F882" stroke="#45F882" strokeWidth="2"></path>
              <path className="transition-all duration-200 ease-in-out group-hover:fill-[#45F882]" fillRule="evenodd" clipRule="evenodd" d="M24.75 1L0.75 25L23.75 47H131.75L155.75 25L131.75 1H24.75Z" stroke="#45F882" strokeWidth="1.5"></path>
              <text x="30" y="30" fill="#FFFFFF" fontSize="15" fontFamily="Arial, sans-serif" className='font-semibold transition-colors duration-200 ease-in-out group-hover:fill-[#201f2a] uppercase'>read more</text>
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
