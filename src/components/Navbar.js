import React from 'react';
import { LuSearch } from "react-icons/lu";
import { FaRegEdit } from "react-icons/fa";
import { CgMenuLeft } from "react-icons/cg";
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from 'react';
import img from '../logo mykd.png';
import image from "../image/main.png";
import bg from "../image/background.jpg";
import coin1 from "../image/slider/slider_shape01.png";
import coin2 from "../image/slider/slider_shape02.png";
import coin3 from "../image/slider/slider_shape03.png";
import coin4 from "../image/slider/slider_shape04.png";
import textimg from "../image/text_gradient_bg.png"

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <style>
        {`
          .coin {
            position: absolute;
            transition: opacity 0.5s;
          }

          .animate-shapeBlinker {
            animation: shapeBlinker 2s infinite;
          }

          @keyframes shapeBlinker {
            0% { opacity: 0.1; }
            50% { opacity: 1; }
            100% { opacity: 0.1; }
          }
        `}
      </style>

    <div className="relative bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
      <nav className="bg-transparent bg-opacity-60">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className='cursor-pointer flex items-center flex-1'>
            <img src={img} width="180px" height="30px" alt="Logo" />
          </div>

          <ul className="flex space-x-10 justify-center mx-auto items-center">
            <li className="text-[#45F882] text-[15px] font-serif py-7 cursor-pointer transition-all duration-200 relative hidden lg:block">
              HOME
              <div className='bg-[#45F882] absolute h-[1px] w-[30px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 -rotate-45'></div>
            </li>
            <li className="text-white text-[15px] font-serif py-7 hover:text-[#45F882] cursor-pointer transition-all duration-200 relative group hidden lg:block">
              ABOUT US
              <div className='bg-[#45F882] absolute h-[1px] w-[30px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-200 ease-in-out group-hover:-rotate-45 group-hover:opacity-100'></div>
            </li>
            <li className="text-white text-[15px] font-serif py-7 hover:text-[#45F882] cursor-pointer transition-all duration-200 relative group hidden lg:block">
              TOURNAMENT
              <div className='bg-[#45F882] absolute h-[1px] w-[30px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-200 ease-in-out group-hover:-rotate-45 group-hover:opacity-100'></div>
            </li>
            <li className="text-white text-[15px] font-serif py-7 hover:text-[#45F882] cursor-pointer transition-all duration-200 relative group hidden lg:block">
              PAGES
              <div className='bg-[#45F882] absolute h-[1px] w-[30px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-200 ease-in-out group-hover:-rotate-45 group-hover:opacity-100'></div>
            </li>
            <li className="text-white text-[15px] font-serif py-7 hover:text-[#45F882] cursor-pointer transition-all duration-200 relative group hidden lg:block">
              NEWS
              <div className='bg-[#45F882] absolute h-[1px] w-[30px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-200 ease-in-out group-hover:-rotate-45 group-hover:opacity-100'></div>
            </li>
            <li className="text-white text-[15px] font-serif py-7 hover:text-[#45F882] cursor-pointer transition-all duration-200 relative group hidden lg:block">
              CONTACT
              <div className='bg-[#45F882] absolute h-[1px] w-[30px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-200 ease-in-out group-hover:-rotate-45 group-hover:opacity-100'></div>
            </li>
          </ul>

          <div className='flex items-center flex-1 justify-end space-x-4'>
            <LuSearch className='text-white font-bold text-[18px] hover:text-[#45F882]' />
            <div className='bg-white w-1 h-8'></div>
            <div className="relative">
              <svg preserveAspectRatio="none" viewBox="0 0 157 48" fill="none" className='w-40 h-15 group cursor-pointer'>
                <path className="transition-all duration-200 ease-in-out group-hover:fill-[#45F882]" fillRule="evenodd" clipRule="evenodd" d="M131.75 2L155.75 25L131.75 47L148.75 24L131.75 2Z" fill="#45F882" stroke="#45F882" strokeWidth="2"></path>
                <path className="transition-all duration-200 ease-in-out group-hover:fill-[#45F882]" fillRule="evenodd" clipRule="evenodd" d="M25 1L1 24.5111L25 47L8 23.4889L25 1Z" fill="#45F882" stroke="#45F882" strokeWidth="2"></path>
                <path className="transition-all duration-200 ease-in-out group-hover:fill-[#45F882]" fillRule="evenodd" clipRule="evenodd" d="M24.75 1L0.75 25L23.75 47H131.75L155.75 25L131.75 1H24.75Z" stroke="#45F882" strokeWidth="1.5"></path>
                <foreignObject x="35" y="15" width="40" height="40" className="transition-colors duration-200 ease-in-out">
                    <FaRegEdit className='text-white text-[16px] font-semibold group-hover:text-black' />
                </foreignObject>
                <text x="60" y="30" fill="#FFFFFF" fontSize="15" fontFamily="Arial, sans-serif" className='font-semibold transition-colors duration-200 ease-in-out group-hover:fill-black'>~SIGN IN</text>
              </svg>
            </div>
          </div>

          <div 
            className='flex items-center justify-end' 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}>
            {!isHovered && <CgMenuLeft className='text-white w-20 h-[50px]' />}
            {isHovered && <HiOutlineMenu className='text-white w-20 h-[50px]' />}
          </div>
        </div>
      </nav>

      <section className="relative w-full h-[100vh] max-w-[1080px] flex flex-col lg:flex-row justify-between items-center mx-auto overflow-x-hidden">
        <div className="space-y-10 pb-40">
          <div className="absolute w-[1080px] h-[45vh] overflow-hidden">
            <div className='flex flex-col opacity-15'>
              <img src={coin1} className='coin animate-shapeBlinker w-[35px] opacity-10' style={{ top: '5%', left: '20%' }} />
              <img src={coin2} className='coin animate-shapeBlinker w-[35px] opacity-15' style={{ bottom: '10%', right: '90%' }} />
              <img src={coin3} className='coin animate-shapeBlinker w-[35px] opacity-10' style={{ top: '20%', right: '0%' }} />
              <img src={coin4} className='coin animate-shapeBlinker w-[61px] opacity-15' style={{ top: '0%', left: '45%' }} />
            </div>
          </div>
          
          <div className="relative rounded-sm text-[18px] p-2 top-4" style={{ width: "250px"}}>
            <div className="absolute inset-0 bg-cover bg-center opacity-30 rounded-sm"
              style={{ backgroundImage: `url(${textimg})` }}></div>
            <h4 className="relative text-[#45F882] uppercase tracking-widest font-bold z-10">
              live gaming
            </h4>
          </div>
          <h1 className="font-bold text-[80px] uppercase text-white" style={{ textShadow: '-1px 5px 0px rgba(69, 248, 130, 0.66)' }}>Streaming</h1>
          <div className="w-6 h-1 bg-[#45F882]"></div>
          <p className="text-[18px] leading-7 text-white opacity-70">Discover, Watch, Repeat. Game On Anytime — Watch the Best, Play the Rest.</p>
          <div className="relative">
            <svg preserveAspectRatio="none" viewBox="0 0 157 48" fill="none" className='w-40 h-15 group cursor-pointer'>
              <path className="transition-all duration-200 ease-in-out group-hover:fill-[#45F882]" fillRule="evenodd" clipRule="evenodd" d="M131.75 2L155.75 25L131.75 47L148.75 24L131.75 2Z" fill="#45F882" stroke="#45F882" strokeWidth="2"></path>
              <path className="transition-all duration-200 ease-in-out group-hover:fill-[#45F882]" fillRule="evenodd" clipRule="evenodd" d="M25 1L1 24.5111L25 47L8 23.4889L25 1Z" fill="#45F882" stroke="#45F882" strokeWidth="2"></path>
              <path className="transition-all duration-200 ease-in-out group-hover:fill-[#45F882]" fillRule="evenodd" clipRule="evenodd" d="M24.75 1L0.75 25L23.75 47H131.75L155.75 25L131.75 1H24.75Z" stroke="#45F882" strokeWidth="1.5"></path>
              <text x="30" y="30" fill="#FFFFFF" fontSize="15" fontFamily="Arial, sans-serif" className='font-semibold transition-colors duration-200 ease-in-out group-hover:fill-black uppercase'>contact us</text>
            </svg>
          </div>
        </div>
        <img src={image} alt="Pirate" className="w-full h-[600px] max-w-[680px] pl-40 pb-28" />
      </section>

      <div className="w-[103%] absolute left-0 right-0">
        <img src="../hero-shape.svg" alt="" className="w-full object-fill scale-x-100" />
      </div>
    </div>

    </>
  );
}

