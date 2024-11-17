import React, {useState} from 'react';
import { FaPlay } from "react-icons/fa";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import bg from "../image/bg_journey.jpeg";
import fun_fact from "../image/fun_fact.png";
import fun_factbg from "../image/fun_factshape.png";
import trophy from "../image/trophy.png";
import shadow from "../image/trophy_shadow.png";
import streamer1 from "../image/team/streamer1.1.jpg";
import streamer2 from "../image/team/streamer2.2.jpg";
import streamer3 from "../image/team/streamer3.3.jpg";
import streamer4 from "../image/team/streamer4.4.jpg";
import s1 from "../image/team/s1.1.png";
import s2 from "../image/team/s2.2.png";
import s3 from "../image/team/s3.3.png";
import s4 from "../image/team/s4.4.png";
import "../components/Journey.css";

const Journey = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (  
    <div>
      <section className="relative h-[1749px] overflow-hidden bg-cover bg-center space-y-80" style={{ backgroundImage: `url(${bg})` }}>
        <div className="relative w-full max-w-[1080px] h-[558px] mt-16 mx-auto pt-10 flex flex-col md:flex-row">
          <div className='flex flex-col justify-center w-full h-[558px] md:max-w-[calc(100%-500px)] sm:my-16'>
            <h1 className='uppercase text-white text-[45px] font-bold tracking-normal leading-[1]'>The Journey Of The <br/> NFT Sites</h1>
            <div className='w-[65px] h-[5px] bg-[#45F882] mt-6' style={{ clipPath: 'polygon(0% 0%, 100% 0%, 93.846% 100%, 6.154% 100%, 0% 0%)' }}></div>
            <p className='text-[#ADB0BC] text-[16px] font-[600] leading-[1.75em] mt-6 flex justify-start items-start'>Gorem npsum dolor sit amet consectetur adipiscing elit. Duis elementum sollici tudin augue euismod. Nulla ullamcorper nunc. Morbi pharetra mi tellus mollis tincidunt massa venenatis. Etiam lacinia ipsumultrices.</p>
            <div className='flex flex-row mt-10 space-x-12'>
                <div className='flex flex-col'>
                    <h2 className='uppercase text-[30px] text-white font-semibold'>40k</h2>
                    <h2 className='text-[14px] text-center text-[#adb0bc] font-semibold'>Member</h2>
                </div>
                <div className='flex flex-col'>
                    <h2 className='uppercase text-[30px] text-white font-semibold'>12k</h2>
                    <h2 className='text-[14px] text-center text-[#adb0bc] font-semibold'>NFT</h2>
                </div>
                <div className='flex flex-col'>
                    <h2 className='uppercase text-[30px] text-white font-semibold'>30k</h2>
                    <h2 className='text-[14px] text-center text-[#adb0bc] font-semibold'>Artist</h2>
                </div>
            </div>
            <div className='flex flex-row space-x-8'>
                <div className="relative mt-10">
                    <svg preserveAspectRatio="none" viewBox="0 0 157 48" fill="none" className='w-40 h-15 group cursor-pointer'>
                    <path className="transition-all duration-200 ease-in-out group-hover:fill-[#45F882]" fillRule="evenodd" clipRule="evenodd" d="M131.75 2L155.75 25L131.75 47L148.75 24L131.75 2Z" fill="#45F882" stroke="#45F882" strokeWidth="2"></path>
                    <path className="transition-all duration-200 ease-in-out group-hover:fill-[#45F882]" fillRule="evenodd" clipRule="evenodd" d="M25 1L1 24.5111L25 47L8 23.4889L25 1Z" fill="#45F882" stroke="#45F882" strokeWidth="2"></path>
                    <path className="transition-all duration-200 ease-in-out group-hover:fill-[#45F882]" fillRule="evenodd" clipRule="evenodd" d="M24.75 1L0.75 25L23.75 47H131.75L155.75 25L131.75 1H24.75Z" stroke="#45F882" strokeWidth="1.5"></path>
                    <text x="30" y="30" fill="#FFFFFF" fontSize="15" fontFamily="Arial, sans-serif" className='font-semibold transition-colors duration-200 ease-in-out group-hover:fill-[#201f2a] uppercase'>Read more</text>
                    </svg>
                </div>
                <div className='flex flex-row space-x-4'>
                    <div className='w-12 h-12 rounded-full border-2 mt-10 flex items-center justify-center'>
                        <FaPlay className='text-[#45F882]'/>
                    </div>
                    <h4 className='text-[13px] text-white tracking-wide font-bold pt-[52px]'>How It Work</h4>
                </div>
            </div>
          </div>
          <div className='flex flex-col w-full h-[558px] md:max-w-[calc(100%-500px)] sm:my-16 relative'>
            <img 
              className='relative w-[479px] h-[415px] ml-20 mt-14 bg-cover bg-center z-[2]' 
              src={fun_factbg} 
            />
            <img 
              className='absolute w-[315px] h-[459px] z-[3] bg-cover bg-center mt-3 ml-40' 
              src={fun_fact} 
              onMouseEnter={() => setIsHovered(true)} 
              onMouseLeave={() => setIsHovered(false)} 
            />
            <div 
              className='absolute w-[479px] h-[415px] ml-28 mt-6 bg-[#45F882]' 
              style={{ 
                transform: isHovered ? 'rotate(0deg)' : 'rotate(8deg)', 
                transition: 'transform 0.3s ease-out', 
                zIndex: 1
              }} 
            ></div>
            <div className='flex flex-row items-end justify-end mt-6 space-x-2'>
              <div className='flex flex-col text-right mb-[22px]'>
                <h3 className='uppercase text-white text-[22px] font-semibold'>Tournament</h3>
                <h4 className='uppercase text-[#adb0bc] text-[14px] font-semibold'>Development</h4>
              </div>
              <div className='relative w-[95px] h-[96px] flex items-center justify-center'>
                <img src={shadow} className='absolute bg-cover bg-center w-[95px] h-[96px] top-0 left-0'/>
                <img src={trophy} className='absolute bg-cover bg-center w-[38px] h-[40px]'/>
              </div>
            </div>
          </div>
        </div>
        <div className='pl-[15px] pr-[15px] h-[781px] mx-auto relative w-[1100px] max-w-[1080px] pt-[95px] pb-[120px]'>
            <h4 className="uppercase text-center text-[#45F882] tracking-widest text-[14px] leading-[1.2] font-bold hidden md:block">
              our top streamer
            </h4>
            <h1 className='uppercase text-center text-white text-5xl leading-[1.5] font-bold hidden md:block'>
              top rated streamers
            </h1>
            <div className='w-[65px] h-[5px] bg-[#45F882] mt-2 mx-auto' style={{ clipPath: 'polygon(0% 0%, 100% 0%, 93.846% 100%, 6.154% 100%, 0% 0%)' }}></div>
            <div className='w-[960px] flex flex-row mx-auto h-[370px] mt-32 space-x-6'>
              <div className='relative w-[225px] h-[340px] flex flex-col card'>
                <div className='wrapper absolute inset-0 z-[1]'>
                  <img className='inset-0 w-full h-full object-cover rounded-lg transition-opacity duration-300' src={streamer1} alt="Streamer" />
                </div>
                <img className='absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 character' src={s1} alt="Character" />
                <h3 className='absolute text-center uppercase text-white text-[20px] font-bold z-[2] left-[20px] right-[20px] bottom-[28px] pointer-events-none title'>Sky Hunter</h3>
              </div>
              <div className='relative w-[225px] h-[340px] flex flex-col card'>
                <div className='wrapper absolute inset-0 z-[1]'>
                  <img className='inset-0 w-full h-full object-cover rounded-lg transition-opacity duration-300' src={streamer2} alt="Streamer" />
                </div>
                <img className='absolute inset-0 w-full h-full object-cover rounded-lg opacity-0 transition-opacity duration-300 character' src={s2} alt="Character" />
                <h3 className='absolute text-center uppercase text-white text-[20px] font-bold z-[2] left-[20px] right-[20px] bottom-[28px] pointer-events-none title'>Phoenix</h3>
              </div>
              <div className='relative w-[225px] h-[340px] flex flex-col card'>
                <div className='wrapper absolute inset-0 z-[1]'>
                  <img className='inset-0 w-full h-full object-cover rounded-lg transition-opacity duration-300' src={streamer3} alt="Streamer" />
                </div>
                <img className='absolute inset-0 w-full h-full object-cover rounded-lg opacity-0 transition-opacity duration-300 character' src={s3} alt="Character" />
                <h3 className='absolute text-center uppercase text-white text-[20px] font-bold z-[2] left-[20px] right-[20px] bottom-[28px] pointer-events-none title'>Max Jett</h3>
              </div>
              <div className='relative w-[225px] h-[340px] flex flex-col card'>
                <div className='wrapper absolute inset-0 z-[1]'>
                  <img className='inset-0 w-full h-full object-cover rounded-lg transition-opacity duration-300' src={streamer4} alt="Streamer" />
                </div>
                <img className='absolute inset-0 w-full h-full object-cover rounded-lg opacity-0 transition-opacity duration-300 character' src={s4} alt="Character" />
                <h3 className='absolute text-center uppercase text-white text-[20px] font-bold z-[2] left-[20px] right-[20px] bottom-[28px] pointer-events-none title'>Brimstone</h3>
              </div>
            </div>
            <div className='flex items-center justify-center space-x-2'>
              <FaChevronLeft className="text-white w-5 h-5" />
              <div className='w-2 h-2 rounded-full bg-white'></div>
              <div className='w-2 h-2 rounded-full bg-[#45F882]'></div>
              <div className='w-2 h-2 rounded-full bg-white'></div>
              <div className='w-2 h-2 rounded-full bg-white'></div>
              <div className='w-2 h-2 rounded-full bg-white'></div>
              <div className='w-2 h-2 rounded-full bg-white'></div>
              <div className='w-2 h-2 rounded-full bg-white'></div>
              <FaChevronRight className="text-white w-5 h-5"/>
            </div>
        </div>
      </section>
    </div>
  );
}

