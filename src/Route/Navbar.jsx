import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
            <NavLink to='/' className='navlink'>Home</NavLink>
            <NavLink to='/blogs' className='navlink'>Blogs</NavLink>
            <NavLink to='/contact' className='navlink'>Contact</NavLink>
        </nav>
    </div>
  )
}

export default Navbar