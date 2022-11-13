import React from 'react'

function Projects({scroll}) {
    return (
        <div ref={scroll} className=''>
            <h2 className="my-4 mt-24 mb-1 text-6xl font-semibold -tracking-tight text-center text-gray-200 lg:text-7xl duration-150 ease-in-out">
                My Projects
            </h2>

            <div className="pt-16 pb-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-9 md:px-1 px-3 shadow-inner">
                <div className="relative">
                    <a href="/" className="max-h-64 sm:max-h-96 md:max-h-64 lg:max-h-96 bg-[url('../img/Project1.jpg')]  bgprojects"></a>
                    <h3 className="text-3xl italic font-bold text-white -tracking-tight text-center my-4"><a href="demo/default/blog.html" target="_blank">YouTube clone</a></h3>
                </div>

                <div className="relative">
                    <a href="/" className="max-h-64 sm:max-h-96 md:max-h-64 lg:max-h-96 bg-[url('../img/Project2.jpg')]  bgprojects"></a>
                    <h3 className="text-3xl italic font-bold text-white -tracking-tight text-center my-4"><a href="demo/default/blog.html" target="_blank">Text Utils</a></h3>
                </div>
            </div>
        </div>
    )
}

export default Projects