export default Journey;

// import React, { useState } from 'react';
// import bg from "../image/bg_journey.jpeg";
// import { FaPlay, FaChevronRight, FaChevronLeft } from "react-icons/fa";
// import fun_fact from "../image/fun_fact.png";
// import fun_factbg from "../image/fun_factshape.png";
// import trophy from "../image/trophy.png";
// import shadow from "../image/trophy_shadow.png";
// import streamer1 from "../image/team/streamer1.png";
// import streamer2 from "../image/team/streamer2.png";
// import streamer3 from "../image/team/streamer3.png";
// import streamer4 from "../image/team/streamer4.png";
// import s1 from "../image/team/s1.png";
// import s2 from "../image/team/s2.png";
// import s3 from "../image/team/s3.png";
// import s4 from "../image/team/s4.png";
// import "../components/Journey.css";

// const Journey = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const streamers = [
//     { streamer: streamer1, character: s1, name: "Sky Hunter" },
//     { streamer: streamer2, character: s2, name: "Phoenix" },
//     { streamer: streamer3, character: s3, name: "Max Jett" },
//     { streamer: streamer4, character: s4, name: "Brimstone" },
//     { streamer: streamer1, character: s1, name: "Sky Hunter" },
//     { streamer: streamer2, character: s2, name: "Phoenix" },
//     { streamer: streamer3, character: s3, name: "Max Jett" },
//     { streamer: streamer4, character: s4, name: "Brimstone" },
//   ];

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % streamers.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + streamers.length) % streamers.length);
//   };

