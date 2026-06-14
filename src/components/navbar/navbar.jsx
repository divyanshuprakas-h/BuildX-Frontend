import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <header className="header">
            <a href="/" className="logo">BuildX</a>
        <nav className="navbar">
            

            <div className='features'>
            <a href="">Explore</a>
            <a href="">Workflow</a>
            <a href="">Community</a>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
