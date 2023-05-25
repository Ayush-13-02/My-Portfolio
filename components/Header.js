import React from "react";
import Link from 'next/link'
export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <header className="fixed top-0 w-full clearNav z-50">
      <div className="max-w-5xl mx-auto flex p-5 flex-col md:flex-row">
        <div className="flex flex-row items-center justify-between p-1">
          <Link href="/"><span className="flex italic text-3xl text-white font-medium mb-0 uppercase animate-pulse duration-1000">
            Ayush Sharma
          </span></Link>
          <button
            className="text-white pb-4 cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none content-end ml-auto"
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className={"md:flex flex-grow items-center justify-between" + (navbarOpen ? " flex" : " hidden")}>
          <div className="md:ml-auto md:mr-auto font-4 pt-1 md:pl-14 pl-1 flex flex-wrap items-center md:text-base text-1xl md:justify-center justify-items-start">
            <a href="#Home" className="mr-11 pr-2 cursor-pointer text-gray-300 hover:text-white font-semibold tr04 active:scale-90">
              Home
            </a>
            <a href="#Education" className="mr-11 pr-2 cursor-pointer text-gray-300 hover:text-white font-semibold tr04 active:scale-90">
              Education
            </a>
            <a href="#Skill" className="mr-11 pr-2 cursor-pointer text-gray-300 hover:text-white font-semibold tr04 active:scale-90">
              Skills
            </a>
            <a href="#project" className="mr-12 pr-2 cursor-pointer text-gray-300 hover:text-white font-semibold tr04 active:scale-90">
              Project
            </a>
            <a href="#Contact" className="mr-5 cursor-pointer text-gray-300 hover:text-white font-semibold tr04 active:scale-90">
              Contact me
            </a>
          </div>
          <Link
            href="https://www.linkedin.com/in/ayush-sharma-2a738322a/"
            rel="noopener noreferrer"
            target="_blank"
            className="invisible md:visible"
          >
            <span className="mr-2 cursor-pointer">
              <i class="text-white text-xl fa-brands fa-linkedin"></i>
            </span>
          </Link>
          <Link
            href="https://github.com/Ayush-13-02"
            rel="noopener noreferrer"
            target="_blank"
            className="pl-7 invisible md:visible"
          >
            <span className="ml-2 cursor-pointer">
              <i class="text-white text-xl fa-brands fa-github"></i>
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
