import React from 'react'
import styles from './../assets/style/PartnerClient.module.css';
import logoPC from './../assets/images/Partners/Container.png';
import LogoPC2 from './../assets/images/Partners/Container (1).png'
import LogoPC3 from './../assets/images/Partners/Container (2).png';
import LogoPC4 from './../assets/images/Partners/Container (3).png';
import LogoPC5 from './../assets/images/Partners/Container (4).png';
import LogoPC6 from './../assets/images/Partners/Container (5).png';


const clients = [
    {
        id: 1,
        title: 'ABC Tech Solutions',
        description: 'A leading technology firm that trusted DigitX to develop their responsive website, showcasing their cutting-edge products and services.',
        logo1: logoPC,

    },
    {
        id: 2,
        title: 'GreenEarth Eco Store',
        description: 'DigitX collaborated with GreenEarth Eco Store to create an engaging e-commerce platform that promotes sustainable living and eco-friendly products.',
        logo1: LogoPC2,

    },
    {
        id: 3,
        title: 'HealthTech Innovations',
        description: 'DigitX developed a user-centric mobile app for HealthTech Innovations, helping them revolutionize the way people track and manage their health.',
        logo1: LogoPC3,

    },
    {
        id: 4,
        title: 'GlobalTech Solutions',
        description: 'GlobalTech Solutions partnered with DigitX for a website redesign, resulting in a modern interface that elevates their online presence.',
        logo1: LogoPC4,
    },
    {
        id: 5,
        title: 'TechGuru Inc.',
        description: 'DigitX\'s digital marketing strategies boosted TechGuru Inc.\'s online visibility and customer engagement, driving significant business growth.',
        logo1: LogoPC5,
    },
    {
        id: 6,
        title: 'ArtScape Gallery',
        description: 'DigitX brought ArtScape Gallery\'s artistic vision to life with a visually stunning website, showcasing the work of talented artists.',
        logo1: LogoPC6,
    },
];
const PartnerClient = () => {
    return (
        <section className={styles.partnerSection}>
            <div className={styles.header}>
                <h2>Our <span>Partners and Clients</span></h2>
                <p>We are grateful for the opportunity to work with esteemed partners and clients. Our strong relationships are a testament to our dedication and expertise in the digital realm.</p>
            </div>

            <div className={styles.grid}>
                {clients.map(client => (
                    <div key={client.id} className={styles.card}>
                        <div className={styles.logos}>
                            <img src={client.logo1} alt="DigitX" className={styles.logo} />
                            {/* <span className={styles.plus}>+</span>
                            <img src={client.logo2} alt={client.title} className={styles.logo} /> */}
                        </div>
                        <h3>{client.title}</h3>
                        <p>{client.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default PartnerClient
