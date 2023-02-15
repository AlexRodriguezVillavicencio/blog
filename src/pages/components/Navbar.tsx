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
    <nav className="fixed bg-black" id="navbarCustom">
      <div className="cursor-pointer object-contain flex items-center">
      <img 
          src="/favicon-32x32.png" 
          width={50}
          height={50}
        />
        <h1 className="text-[26px] ml-[-5px]" >eans</h1>
      </div>
      <div>
      <input
        type="text"
        placeholder="Search"
        name="search"
        className="rounded-lg outline-none flashingLine px-1.5 py-0.5"
        />
      </div>
      <div>
        <ul className="space-x-4 md:flex">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}