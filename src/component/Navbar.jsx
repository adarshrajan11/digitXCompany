import React from 'react'
import style from '../assets/style/Navbar.module.css'
import reactLogo from '../assets/Logo.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <>
            <div className={style.navbar}>
                <div className={style.navbarlogo}>
                    <img src={reactLogo} alt="React Logo" />
                </div>

                <ul className={style.navbar_links}>
                    <li><Link className={style.navbar_linksa} to="/">Home</Link></li>
                    <li><Link className={style.navbar_linksa} to="/services">Services</Link></li>
                    <li><Link className={style.navbar_linksa} to="/portfolio">Projects</Link></li>
                    <li><Link className={style.navbar_linksa} to="/about">About Us</Link></li>
                    <li><Link className={style.navbar_linksa} to="/contact">Careers</Link></li>
                    <li><Link className={style.navbar_linksa} to="/blog">Blogs</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar
