import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import p1 from '../img/p2.png';
import p2 from '../img/p1.png';
import Image from 'next/image'
// import required modules
import { Pagination, Navigation } from "swiper";
import Link from "next/link";

export default function Project() {
    const project = [
        {
            id: 1,
            link: 'https://ayush-13-02.github.io/YouTube-React/',
            Title: 'YouTube Clone',
            points: ['Responsive', 'Frontend with React.js', 'Backend with Node.js'],
            image: p1
        }, {
            id: 2,
            link: 'https://ayush-13-02.github.io/Tic-Tac--React/',
            Title: 'Tic Tac Toe Game',
            points: ['Responsive', 'React.js', 'Play with Computer or Human'],
            image: p2
        }, {
            id: 3,
            link:'#',
            Title: 'Ebook Library',
            points: ['Responsive', 'Django and HTML', 'Upload, download, save and preview book', 'You can do Comments and Reviews'],
            image: p1
        }
    ]
    return (
        <div id="project" className="ml-4 mr-2">
            <h2 className="my-12 text-6xl font-semibold -tracking-tight text-center text-gray-200 lg:text-7xl duration-150 ease-in-out">
                Projects
            </h2>
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
                    project.map((item) => {
                        return (
                            <div key={item.id} className="max-w-6xl mx-auto my-16 relative">
                                <div className="w-full mx-auto shadowp">
                                    <SwiperSlide>
                                        <div className={"w-full flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between"}>
                                            <div className="w-[90%] p-4 lg:w-5/12 lg:p-16 text-gray-300">
                                                <div className="w-full">
                                                    <h5 className="mb-8 text-3xl font-bold">
                                                        {item.Title}
                                                    </h5>
                                                    <br />
                                                    <div className="text-lg">
                                                        <div className="feature-wrapper">
                                                            {
                                                                item.points.map((point, id) => {
                                                                    return (
                                                                        <div key={id} className="flex mb-2">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                                            <p className='ml-2'>{point}</p>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="flex mt-10">
                                                        <Link href={item.link} target="_blank">
                                                        <span className="flex shadowp px-4 py-3 m-2 items-center justify-center text-[#ff014f] font-semibold duration-500 ease-in-out hover:bg-[#1d2023] hover:filter hover:opacity-100 hover:-translate-y-1 cursor-pointer active:translate-y-2 text-sm md:text-base">
                                                            <span>VIEW PROJECT</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                                        </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-[90%] lg:w-7/12 flex items-center justify-center mt-4 lg:mt-0">
                                                <div className='lg:p-16 pl-0'>
                                                    <Image src={item.image} width="480" height="400" className='flex-auto flex-grow-0 shrink-0 rounded-lg shadow-xl min-w-0 max-w-lg' alt="..." />
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
