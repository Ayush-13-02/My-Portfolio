import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import p1 from '../img/p2.png';
import p2 from '../img/Project1.png';
import Image from 'next/image'
// import required modules
import { Pagination, Navigation } from "swiper";

export default function Project() {
    const project = [
        {
            Title: 'YouTube Clone using React.js and Node.js',
            points: ['Responsive', 'Theme builder', 'Certification', 'Stats &amp; reports'],
            image: p1
        }, {
            Title: 'You Clone using React.js and Node.js',
            points: ['Responsive', 'Theme builder', 'Certification', 'Stats &amp; reports'],
            image: p2
        }, {
            Title: 'Tube Clone using React.js and Node.js',
            points: ['Responsive', 'Theme builder', 'Certification', 'Stats &amp; reports'],
            image: p1
        }
    ]
    return (
        <div id="project" className="ml-4 mr-2">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="max-w-6xl mySwiper my-4 scroll-smooth duration-500 delay-500 shadowp m-1"
            >
                {
                    project.map((item, i) => {
                        return (
                            <div key={i} className="max-w-6xl mx-auto my-16 relative">
                                <div className="w-full mx-auto shadowp">
                                    <SwiperSlide>
                                        <div className={"w-full flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between"}>
                                            <div className="w-[90%] p-4 lg:w-5/12 lg:p-16 text-gray-300">
                                                <div className="w-full">
                                                    <h5 className="mb-8 text-3xl font-bold">
                                                        {item.Title}
                                                    </h5>
                                                    <br/>
                                                    <div className="text-lg">
                                                        <div className="feature-wrapper">
                                                            <div className="flex mb-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                                <p className='ml-2'>Responsive</p>
                                                            </div>
                                                            <div className="flex mb-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                                <p className='ml-2'>Theme builder</p>
                                                            </div>
                                                            <div className="flex mb-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                                <p className='ml-2'>Certification</p>
                                                            </div>
                                                            <div className="flex">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                                <p className='ml-2'>Stats &amp; reports</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex mt-10">
                                                        <a href="#" className="flex shadowp px-4 py-3 m-2 items-center justify-center text-[#ff014f] font-semibold duration-500 ease-in-out hover:bg-[#1d2023] hover:filter hover:opacity-100 hover:-translate-y-1 cursor-pointer active:translate-y-2">
                                                            <span>LIKE THIS</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-5"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                                                        </a>
                                                        <a href="#" className="flex shadowp px-4 py-3 m-2 items-center justify-center text-[#ff014f] font-semibold duration-500 ease-in-out hover:bg-[#1d2023] hover:filter hover:opacity-100 hover:-translate-y-1 cursor-pointer active:translate-y-2">
                                                            <span>VIEW PROJECT</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-[90%] lg:w-7/12 flex items-center justify-center mt-4 lg:mt-0">
                                                <div className='lg:p-16 pl-0'>
                                                    <Image src={item.image} width="580" height="435" className='rounded-lg shadow-xl min-w-0 max-w-lg' alt="..." />
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            </div>
                        )
                    })
                }
            </Swiper>
        </div>
    );
}
