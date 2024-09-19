import React from 'react'
import ThemeToggle from '../Theme/theme-toggle'
import './Navbar.scss'

const Navbar = () => {
  return (
    <header className='navbar_container'>
      <h1>DevUtils</h1>

      <ThemeToggle/>
    </header>
  )
}

export default Navbar