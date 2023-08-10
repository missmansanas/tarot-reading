import React from 'react'
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="flex flex-row gap-1 px-5 py-0 md:py-4 mb-10 justify-between items-center w-full bg-black/10">
      <h1 className="text-xl lg:text-6xl displayfont text-center mt-5 mb-3">Tarot Reading</h1>
      <nav className='flex flex-row flex-wrap justify-end items-end text-end'>
        <NavLink to='/'
          className={({ isActive}) =>
            isActive ? "hidden md:inline before:content-['✨'] ps-10" : "inline ps-10" }            
          >Card of the Day<span className='md:hidden'>👉</span></NavLink>
        <NavLink to='/three-card'
          className={({ isActive}) =>
            isActive ? "hidden md:inline before:content-['✨'] ps-10" : "inline ps-10" }
          >Three-Card Spread<span className='md:hidden'>👉</span></NavLink>
        <NavLink to='/about'
          className={({ isActive}) =>
            isActive ? "hidden md:inline before:content-['✨'] ps-10" : "hidden md:inline ps-10" }
        >About</NavLink>
      </nav>
    </div>
  )
}

export default Nav