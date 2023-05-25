
function UploadProject() {
    return (
        <section className="w-full p-6 mx-auto rounded-md shadow-md mt-2">
            <div className='max-w-4xl flex flex-col justify-center w-full h-full mx-auto'>
                <h1 className="text-5xl font-bold text-white capitalize my-8">Upload Projects</h1>
                <form method='post' action='/api/project'>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-white" htmlFor="username">Project Name</label>
                            <input name='Name' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-white" htmlFor="emailAddress">Deploy Link/ Github Repo Link</label>
                            <input name='Deploy' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-white" htmlFor="Share">Share Link</label>
                            <input name='Share' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-white" htmlFor="Share">Project Image</label>
                            <input name='Picture' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                       
                    </div>

                    <div className="flex justify-end my-6">
                        <button type='submit' className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Save</button>
                    </div>
                </form>
            </div>
        </section>

    )
}

export default UploadProject