export default Navbar;



// import React from 'react';
// import img from '../logo mykd.png';
// import { LuSearch } from "react-icons/lu";
// import { FaRegEdit } from "react-icons/fa";
// import { CgMenuLeft } from "react-icons/cg";
// import { HiOutlineMenu } from "react-icons/hi";
// import { useState } from 'react';

// const Navbar = () => {

//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div>
//       <nav className="bg-black">
//         <div className="container mx-auto flex items-center justify-between py-4 px-6">
//           <div className='cursor-pointer flex items-center flex-1'>
//             <img src={img} width="180px" height="30px" alt="Logo" />
//           </div>

//           <ul className="flex space-x-10 justify-center mx-auto items-center">
//             <li className="text-[#45F882] text-[15px] font-serif py-7 cursor-pointer transition-all duration-200 relative hidden lg:block">
//               HOME
//               <div className='bg-[#45F882] absolute h-[1px] w-[30px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 -rotate-45'></div>
//             </li>
//             <li className="text-white text-[15px] font-serif py-7 hover:text-[#45F882] cursor-pointer transition-all duration-200 relative group hidden lg:block">
//               ABOUT US
//               <div className='bg-[#45F882] absolute h-[1px] w-[30px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-200 ease-in-out group-hover:-rotate-45 group-hover:opacity-100'></div>
//             </li>
//             <li className="text-white text-[15px] font-serif py-7 hover:text-[#45F882] cursor-pointer transition-all duration-200 relative group hidden lg:block">
//               TOURNAMENT
//               <div className='bg-[#45F882] absolute h-[1px] w-[30px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-200 ease-in-out group-hover:-rotate-45 group-hover:opacity-100'></div>
//             </li>
//             <li className="text-white text-[15px] font-serif py-7 hover:text-[#45F882] cursor-pointer transition-all duration-200 relative group hidden lg:block">
//               PAGES
//               <div className='bg-[#45F882] absolute h-[1px] w-[30px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-200 ease-in-out group-hover:-rotate-45 group-hover:opacity-100'></div>
//             </li>
//             <li className="text-white text-[15px] font-serif py-7 hover:text-[#45F882] cursor-pointer transition-all duration-200 relative group hidden lg:block">
//               NEWS
//               <div className='bg-[#45F882] absolute h-[1px] w-[30px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-200 ease-in-out group-hover:-rotate-45 group-hover:opacity-100'></div>
//             </li>
//             <li className="text-white text-[15px] font-serif py-7 hover:text-[#45F882] cursor-pointer transition-all duration-200 relative group hidden lg:block">
//               CONTACT
//               <div className='bg-[#45F882] absolute h-[1px] w-[30px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-200 ease-in-out group-hover:-rotate-45 group-hover:opacity-100'></div>
//             </li>
//           </ul>

