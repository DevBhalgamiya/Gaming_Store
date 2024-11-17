import React, { useRef, useState }  from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Keyboard } from 'swiper/modules';

import project1 from '../image/project/1.jpg';
import project2 from '../image/project/2.jpg';
import project3 from '../image/project/3.jpg';
import project4 from '../image/project/4.jpg';
import project5 from '../image/project/5.jpg';
import project6 from '../image/project/6.jpg';
import project7 from '../image/project/7.jpg';
import project8 from '../image/project/8.jpg';

const Project = () => {
    const swiperRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [circlePosition, setCirclePosition] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        e.preventDefault();
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        const container = e.currentTarget;
        const containerRect = container.getBoundingClientRect();
        const containerWidth = containerRect.width;
        const circleWidth = 24; 
        const mouseX = e.clientX - containerRect.left;
        const newPosition = Math.max(0, Math.min(mouseX - circleWidth / 2, containerWidth - circleWidth));

        setCirclePosition(newPosition);

        
        const slideIndex = Math.floor((newPosition / (containerWidth - circleWidth)) * swiperRef.current.swiper.slides.length);
        swiperRef.current.swiper.slideTo(slideIndex);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

  return (
    <section className='relative w-full h-[747.4px] pt-[120px] pb-[140px] flex flex-col overflow-hidden bg-[#09090b]'>
      <div className='w-[1080px] h-[399.4px] flex px-[15px] mx-auto'>
        <div className='w-[1400px] h-[399.4px] flex mb-[75px]'>
          <div className='flex flex-col mt-[70px] w-[420px] h-[260.54px]'>
            <h3 className='uppercase text-[45px] text-white font-bold'>PROJECTS MYKD</h3>
            <h4 className='uppercase text-[14px] text-[#45f882] font-bold tracking-[2px]'>Our Latest Gallery</h4>
          </div>
          <div className='w-[1080px] h-[399.4px] overflow-hidden p-0 flex mx-auto'>
            <Swiper
              slidesPerView={4}
              spaceBetween={10}
              keyboard={{ enabled: true }}
              pagination={{ clickable: true }}
              modules={[Keyboard]}
              className="mySwiper"
              ref={swiperRef}
            >
                
                <SwiperSlide className='w-[253px] h-[399.4px]'>
                    <img src={project1} className='object-cover w-[253px] h-full' alt='project1' />
                </SwiperSlide>
                <SwiperSlide className='w-[253px] h-[330.54px]'>
                    <img src={project2} className='object-cover w-[253px] h-full' alt='project1' />
                </SwiperSlide>
                <SwiperSlide className='w-[253px] h-[330.54px]'>
                    <img src={project3} className='object-cover w-[253px] h-full' alt='project1' />
                </SwiperSlide>
                <SwiperSlide className='w-[253px] h-[330.54px]'>
                    <img src={project4} className='object-cover w-[253px] h-full' alt='project1' />
                </SwiperSlide>
                <SwiperSlide className='w-[253px] h-[330.54px]'>
                    <img src={project5} className='object-cover w-[253px] h-full' alt='project1' />
                </SwiperSlide>
                <SwiperSlide className='w-[253px] h-[330.54px]'>
                    <img src={project6} className='object-cover w-[253px] h-full' alt='project1' />
                </SwiperSlide>
                <SwiperSlide className='w-[253px] h-[330.54px]'>
                    <img src={project7} className='object-cover w-[253px] h-full' alt='project1' />
                </SwiperSlide>
                <SwiperSlide className='w-[253px] h-[330.54px]'>
                    <img src={project8} className='object-cover w-[253px] h-full' alt='project1' />
                </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className='relative w-[100%] h-[2px] bg-[#45f882] mt-[50px]' onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseDown={handleMouseDown}>
        <div className='absolute w-[24px] h-[24px] bg-[#45f882] rounded-full cursor-pointer z-[1] top-[-11px]' style={{ left: circlePosition }}></div>
      </div>
    </section>
  );
}

export default Project;