import React from 'react'
import style from '../assets/style/Navbar.module.css'
import reactLogo from '../assets/Logo.png'

const Navbar = () => {
    return (
        <>
            <div className={style.navbar}>
                <div className={style.navbarlogo}>
                    <img src={reactLogo} alt="React Logo" />
                </div>

                <ul className={style.navbar_links}>
                    <li><a className={style.navbar_linksa} href="/">Home</a></li>
                    <li><a className={style.navbar_linksa} href="/services">Services</a></li>
                    <li><a className={style.navbar_linksa} href="/portfolio">Pojects</a></li>
                    <li><a className={style.navbar_linksa} href="/about">About Us</a></li>
                    <li><a className={style.navbar_linksa} href="/contact">Careers</a></li>
                    <li><a className={style.navbar_linksa} href="/blog">Blogs</a></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar