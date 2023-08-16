import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex flex-row justify-center gap-8 p-4 displayfont text-3xl lg:text-6xl'>
      <NavLink to='/' className={({isActive}) =>
    isActive && 'underline decoration-wavy decoration-2 underline-offset-4'}>readings</NavLink> / 
      <NavLink to='/about' className={({isActive}) =>
    isActive && 'underline decoration-wavy decoration-2 underline-offset-4'}>about</NavLink>
    </div>
  )
}

export default Nav