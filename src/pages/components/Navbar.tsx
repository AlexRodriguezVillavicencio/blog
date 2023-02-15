"use client";
import { useEffect, useState } from 'react';

export default function Navbar() {

  const [isScroll, setScroll] = useState(0);

  useEffect(() => {
    
    const navbar = document.querySelector('#navbarCustom') as HTMLElement;

    function handleScroll() {
      const currentScroll = window.scrollY;
      setScroll(window.scrollY)
      if(navbar != null) {
        if (isScroll > currentScroll){
          navbar.classList.remove("navbarDown");
          navbar.classList.add("navbarUp");
          navbar.style.transform = "translateY(0px)"
        } else {
          navbar.classList.remove("navbarUp");
          navbar.classList.add("navbarDown");
          navbar.style.transform = "translateY(-60px)"
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isScroll]);

  return (
    <nav className="fixed bg-black  border-b-[1px] border-indigo-400" id="navbarCustom">
      <div className="cursor-pointer object-contain flex items-center">
      <img 
          src="/favicon-32x32.png" 
          width={50}
          height={50}
        />
        <h1 className="text-[26px] ml-[-5px]" >eans</h1>
      </div>
      <div className="flex px-2 py-1 bg-gray-100 text-gray-600 rounded-2xl">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
        </svg>
        <input
          type="text"
          placeholder="Search"
          name="search"
          className=" outline-none flashingLine px-1.5 py-0.5 bg-gray-100"
          />
      </div>
    </nav>
  )
}