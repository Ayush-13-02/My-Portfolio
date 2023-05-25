import Image from 'next/image';
import degree from '../img/degree.png'

function Education() {
    return (
        <div id='Education' className='w-full pt-20'>
            <h2 className="mb-1 text-6xl font-semibold -tracking-tight text-center text-gray-200 lg:text-7xl duration-150 ease-in-out">
                Education
            </h2>
            <div className="container flex justify-center items-center flex-grow flex-wrap gap-12 lg:gap-36 relative mx-4 md:mx-auto my-12">
                <div className="flex flex-col justify-center items-center">
                    <span className="mb-8">
                        <div className="bg-conic-86 flex justify-center items-center w-48 h-48 lg:w-52 lg:h-52 rounded-full shadow-xl">
                            <div className="flex items-center justify-center relative bg-white w-44 lg:w-[187px] h-44 lg:h-[187px] rounded-full shadow-inner">
                                <h1 className="font-semibold text-[3rem] lg:text-[3.5rem]">
                                    8.6<span className="text-[1.5rem] lg:text-[1.8rem]">/10</span>
                                </h1>
                            </div>
                        </div>
                    </span>
                    <div className="text-white my-2 font-bold text-2xl lg:text-4xl">10th Board (2017)</div>
                    <div className="text-white mb-2 fontb-semibold text-xl lg:text-2xl">Modern Public School</div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <span className="mb-8">
                        <div className="bg-conic-93 flex justify-center items-center w-48 h-48 lg:w-52 lg:h-52 rounded-full shadow-xl">
                            <div className="flex items-center justify-center relative bg-white w-44 lg:w-[186px] h-44 lg:h-[186px] rounded-full shadow-inner">
                                <h1 className="font-semibold text-[2.8rem] lg:text-[3.2rem]">
                                    93.2%
                                </h1>
                            </div>
                        </div>
                    </span>
                    <div className="text-white my-2 font-bold text-2xl lg:text-4xl">12th Board (2019)</div>
                    <div className="text-white mb-2 fontb-semibold text-xl lg:text-2xl">IIMT Academy (Meerut)</div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <span className="mb-8">
                        <div className="bg-conic-76 flex justify-center items-center w-48 h-48 lg:w-52 lg:h-52 rounded-full shadow-xl">
                            <div className="flex items-center justify-center relative bg-white w-44 lg:w-[186px] h-44 lg:h-[186px] rounded-full shadow-inner">
                                <h1 className="font-semibold text-[3rem] lg:text-[3.5rem]">
                                    7.6<span className="text-[1.5rem] lg:text-[1.8rem]">/10</span>
                                </h1>
                            </div>
                        </div>
                    </span>
                    <div className="text-white my-2 font-bold text-2xl lg:text-4xl">B.Tech (CSE)</div>
                    <div className="text-white mb-2 fontb-semibold text-xl lg:text-2xl">NIT Jalandhar</div>
                </div>
                
            </div>
        </div>
    )
}

export default Education
