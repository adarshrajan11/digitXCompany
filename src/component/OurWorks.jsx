import React from 'react';
import style from './../assets/style/OurWork.module.css';
import icon1 from './../assets/images/icons/workIcon/Logo.png';
import icon2 from './../assets/images/icons/workIcon/second.png';
import icon3 from './../assets/images/icons/workIcon/Logo (2).png';
import icon4 from './../assets/images/icons/workIcon/Logo (3).png';
import arrow from '../assets/images/icons/Icon.png';

const OurWorks = () => {

    const worksData = [
        {
            id: 1,
            image: icon1,
            title: 'Innovative E-commerce Platform',
            description: 'Witness our groundbreaking e-commerce platform that seamlessly connects buyers and sellers worldwide. With an intuitive user interface and secure payment gateways, this project revolutionizes online shopping.',
            category: 'Web Development',
            date: 'March 2023'
        },
        {
            id: 2,
            image: icon2,
            title: 'Mobile Banking Application',
            description: 'A secure and user-friendly mobile banking app that provides seamless financial transactions, account management, and investment tracking.',
            category: 'Mobile App',
            date: 'August 2023'
        },
        {
            id: 3,
            image: icon3,
            title: 'Healthcare Management System',
            description: 'Comprehensive healthcare solution connecting patients with doctors, managing medical records, and streamlining hospital operations.',
            category: 'Enterprise Software',
            date: 'January 2024'
        },
        {
            id: 4,
            image: icon4,
            title: 'Education Learning Platform',
            description: 'Interactive online learning environment with course management, progress tracking, and collaborative tools for students and educators.',
            category: 'Web Application',
            date: 'November 2023'
        }
    ];

    return (
        <>
            <div className='ourWorkContainer'>
                <div className={style.ourWorkHeading}>
                    <h1 className={style.blackHeading}>Our <span>Works</span></h1>
                    <p>Witness the brilliance of our previous projects. Our portfolio showcases the successful
                        collaborations we've had with diverse clients across various industries. Let our work speak for itself.</p>
                </div>
                <div className={style.ourWorkGrid}>
                    {worksData.map((work) => (
                        <div key={work.id} className={style.ourWorkCard}>
                            <div className={style.workImageContainer}>
                                <img src={work.image} alt="Our Work" className={style.workImage} />
                                <button className={style.workButton}>
                                    View Project Details
                                    <img src={arrow} alt="" />
                                </button>
                            </div>
                            <div className={style.workMeta}>
                                <span className={style.workCategory}>{work.category}</span>
                                <span className={style.workDate}>{work.date}</span>
                            </div>
                            <h3 className={style.ourWorkTitle}>{work.title}</h3>
                            <p className={style.ourWorkDescription}>{work.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default OurWorks;