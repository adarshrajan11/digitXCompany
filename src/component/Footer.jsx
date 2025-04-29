import React from 'react'
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import styles from './../assets/style/Footer.module.css';
const Footer = () => {
    return (
        <div>
            <footer className={styles.footer}>
                <div className={styles.topSection}>
                    <div className={styles.logo}>DX</div>
                    <div className={styles.social}>
                        <span>Follow Us On Social Media</span>
                        <div className={styles.icons}>
                            <FaLinkedin />
                            <FaInstagram />
                            <FaTwitter />
                        </div>
                    </div>
                </div>

                <div className={styles.linksGrid}>
                    <div>
                        <h4>Home</h4>
                        <ul>
                            <li>Benefits</li>
                            <li>Our Testimonials</li>
                            <li>Partners</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Services</h4>
                        <ul>
                            <li>Web Design</li>
                            <li>Website Development</li>
                            <li>App Development</li>
                            <li>Digital Marketing</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Projects</h4>
                        <ul>
                            <li>ABC Tech Solutions</li>
                            <li>GreenEarth Eco Store</li>
                            <li>HealthTech Innovations</li>
                            <li>GlobalTech Solutions</li>
                            <li>TechGuru Inc.</li>
                        </ul>
                    </div>
                    <div>
                        <h4>About Us</h4>
                        <ul>
                            <li>Our Team</li>
                            <li>Achievements</li>
                            <li>Awards</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Careers</h4>
                        <ul>
                            <li>Job Openings</li>
                            <li>Benefits & Perks</li>
                            <li>Employee Referral</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Blogs</h4>
                        <ul>
                            <li>Our Blogs</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <span>@2023 Digitax. All Rights Reserved.</span>
                    <span>Version 1.0</span>
                    <div className={styles.policies}>
                        <span>Privacy Policy</span>
                        <span>Terms & Conditions</span>
                        <span>Cookie Policy</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
