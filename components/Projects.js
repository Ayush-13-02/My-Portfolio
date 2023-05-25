// import React from "react";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Pagination, Navigation } from "swiper";
import p1 from '../img/p2.png';
import p2 from '../img/p1.png';
import Image from 'next/image'
// import required modules
import Link from "next/link";
import { connectDB } from "../Utils/database";
import Project from "../Model/Project";

const ProjectComp = ({ ProjectData }) => {

    //console.log("Projects:- ", ProjectData);

    const scrollNextPage = (id) => {
        const gallery = document.querySelector(id);
        const gallery_scroller = gallery.querySelector('.cards');
        gallery_scroller.scrollBy(1500, 0);
    }
    const scrollPrevPage = (id) => {
        const gallery = document.querySelector(id);
        const gallery_scroller = gallery.querySelector('.cards');
        gallery_scroller.scrollBy(-1500, 0);
    }
    return (
        <div id="project" className="container pt-20 mx-auto">
            <h2 className="mb-1 text-6xl font-semibold -tracking-tight text-center text-gray-200 lg:text-7xl duration-150 ease-in-out">
                Projects
            </h2>
            <div id="scrollcontrol" className="w-full mt-16">
                <div className="cards w-full flex snap-x overflow-x-auto scrollhide delay-200 scroll-smooth gap-2 px-3 pt-[10px] pb-4">
                    {
                        ProjectData.map((item) => {
                            return (
                                <div key={item._id} className="shadow-inner m-8 ml-0 p-2 pb-0">
                                    <div className="flex h-[260px] w-80 p-2 relative overflow-hidden bg-white rounded border group">
                                        <div className="flex flex-col">
                                            <img src={item.Picture} className="w-full h-full relative z-10" />
                                            <h3 className="group-hover:h-auto h-0 duration-200 opacity-0 group-hover:opacity-100 group-hover:p-2 text-lg font-medium text-gray-900">{item.Name}</h3>
                                        </div>
                                        <div className="flex-col group-hover:w-10 w-0 duration-200 opacity-0 group-hover:opacity-100 group-hover:m-2">
                                            <a href={item.Deploy} className="bg-gray-200 w-8 h-8 p-2 m-1 rounded fas fa-link"></a>
                                            <a href={item.Share} className="bg-gray-200 w-8 h-8 p-2 m-1 rounded fa-brands fa-github"></a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='flex gap-x-2 mx-4 lg:mx-16'>
                    <button className='w-8 h-8 flex flex-0 items-center justify-center object-cover border-2 font-extrabold rounded active:scale-[0.98] rotate-180' onClick={() => scrollPrevPage('#scrollcontrol')}>
                        <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='fill-slate-200 '><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
                    </button>
                    <button className='w-8 h-8 flex flex-0 items-center justify-center object-cover border-2 font-extrabold rounded active:scale-[0.98]' onClick={() => scrollNextPage('#scrollcontrol')}>
                        <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='fill-slate-200'><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
                    </button>
                </div>
            </div>
        </div>
    );
}


export default ProjectComp;
