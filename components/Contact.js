import Link from 'next/link'
import React from 'react'

function Contact() {
    return (
        <section id='Contact' className="relative pb-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
                <div>
                    <h1 className="py-8 md:py-16 text-6xl font-bold text-white">
                        Contact me
                    </h1>
                    <div className="flex gap-6 flex-wrap">

                        <div className="text-center text-white bg-blend-darken flex-auto basis-8 p-8 shadow shadow-[#8181ee] rounded">
                            <i className="w-16 h-16 text-3xl text-center leading-[4rem] text-white bg-[#0f0f56] rounded-full fas fa-envelope"></i>
                            <h3 className='text-2xl font-semibold m-2 capitalize'>My Email</h3>
                            <p className='text-lg mb-2'>ayushsharma13jun@gmail.com</p>
                        </div>

                        <div className="text-center text-white flex-auto basis-8 p-8 shadow shadow-[#8181ee] rounded">
                            <i className="w-16 h-16 text-3xl text-center leading-[4rem] fas fa-phone text-white bg-[#0f0f56] rounded-full"></i>
                            <h3 className='text-2xl font-semibold m-2 capitalize'>my number</h3>
                            <p className='text-lg mb-2'>+91 7302867727</p>
                        </div>

                        <div className="text-center text-white flex-auto basis-8 p-8 shadow shadow-[#8181ee] rounded">
                            <a href='https://www.linkedin.com/in/ayush-sharma-2a738322a/'>
                                <i className="w-16 h-16 text-3xl text-center leading-[4rem] text-white bg-[#0f0f56] rounded-full fa-brands fa-linkedin"></i>
                            </a>
                            <h3 className='text-2xl font-semibold m-2 capitalize'>my linkedin</h3>
                            <p className='text-lg mb-2'>https://www.linkedin.com/in/ayush-sharma-2a738322a/</p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact
