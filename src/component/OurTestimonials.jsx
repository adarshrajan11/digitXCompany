import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './../assets/style/OurTestimonial.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import twitter from '../assets/Button.png'
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from 'swiper/modules';
import propic1 from '../assets/propic.png'
const testimonials = [
    {
        img: propic1,
        text: "Working with DigiX was a pleasure. Their web design team created a stunning website that perfectly captured our brand’s essence.",
        author: "Mark Roberts",
        role: "Founder of GreenEarth Eco Store",
    },
    {
        img: propic1,
        text: "The mobile app DigiX developed for us exceeded our expectations. Its user-friendly interface and seamless functionality have earned rave reviews.",
        author: "Lisa Williams",
        role: "Head of Product at HealthTech Innovations",
    },
    {
        img: propic1,
        text: "DigiX transformed our outdated site into a modern, responsive platform. Their attention to detail and ability to deliver was top-notch.",
        author: "Michael Johnson",
        role: "Marketing Manager",
    },
    {
        img: propic1,
        text: "The digital marketing strategies implemented by DigiX have significantly increased our online visibility and customer engagement.",
        author: "John Doe",
        role: "CEO of Tech Innovations",
    },
    {
        img: propic1,
        text: "DigiX's expertise in SEO has propelled our website to the top of search results. Their team is knowledgeable and dedicated.",
        author: "Jane Smith",
        role: "Marketing Director at E-commerce Solutions",
    },
];
const OurTestimonials = () => {
    return (
        <div className={styles.carouselWrapper}>
            <div className={styles.headingWrapper}>
                <h2 className={styles.heading}>Our Testimonials</h2>
                <p className={styles.description}>Don't just take our word for it; hear what our satisfied clients have to say about their experience with DigitX.
                    We take pride in building lasting relationships and delivering exceptional results.</p>
            </div>

            <Swiper
                spaceBetween={20}
                slidesPerView="auto" // important
                loop={true}
                grabCursor={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                }}
                modules={[Autoplay]}
            >
                {testimonials.map((item, index) => (
                    <SwiperSlide key={index} className={styles.swiperSlide}>
                        <div className={styles.card}>
                            <div className={styles.chatBubbleWrapper}>

                                <div className={styles.chatBubble}>
                                    <img src={twitter} alt="Twitter icon" className={styles.twitterIcon} />
                                    <p className={styles.text}>{item.text}</p>
                                    <div className={styles.chatTail}></div>
                                </div>
                            </div>

                            <div className={styles.textWrapper}>
                                <img src={item.img} alt="Twitter icon" className={styles.profileImage} />
                                <div className={styles.authorDetails}>
                                    <h4 className={styles.author}>{item.author}</h4>
                                    <p className={styles.role}>{item.role}</p>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    )
}

export default OurTestimonials