//           <div className='flex items-center flex-1 justify-end space-x-4'>
//             <LuSearch className='text-white font-bold text-[18px] hover:text-[#45F882]' />
//             <div className='bg-white w-1 h-8'></div>
//             <div className="relative">
//               <svg preserveAspectRatio="none" viewBox="0 0 157 48" fill="none" className='w-40 h-15 group cursor-pointer'>
//                 <path className="transition-all duration-200 ease-in-out group-hover:fill-[#45F882]" fillRule="evenodd" clipRule="evenodd" d="M131.75 2L155.75 25L131.75 47L148.75 24L131.75 2Z" fill="#45F882" stroke="#45F882" strokeWidth="2"></path>
//                 <path className="transition-all duration-200 ease-in-out group-hover:fill-[#45F882]" fillRule="evenodd" clipRule="evenodd" d="M25 1L1 24.5111L25 47L8 23.4889L25 1Z" fill="#45F882" stroke="#45F882" strokeWidth="2"></path>
//                 <path className="transition-all duration-200 ease-in-out group-hover:fill-[#45F882]" fillRule="evenodd" clipRule="evenodd" d="M24.75 1L0.75 25L23.75 47H131.75L155.75 25L131.75 1H24.75Z" stroke="#45F882" strokeWidth="1.5"></path>
//                 <foreignObject x="35" y="15" width="40" height="40" className="transition-colors duration-200 ease-in-out">
//                     <FaRegEdit className='text-white text-[16px] font-semibold group-hover:text-black' />
//                 </foreignObject>
//                 <text x="60" y="30" fill="#FFFFFF" fontSize="15" fontFamily="Arial, sans-serif" className='font-semibold transition-colors duration-200 ease-in-out group-hover:fill-black'>~SIGN IN</text>
//               </svg>
//             </div>
//           </div>

//           <div 
//               className='flex items-center justify-end' 
//               onMouseEnter={() => setIsHovered(true)} 
//               onMouseLeave={() => setIsHovered(false)}>
//               {!isHovered && <CgMenuLeft className='text-white w-20 h-[50px]' />}
//               {isHovered && <HiOutlineMenu className='text-white w-20 h-[50px]' />}
//           </div>
          
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;