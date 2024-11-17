import React from 'react';
import bg from "../image/match_bg.jpeg";
import team1 from "../image/team/team.png";
import team2 from "../image/team/team2.png";
import team3 from "../image/team/team3.png";
import team4 from "../image/team/team4.png";
import team5 from "../image/team/team5.png";
import team6 from "../image/team/team6.png";

const Match = () => {

  return (  
    <div>
      <section className="relative h-[921.31px] overflow-hidden bg-cover bg-center pt-[120px] pb-[85px]" style={{ backgroundImage: `url(${bg})` }}>
        <div className="relative w-[960px] max-w-[960px] h-[716.31px] mx-auto pl-[15px] pr-[15px]">
          <div className='w-[560px] h-[160px] mx-auto'>
            <h4 className="uppercase text-center text-[#45F882] tracking-widest text-[14px] leading-[1.2] font-bold hidden md:block">
              Matches List
            </h4>
            <h1 className='uppercase text-center text-white text-5xl leading-[1.5] font-bold hidden md:block'>
              upcoming Matches
            </h1>
            <div className='w-[65px] h-[5px] bg-[#45F882] mt-2 mx-auto' style={{ clipPath: 'polygon(0% 0%, 100% 0%, 93.846% 100%, 6.154% 100%, 0% 0%)' }}></div>
          </div>
          <div className='flex flex-col space-y-[60px]'>
            <div className='flex flex-col relative'>
              <div className='flex items-center w-[930px] h-[125.44px]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill='#0f1c23' stroke='#2c2b2b' strokeWidth="1px" fillRule='evenodd' viewBox="0 0 1112 150">
                  <path 
                    id="match-svg" 
                    className="cls-1" 
                    d="M456,3383l-40,75,40,74h788l12-14,61,1,12,13h158l40-74-40-75-777,1-13,14-62-1-14-14H456Z" 
                    transform="translate(-415.5 -3382.5)" 
                    style={{ strokeDasharray: '2425, 2427', strokeDashoffset: 0 }}
                  />
                </svg>
              </div>
              <div className='absolute z-[1] w-[810px] h-[90.44px] flex top-0 bottom-0 left-0 right-0 mx-auto my-4'>
                <div className='mr-[20px] border-solid border-[3px] border-[#34353d] hover:border-[#45f882] w-[90px] h-[90px] rounded-[15px] bg-[#14242c] flex items-center justify-center'>
                  <img src={team1} className='bg-cover bg-center w-[60px] h-[65px]'/>
                </div>
                <div className='flex items-center justify-center w-[590px] h-[90.44px] space-x-6'>
                  <div className='flex flex-col text-right'>
                    <h4 className='uppercase text-[14px] text-[#45f882] font-bold tracking-wide'>Dota2</h4>
                    <h3 className='uppercase text-[26px] text-white font-bold tracking-wide'>Sky Hunter</h3>
                  </div>
                  <div className='w-[130px] h-[85px] flex items-center justify-center border-solid border-[4px] border-[#3f3f49] bg-[#0D181F] rounded-[15px]'>
                    <h2 className='uppercase text-white font-bold text-[2rem]'>08:30</h2>
                  </div>
                  <div className='flex flex-col text-left'>
                    <h4 className='uppercase text-[14px] text-[#45f882] font-bold tracking-wide'>Dota2</h4>
                    <h3 className='uppercase text-[26px] text-white font-bold tracking-wide'>The Tadium</h3>
                  </div>
                </div>
                <div className='ml-[20px] border-solid border-[3px] border-[#34353d] hover:border-[#45f882] w-[90px] h-[90px] rounded-[15px] bg-[#14242c] flex items-center justify-center'>
                  <img src={team2} className='bg-cover bg-center w-[60px] h-[65px]'/>
                </div>
              </div>
              <div className='px-0 -pb-[24px] text-center overflow-hidden mx-auto flex items-center max-w-[287px] h-[24px]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="287" height="24" viewBox="0 0 287 24" fill='#101d25' fillRule='evenodd'>
                  <path id="bottom-svg1" d="M1104,3760l-20,24H837l-20-24" transform="translate(-817 -3760)"></path>
                </svg>
                <h4 className='absolute uppercase text-[13px] text-white font-semibold w-[287px]'>October 7, 2024, 8:30 pm</h4>
              </div>
            </div>
            <div className='flex flex-col relative'>
              <div className='flex items-center w-[930px] h-[125.44px]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill='#0f1c23' stroke='#2c2b2b' strokeWidth="1px" fillRule='evenodd' viewBox="0 0 1112 150">
                  <path 
                    id="match-svg" 
                    className="cls-1" 
                    d="M456,3383l-40,75,40,74h788l12-14,61,1,12,13h158l40-74-40-75-777,1-13,14-62-1-14-14H456Z" 
                    transform="translate(-415.5 -3382.5)" 
                    style={{ strokeDasharray: '2425, 2427', strokeDashoffset: 0 }}
                  />
                </svg>
              </div>
              <div className='absolute z-[1] w-[810px] h-[90.44px] flex top-0 bottom-0 left-0 right-0 mx-auto my-4'>
                <div className='mr-[20px] border-solid border-[3px] border-[#34353d] hover:border-[#45f882] w-[90px] h-[90px] rounded-[15px] bg-[#14242c] flex items-center justify-center'>
                  <img src={team3} className='bg-cover bg-center w-[60px] h-[65px]'/>
                </div>
                <div className='flex items-center justify-center w-[590px] h-[90.44px] space-x-6'>
                  <div className='flex flex-col text-right'>
                    <h4 className='uppercase text-[14px] text-[#45f882] font-bold tracking-wide'>Valorant</h4>
                    <h3 className='uppercase text-[26px] text-white font-bold tracking-wide'>Killer 7</h3>
                  </div>
                  <div className='w-[130px] h-[85px] flex items-center justify-center border-solid border-[4px] border-[#3f3f49] bg-[#0D181F] rounded-[15px]'>
                    <h2 className='uppercase text-white font-bold text-[2rem]'>05:30</h2>
                  </div>
                  <div className='flex flex-col text-left'>
                    <h4 className='uppercase text-[14px] text-[#45f882] font-bold tracking-wide'>Valorant</h4>
                    <h3 className='uppercase text-[26px] text-white font-bold tracking-wide'>Black MX</h3>
                  </div>
                </div>
                <div className='ml-[20px] border-solid border-[3px] border-[#34353d] hover:border-[#45f882] w-[90px] h-[90px] rounded-[15px] bg-[#14242c] flex items-center justify-center'>
                  <img src={team4} className='bg-cover bg-center w-[60px] h-[65px]'/>
                </div>
              </div>
              <div className='px-0 -pb-[24px] text-center overflow-hidden mx-auto flex items-center max-w-[287px] h-[24px]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="287" height="24" viewBox="0 0 287 24" fill='#101d25' fillRule='evenodd'>
                  <path id="bottom-svg1" d="M1104,3760l-20,24H837l-20-24" transform="translate(-817 -3760)"></path>
                </svg>
                <h4 className='absolute uppercase text-[13px] text-white font-semibold w-[287px]'>October 9, 2024, 5:30 pm</h4>
              </div>
            </div>
            <div className='flex flex-col relative'>
              <div className='flex items-center w-[930px] h-[125.44px]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill='#0f1c23' stroke='#2c2b2b' strokeWidth="1px" fillRule='evenodd' viewBox="0 0 1112 150">
                  <path 
                    id="match-svg" 
                    className="cls-1" 
                    d="M456,3383l-40,75,40,74h788l12-14,61,1,12,13h158l40-74-40-75-777,1-13,14-62-1-14-14H456Z" 
                    transform="translate(-415.5 -3382.5)" 
                    style={{ strokeDasharray: '2425, 2427', strokeDashoffset: 0 }}
                  />
                </svg>
              </div>
              <div className='absolute z-[1] w-[810px] h-[90.44px] flex top-0 bottom-0 left-0 right-0 mx-auto my-4'>
                <div className='mr-[20px] border-solid border-[3px] border-[#34353d] hover:border-[#45f882] w-[90px] h-[90px] rounded-[15px] bg-[#14242c] flex items-center justify-center'>
                  <img src={team5} className='bg-cover bg-center w-[60px] h-[65px]'/>
                </div>
                <div className='flex items-center justify-center w-[590px] h-[90.44px] space-x-6'>
                  <div className='flex flex-col text-right'>
                    <h4 className='uppercase text-[14px] text-[#45f882] font-bold tracking-wide'>Pubg Pc</h4>
                    <h3 className='uppercase text-[26px] text-white font-bold tracking-wide'>Killer 7</h3>
                  </div>
                  <div className='w-[130px] h-[85px] flex items-center justify-center border-solid border-[4px] border-[#3f3f49] bg-[#0D181F] rounded-[15px]'>
                    <h2 className='uppercase text-white font-bold text-[2rem]'>09:30</h2>
                  </div>
                  <div className='flex flex-col text-left'>
                    <h4 className='uppercase text-[14px] text-[#45f882] font-bold tracking-wide'>Pubg Pc</h4>
                    <h3 className='uppercase text-[26px] text-white font-bold tracking-wide'>Black MX</h3>
                  </div>
                </div>
                <div className='ml-[20px] border-solid border-[3px] border-[#34353d] hover:border-[#45f882] w-[90px] h-[90px] rounded-[15px] bg-[#14242c] flex items-center justify-center'>
                  <img src={team6} className='bg-cover bg-center w-[60px] h-[65px]'/>
                </div>
              </div>
              <div className='px-0 -pb-[24px] text-center overflow-hidden mx-auto flex items-center max-w-[287px] h-[24px]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="287" height="24" viewBox="0 0 287 24" fill='#101d25' fillRule='evenodd'>
                  <path id="bottom-svg1" d="M1104,3760l-20,24H837l-20-24" transform="translate(-817 -3760)"></path>
                </svg>
                <h4 className='absolute uppercase text-[13px] text-white font-semibold w-[287px]'>October 10, 2024, 9:30 pm</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Match;