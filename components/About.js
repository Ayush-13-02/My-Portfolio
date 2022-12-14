import Image from 'next/image';
import mypic from '../img/Photo.jpg'

function About() {
    return (
        <div id='About' className='flex flex-col items-center justify-center'>
            <h2 className="py-5 mb-1 text-5xl font-semibold -tracking-tight text-center text-gray-200 lg:text-7xl duration-150 ease-in-out">
                About me
            </h2>
            <div className="container flex flex-col lg:flex-row items-center justify-center mx-auto">
                <div className='w-[90%] lg:w-1/2 flex items-center justify-center mx-auto'>
                    <div className="w-fit shadowp p-8 mr-5 lg:p-10 my-4 lg:my-12 rounded-lg">
                        <Image src={mypic} alt="Picture of the author" className='shadow-inner rounded-lg hover:scale-105 transition duration-500' height="350" width="340" />
                        {/* <Image src={mypic} alt="..." width="100%" height="100%"></Image> */}
                    </div>
                </div>
                <div className="w-[90%] lg:w-1/2 my-4 lg:my-12 mx-8 lg:mx-2">
                    <p className="text-white lg:text-lg my-5 lg:mr-16 text-justify">
                        I am a Full stack web developer. I am using React JS, Next JS for frontend , Django for backend, Sqlite for Database, Tailwind css, Bootstrap use as css framework. I created many applications which you can watch out on my GitHub. Recently I created a Online Libraray which I prefer to check out first.
                    </p>
                    <ul className="m-0 p-0 italic">
                        <li className="text-white mb-4 text-lg">
                            <span className="text-red-500 uppercase font-bold">Name : </span> Ayush Sharma
                        </li>
                        <li className="text-white mb-4 text-lg">
                            <span className="text-red-500 uppercase font-bold">Age : </span> 20
                        </li>
                        <li className="text-white mb-4 text-lg">
                            <span className="text-red-500 uppercase font-bold">NATIONALITY : </span> INDIAN
                        </li>
                        <li className="text-white mb-4 text-lg">
                            <span className="text-red-500 uppercase font-bold">Address : </span> Majahid pur, Muzaffarnagar, Uttar Pradesh
                        </li>
                        <li className="text-white mb-4 text-lg">
                            <span className="text-red-500 uppercase font-bold">Phone : </span> +91 7302867727
                        </li>
                        <li className="text-white mb-4 text-lg">
                            <span className="text-red-500 uppercase font-bold">Email : </span> ayushsharma13jun@gmail.com
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
