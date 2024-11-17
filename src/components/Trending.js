import React, {useRef} from 'react';
import fire from "../image/fire.png";
import trending from "../image/trending.png"
import tre1 from "../image/trending/nft_avatar01.png";
import tre_1 from "../image/trending/nft_img04.jpg";
import tre2 from "../image/trending/nft_avatar02.png";
import tre_2 from "../image/trending/nft_img05.jpeg";
import tre3 from "../image/trending/nft_avatar03.png";
import tre_3 from "../image/trending/nft_img06.jpg";
import tre_4 from "../image/trending/nft_img07.jpeg";
import tre_5 from "../image/trending/nft_img08.jpeg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaEthereum } from "react-icons/fa";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Trending = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

  return (
    <div>
        <section className='relative h-[759.2px] overflow-hidden flex pt-[120px] pb-[90px] bg-[#0C0F14]'>
            <div className='w-[1300px] h-[549.2px] px-[15px] flex mx-auto flex-col'>
                <div className='flex flex-row mb-[50px] w-[1270px] h-[43.2px] justify-between'>
                    <h2 className='uppercase text-white text-[36px] font-bold flex flex-row gap-[18px] items-center'>Top Trending <img src={fire} className='w-[35px] h-[43.8px]'/></h2>
                    <div className='flex flex-row gap-[13px] items-center'>
                        <button ref={prevRef} className='w-[40px] h-[40px] rounded-full items-center justify-center flex border-2 border-[#adb0bc] hover:border-[#45F882] bg-transparent'>
                            <FaChevronLeft className="text-[rgb(173,176,188)] hover:text-[#45F882] font-[18px]" />
                        </button>
                        <button ref={nextRef} className='w-[40px] h-[40px] rounded-full items-center justify-center flex border-2 border-[#adb0bc] hover:border-[#45F882] bg-transparent'>
                            <FaChevronRight className="text-[#adb0bc] hover:text-[#45F882] font-[18px]" />
                        </button>
                    </div>
                </div>
                <div className='flex flex-row w-[1270px] h-[456px]'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={20}
                        loop={true}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={{
                            prevEl: prevRef.current,    
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div style={{backgroundImage : `url(${trending})`}} className='bg-cover bg-center w-[403px] h-[426px] px-[20px] py-[24px]'>
                                <div className='flex items-center mb-[15px]'>
                                    <div className='flex gap-[9px] flex-row'>
                                        <div className='w-[45px] h-[45px] rounded-full'>
                                            <img src={tre1} className='bg-cover bg-center'/>
                                        </div>
                                        <div className='flex flex-col'>
                                            <h4 className='text-[16px] font-semibold capitalize mb-[2px] text-[#fcfcfc]'>Crypto Max</h4>
                                            <h6 className='text-[12px] font-semibold underline text-[#adb0bc]'>@Jon Max</h6>
                                        </div>
                                    </div>
                                    <div className='text-[#c9c9c9] ml-auto font-bold text-[20px]'>
                                        <CiHeart/>
                                    </div>
                                </div>
                                <div className='w-[363px] h-[249px]'>
                                    <img src={tre_1} className='bg-cover bg-center rounded-lg'/>
                                </div>
                                <div className='block w-full h-[1px] mt-[14px] mb-[13px]' style={{background: `linear-gradient(90deg, transparent 0%, #383d44 50%, transparent 100%)`}}></div>
                                <div className='w-[363px] h-[69.6px] flex flex-col'>
                                    <div className='flex flex-row'>
                                        <div className='flex flex-col'>
                                            <h6 className='capitalize text-[13px] mb-[2px] font-semibold text-[#adb0bc] justify-start flex'>Last Bid</h6>
                                            <h6 className='flex items-center text-[18px] font-semibold text-[#e8e8e8] uppercase'>
                                                <FaEthereum className='mr-[5px] text-[#ffbe18]'/>1.002 <span className='text-[#ffbe18] font-bold ml-[5px]'>ETH</span>
                                            </h6>
                                        </div>
                                        <button className='flex items-center gap-2 w-[79.6px] h-[40px] bg-[#ffbe18] text-[#201f2a] capitalize font-semibold rounded-[6px] text-[18px] ml-auto mr-[35px] py-[11px] px-[14px]'>
                                        Bid <MdOutlineArrowRightAlt  className='font-extrabold w-[18px] h-[20px]'/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{backgroundImage : `url(${trending})`}} className='bg-cover bg-center w-[403px] h-[426px] px-[20px] py-[24px]'>
                                <div className='flex items-center mb-[15px]'>
                                    <div className='flex gap-[9px] flex-row'>
                                        <div className='w-[45px] h-[45px] rounded-full'>
                                            <img src={tre2} className='bg-cover bg-center'/>
                                        </div>
                                        <div className='flex flex-col'>
                                            <h4 className='text-[16px] font-semibold capitalize mb-[2px] text-[#fcfcfc]'>Golden Crypto</h4>
                                            <h6 className='text-[12px] font-semibold underline text-[#adb0bc]'>@Jon Max</h6>
                                        </div>
                                    </div>
                                    <div className='text-[#c9c9c9] ml-auto font-bold text-[20px]'>
                                        <CiHeart/>
                                    </div>
                                </div>
                                <div className='w-[363px] h-[249px]'>
                                    <img src={tre_2} className='bg-cover bg-center rounded-lg'/>
                                </div>
                                <div className='block w-full h-[1px] mt-[14px] mb-[13px]' style={{background: `linear-gradient(90deg, transparent 0%, #383d44 50%, transparent 100%)`}}></div>
                                <div className='w-[363px] h-[69.6px] flex flex-col'>
                                    <div className='flex flex-row'>
                                        <div className='flex flex-col'>
                                            <h6 className='capitalize text-[13px] mb-[2px] font-semibold text-[#adb0bc] justify-start flex'>Last Bid</h6>
                                            <h6 className='flex items-center text-[18px] font-semibold text-[#e8e8e8] uppercase'>
                                                <FaEthereum className='mr-[5px] text-[#ffbe18]'/>1.004 <span className='text-[#ffbe18] font-bold ml-[5px]'>ETH</span>
                                            </h6>
                                        </div>
                                        <button className='flex items-center gap-2 w-[79.6px] h-[40px] bg-[#ffbe18] text-[#201f2a] capitalize font-semibold rounded-[6px] text-[18px] ml-auto mr-[35px] py-[11px] px-[14px]'>
                                        Bid <MdOutlineArrowRightAlt  className='font-extrabold w-[18px] h-[20px]'/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{backgroundImage : `url(${trending})`}} className='bg-cover bg-center w-[403px] h-[426px] px-[20px] py-[24px]'>
                                <div className='flex items-center mb-[15px]'>
                                    <div className='flex gap-[9px] flex-row'>
                                        <div className='w-[45px] h-[45px] rounded-full'>
                                            <img src={tre3} className='bg-cover bg-center'/>
                                        </div>
                                        <div className='flex flex-col'>
                                            <h4 className='text-[16px] font-semibold capitalize mb-[2px] text-[#fcfcfc]'>Black Crypto</h4>
                                            <h6 className='text-[12px] font-semibold underline text-[#adb0bc]'>@Jon Max</h6>
                                        </div>
                                    </div>
                                    <div className='text-[#c9c9c9] ml-auto font-bold text-[20px]'>
                                        <CiHeart/>
                                    </div>
                                </div>
                                <div className='w-[363px] h-[249px]'>
                                    <img src={tre_3} className='bg-cover bg-center rounded-lg'/>
                                </div>
                                <div className='block w-full h-[1px] mt-[14px] mb-[13px]' style={{background: `linear-gradient(90deg, transparent 0%, #383d44 50%, transparent 100%)`}}></div>
                                <div className='w-[363px] h-[69.6px] flex flex-col'>
                                    <div className='flex flex-row'>
                                        <div className='flex flex-col'>
                                            <h6 className='capitalize text-[13px] mb-[2px] font-semibold text-[#adb0bc] justify-start flex'>Last Bid</h6>
                                            <h6 className='flex items-center text-[18px] font-semibold text-[#e8e8e8] uppercase'>
                                                <FaEthereum className='mr-[5px] text-[#ffbe18]'/>1.005 <span className='text-[#ffbe18] font-bold ml-[5px]'>ETH</span>
                                            </h6>
                                        </div>
                                        <button className='flex items-center gap-2 w-[79.6px] h-[40px] bg-[#ffbe18] text-[#201f2a] capitalize font-semibold rounded-[6px] text-[18px] ml-auto mr-[35px] py-[11px] px-[14px]'>
                                        Bid <MdOutlineArrowRightAlt  className='font-extrabold w-[18px] h-[20px]'/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{backgroundImage : `url(${trending})`}} className='bg-cover bg-center w-[403px] h-[426px] px-[20px] py-[24px]'>
                                <div className='flex items-center mb-[15px]'>
                                    <div className='flex gap-[9px] flex-row'>
                                        <div className='w-[45px] h-[45px] rounded-full'>
                                            <img src={tre2} className='bg-cover bg-center'/>
                                        </div>
                                        <div className='flex flex-col'>
                                            <h4 className='text-[16px] font-semibold capitalize mb-[2px] text-[#fcfcfc]'>Luck Crypto</h4>
                                            <h6 className='text-[12px] font-semibold underline text-[#adb0bc]'>@Jon Max</h6>
                                        </div>
                                    </div>
                                    <div className='text-[#c9c9c9] ml-auto font-bold text-[20px]'>
                                        <CiHeart/>
                                    </div>
                                </div>
                                <div className='w-[363px] h-[249px]'>
                                    <img src={tre_4} className='bg-cover bg-center rounded-lg'/>
                                </div>
                                <div className='block w-full h-[1px] mt-[14px] mb-[13px]' style={{background: `linear-gradient(90deg, transparent 0%, #383d44 50%, transparent 100%)`}}></div>
                                <div className='w-[363px] h-[69.6px] flex flex-col'>
                                    <div className='flex flex-row'>
                                        <div className='flex flex-col'>
                                            <h6 className='capitalize text-[13px] mb-[2px] font-semibold text-[#adb0bc] justify-start flex'>Last Bid</h6>
                                            <h6 className='flex items-center text-[18px] font-semibold text-[#e8e8e8] uppercase'>
                                                <FaEthereum className='mr-[5px] text-[#ffbe18]'/>1.005 <span className='text-[#ffbe18] font-bold ml-[5px]'>ETH</span>
                                            </h6>
                                        </div>
                                        <button className='flex items-center gap-2 w-[79.6px] h-[40px] bg-[#ffbe18] text-[#201f2a] capitalize font-semibold rounded-[6px] text-[18px] ml-auto mr-[35px] py-[11px] px-[14px]'>
                                        Bid <MdOutlineArrowRightAlt  className='font-extrabold w-[18px] h-[20px]'/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{backgroundImage : `url(${trending})`}} className='bg-cover bg-center w-[403px] h-[426px] px-[20px] py-[24px]'>
                                <div className='flex items-center mb-[15px]'>
                                    <div className='flex gap-[9px] flex-row'>
                                        <div className='w-[45px] h-[45px] rounded-full'>
                                            <img src={tre3} className='bg-cover bg-center'/>
                                        </div>
                                        <div className='flex flex-col'>
                                            <h4 className='text-[16px] font-semibold capitalize mb-[2px] text-[#fcfcfc]'>King Crypto</h4>
                                            <h6 className='text-[12px] font-semibold underline text-[#adb0bc]'>@Jon Max</h6>
                                        </div>
                                    </div>
                                    <div className='text-[#c9c9c9] ml-auto font-bold text-[20px]'>
                                        <CiHeart/>
                                    </div>
                                </div>
                                <div className='w-[363px] h-[249px]'>
                                    <img src={tre_5} className='bg-cover bg-center rounded-lg'/>
                                </div>
                                <div className='block w-full h-[1px] mt-[14px] mb-[13px]' style={{background: `linear-gradient(90deg, transparent 0%, #383d44 50%, transparent 100%)`}}></div>
                                <div className='w-[363px] h-[69.6px] flex flex-col'>
                                    <div className='flex flex-row'>
                                        <div className='flex flex-col'>
                                            <h6 className='capitalize text-[13px] mb-[2px] font-semibold text-[#adb0bc] justify-start flex'>Last Bid</h6>
                                            <h6 className='flex items-center text-[18px] font-semibold text-[#e8e8e8] uppercase'>
                                                <FaEthereum className='mr-[5px] text-[#ffbe18]'/>1.005 <span className='text-[#ffbe18] font-bold ml-[5px]'>ETH</span>
                                            </h6>
                                        </div>
                                        <button className='flex items-center gap-2 w-[79.6px] h-[40px] bg-[#ffbe18] text-[#201f2a] capitalize font-semibold rounded-[6px] text-[18px] ml-auto mr-[35px] py-[11px] px-[14px]'>
                                        Bid <MdOutlineArrowRightAlt  className='font-extrabold w-[18px] h-[20px]'/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Trending