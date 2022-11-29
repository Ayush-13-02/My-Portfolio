import React, { useState } from 'react'
import p1 from '../img/p2.png'
import Image from 'next/image'
function Projects({ scroll }) {
    const project = [
        {
            Title:'YouTube Clone using React.js and Node.js',
            points:['Responsive','Theme builder','Certification','Stats &amp; reports'],
            image:p1
        },{
            Title:'YouTube Clone using React.js and Node.js',
            points:['Responsive','Theme builder','Certification','Stats &amp; reports'],
            image:p1
        },{
            Title:'YouTube Clone using React.js and Node.js',
            points:['Responsive','Theme builder','Certification','Stats &amp; reports'],
            image:p1
        }
    ]
    const [id, setId] = useState(0);
    return (
        <div ref={scroll} className='flex items-center justify-center flex-col'>
            <div className="my-4 mt-24 mb-1 text-6xl font-semibold -tracking-tight text-center text-gray-200 lg:text-7xl duration-150 ease-in-out">
                My Projects
            </div>

            <div className="max-w-6xl mx-auto my-16 relative">
                <div className="w-full mx-auto">
                    <div className="w-full shadowp">
                        <div className='w-full flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between'>
                            <div className="w-[90%] p-4 lg:w-5/12 lg:p-16 text-gray-300">
                                <div className="w-full">
                                    <h5 className="mb-8 text-3xl font-bold">
                                        {project[id].Title}
                                    </h5>
                                    <br />
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
                                    <Image src={p1} width="580" height="435" className='rounded-lg shadow-xl min-w-0 max-w-lg' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="left-1 lg:-left-7 absolute -bottom-16 lg:bottom-auto lg:top-1/2 rounded-xl lg:rounded-full p-3 lg:p-4 shadow-xl bg-gray-900 active:translate-y-[1px]" role="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
                <button className="left-24 lg:left-auto lg:-right-7 absolute -bottom-16 lg:bottom-auto lg:top-1/2 rounded-xl lg:rounded-full p-3 lg:p-4 shadow-xl bg-gray-900 active:translate-y-[1px]" role="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
            </div>
        </div>
    )
}

export default Projects
