import React from 'react'
import style from '../assets/style/Hero.module.css'
import HeroImg from '../assets/images/Image.png'

const HomeHero = () => {
    return (
        <>
            <div className={style.homehero}>
                <div className={style.heroTitle}>
                    <div className={style.titleBlock}><h1 className={style.heroTitleh1}>Digital Solutions <span>That</span> <br /><span>Drive Success</span></h1>
                        <p>At DigitX, we believe in the transformative power of digital solutions. Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape. From captivating web design to data-driven marketing strategies,
                            we are committed to delivering results that exceed expectations.</p>

                        <div className={style.heroBtn}>
                            <h4>Unlock Your Digital Potential Today</h4>
                            <div className={style.btnContainer}><button className={style.getStartedbtn}>Get Started</button>
                                <button className={style.freeConsultBtn}>Free Consultaion</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={style.HeroImage}>
                    <img src={HeroImg} alt="Hero" className={style.heroImg} />
                    <div className={style.blurOverlay}></div>
                </div>


            </div>

        </>
    )
}

export default HomeHero
