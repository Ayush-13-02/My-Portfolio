import Image from 'next/image';
import degree from '../img/degree.png'

function Education({scroll}) {
    return (
        <div ref={scroll}>
            <h2 className="my-4 mb-1 text-6xl font-semibold -tracking-tight text-center text-gray-200 lg:text-7xl duration-150 ease-in-out">
                Education
            </h2>
            <div className="container relative mx-4 md:mx-auto my-12">
                <div className="flex items-center justify-center w-14 h-14 rounded-full border mx-2 md:mx-auto">
                    <Image src={degree} alt="Picture of the author" width="40px" height="40px" />
                </div>
                <div className="w-1 h-24 bg-white mx-8 md:mx-auto"></div>
                <div className="relative flex flex-col text-left md:text-right">
                    <div className="absolute mb-4 left-[20%] sm:left-[12%] md:right-[54%]">
                        <h1 className="text-2xl font-bold -tracking-tight text-red-50 uppercase">Bacholar Degree</h1>
                        <h2 className='text-lg text-zinc-300 max-w-md'>Dec 2020 - Jun 2024 | Dr. B.R. Ambedker National Institute of Technology, Jalandhar</h2>
                    </div>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border mx-4 md:mx-auto">
                        <div className="w-3 h-3 rounded-full bg-white"></div>
                    </div>
                </div>
                <div className="w-1 h-24 bg-white mx-8 md:mx-auto"></div>
                <div className="relative flex flex-col text-left">
                    <div className="absolute mb-4 left-[20%] sm:left-[12%] md:left-[54%]">
                        <h1 className="text-2xl font-bold -tracking-tight text-red-50 uppercase">10+2</h1>
                        <h2 className='text-lg text-zinc-300 max-w-md'>2018-2019 | IIMT Academy</h2>
                    </div>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border mx-4 md:mx-auto">
                        <div className="w-3 h-3 rounded-full bg-white"></div>
                    </div>
                </div>
                <div className="w-1 h-24 bg-white mx-8 md:mx-auto"></div>
                <div className="w-5 h-5 bg-white rounded-full mx-6 md:mx-auto"></div>

            </div>
        </div>
    )
}

export default Education
