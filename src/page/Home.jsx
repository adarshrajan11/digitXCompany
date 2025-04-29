import React from 'react'
import Navbar from '../component/Navbar'
import HomeHero from '../component/HomeHero'
import styles from '../assets/style/Home.module.css'
import Reasons from '../component/Reasons'
import OurService from '../component/OurService'
import OurWorks from '../component/OurWorks'
import OurTestimonials from '../component/OurTestimonials'
import Faq from '../component/Faq'
import Footer from '../component/Footer'
import PartnerClient from '../component/PartnerClient'
import TransformSection from '../component/TransformSection'

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <Navbar className={styles.stickyNavbar} />
            <HomeHero />
            <section>
                <Reasons />
            </section>
            <section>
                <OurService />
            </section>
            <section>
                <OurWorks />
            </section>
            <section>
                <OurTestimonials />
            </section>
            <section>
                <Faq />
            </section>
            <PartnerClient />
            <TransformSection />
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Home