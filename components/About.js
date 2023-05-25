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
                    <div className="w-fit p-8 mr-5 lg:p-10 my-4 lg:my-12 rounded-lg">
                        <Image src={mypic} alt="Picture of the author" className='shadow-inner rounded-lg hover:scale-105 transition duration-500' height="350" width="340" />
                        {/* <Image src={mypic} alt="..." width="100%" height="100%"></Image> */}
                    </div>
                </div>
                <div className="w-[90%] lg:w-1/2 my-4 lg:my-12 mx-8 lg:mx-2">
                    <p className="text-white lg:text-lg my-5 lg:mr-16 text-justify">
                    Hello, I am Ayush Sharma. Currently I am doing B.Tech in Computer Science Engineering from NIT Jalandhar, Punjab. I am fullstack web developer with frontend in react framework and backend in both Node JS and Django. I am also good at Data Structures and Algorithms. I solved more than 100 problems on both leetcode and geeksforgeeks. I am 3 ⭐ coder at codechef. I have little interest in Data Science, Machine Learning and Cloud. I am working in field of web development form past 2 years and have enough knowledge to do large projects.
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