//   return (
//     <div>
//       <section className="relative h-[1749px] overflow-hidden bg-cover bg-center space-y-80" style={{ backgroundImage: `url(${bg})` }}>
//         <div className="relative w-full max-w-[1080px] h-[558px] mt-16 mx-auto pt-10 flex flex-col md:flex-row">
//           <div className='flex flex-col justify-center w-full h-[558px] md:max-w-[calc(100%-500px)] sm:my-16'>
//             <h1 className='uppercase text-white text-[45px] font-bold tracking-normal leading-[1]'>The Journey Of The <br/> NFT Sites</h1>
//             <div className='w-[65px] h-[5px] bg-[#45F882] mt-6' style={{ clipPath: 'polygon(0% 0%, 100% 0%, 93.846% 100%, 6.154% 100%, 0% 0%)' }}></div>
//             <p className='text-[#ADB0BC] text-[16px] font-[600] leading-[1.75em] mt-6 flex justify-start items-start'>Gorem npsum dolor sit amet consectetur adipiscing elit. Duis elementum sollici tudin augue euismod. Nulla ullamcorper nunc. Morbi pharetra mi tellus mollis tincidunt massa venenatis. Etiam lacinia ipsumultrices.</p>
//             <div className='flex flex-row mt-10 space-x-12'>
//                 <div className='flex flex-col'>
//                     <h2 className='uppercase text-[30px] text-white font-semibold'>40k</h2>
//                     <h2 className='text-[14px] text-center text-[#adb0bc] font-semibold'>Member</h2>
//                 </div>
//                 <div className='flex flex-col'>
//                     <h2 className='uppercase text-[30px] text-white font-semibold'>12k</h2>
//                     <h2 className='text-[14px] text-center text-[#adb0bc] font-semibold'>NFT</h2>
//                 </div>
//                 <div className='flex flex-col'>
//                     <h2 className='uppercase text-[30px] text-white font-semibold'>30k</h2>
//                     <h2 className='text-[14px] text-center text-[#adb0bc] font-semibold'>Artist</h2>
//                 </div>
//             </div>
//             <div className='flex flex-row space-x-8'>
//                 <div className="relative mt-10">
//                     <svg preserveAspectRatio="none" viewBox="0 0 157 48" fill="none" className='w-40 h-15 group cursor-pointer'>
//                     <path className="transition-all duration-200 ease-in-out group-hover:fill-[#45F882]" fillRule="evenodd" clipRule="evenodd" d="M131.75 2L155.75 25L131.75 47L148.75 24L131.75 2Z" fill="#45F882" stroke="#45F882" strokeWidth="2"></path>
//                     <path className="transition-all duration-200 ease-in-out group-hover:fill-[#45F882]" fillRule="evenodd" clipRule="evenodd" d="M25 1L1 24.5111L25 47L8 23.4889L25 1Z" fill="#45F882" stroke="#45F882" strokeWidth="2"></path>
//                     <path className="transition-all duration-200 ease-in-out group-hover:fill-[#45F882]" fillRule="evenodd" clipRule="evenodd" d="M24.75 1L0.75 25L23.75 47H131.75L155.75 25L131.75 1H24.75Z" stroke="#45F882" strokeWidth="1.5"></path>
//                     <text x="30" y="30" fill="#FFFFFF" fontSize="15" fontFamily="Arial, sans-serif" className='font-semibold transition-colors duration-200 ease-in-out group-hover:fill-[#201f2a] uppercase'>Read more</text>
//                     </svg>
//                 </div>
//                 <div className='flex flex-row space-x-4'>
//                     <div className='w-12 h-12 rounded-full border-2 mt-10 flex items-center justify-center'>
//                         <FaPlay className='text-[#45F882]'/>
//                     </div>
//                     <h4 className='text-[13px] text-white tracking-wide font-bold pt-[52px]'>How It Work</h4>
//                 </div>
//             </div>
//           </div>
//           <div className='flex flex-col w-full h-[558px] md:max-w-[calc(100%-500px)] sm:my-16 relative'>
//             <img 
//               className='relative w-[479px] h-[415px] ml-20 mt-14 bg-cover bg-center z-[2]' 
//               src={fun_factbg} 
//             />
//             <img 
//               className='absolute w-[315px] h-[459px] z-[3] bg-cover bg-center mt-3 ml-40' 
//               src={fun_fact} 
//               onMouseEnter={() => setIsHovered(true)} 
//               onMouseLeave={() => setIsHovered(false)} 
//             />
//             <div 
//               className='absolute w-[479px] h-[415px] ml-28 mt-6 bg-[#45F882]' 
//               style={{ 
//                 transform: isHovered ? 'rotate(0deg)' : 'rotate(8deg)', 
//                 transition: 'transform 0.3s ease-out', 
//                 zIndex: 1
//               }} 
//             ></div>
//             <div className='flex flex-row items-end justify-end mt-6 space-x-2'>
//               <div className='flex flex-col text-right mb-[22px]'>
//                 <h3 className='uppercase text-white text-[22px] font-semibold'>Tournament</h3>
//                 <h4 className='uppercase text-[#adb0bc] text-[14px] font-semibold'>Development</h4>
//               </div>
//               <div className='relative w-[95px] h-[96px] flex items-center justify-center'>
//                 <img src={shadow} className='absolute bg-cover bg-center w-[95px] h-[96px] top-0 left-0'/>
//                 <img src={trophy} className='absolute bg-cover bg-center w-[38px] h-[40px]'/>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className='pl-[15px] pr-[15px] h-[781px] mx-auto relative w-[1100px] max-w-[1080px] pt-[95px] pb-[120px]'>
//             <h4 className="uppercase text-center text-[#45F882] tracking-widest text-xs leading-[1.2] font-bold hidden md:block">
//               our top streamer
//             </h4>
//             <h1 className='uppercase text-center text-white text-5xl leading-[1.5] font-bold hidden md:block'>
//               top rated streamers
//             </h1>
//             <div className='w-[65px] h-[5px] bg-[#45F882] mt-2 mx-auto' style={{ clipPath: 'polygon(0% 0%, 100% 0%, 93.846% 100%, 6.154% 100%, 0% 0%)' }}></div>
//             <div className='w-[960px] mx-auto h-[370px] mt-32'>
//               <div className='flex transition-transform duration-300' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//                 {streamers.map((streamer, index) => (
//                   <div key={index} className='relative w-[225px] h-[340px] flex-shrink-0 flex flex-col card'>
//                     <div className='wrapper absolute inset-0 z-[1]'>
//                       <img className='inset-0 w-full h-full object-cover rounded-lg transition-opacity duration-300' src={streamer.streamer} alt="Streamer" />
//                     </div>
//                     <img className='absolute inset-0 w-full h-full object-cover rounded-lg opacity-0 transition-opacity duration-300 character' src={streamer.character} alt="Character" />
//                     <h3 className='absolute text-center uppercase text-white text-[20px] font-bold z-[2] left-[20px] right-[20px] bottom-[28px] pointer-events-none title'>{streamer.name}</h3>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className='flex items-center justify-center space-x-2 mt-8'>
//               <FaChevronLeft className="text-white w-5 h-5 cursor-pointer" onClick={handlePrev} />
//               {streamers.map((_, index) => (
//                 <div
//                   key={index}
//                   className={`w-2 h-2 rounded-full cursor-pointer ${currentIndex === index ? 'bg-[#45F882]' : 'bg-white'}`}
//                   onClick={() => setCurrentIndex(index)}
//                 ></div>
//               ))}
//               <FaChevronRight className="text-white w-5 h-5 cursor-pointer" onClick={handleNext} />
//             </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Journey;
