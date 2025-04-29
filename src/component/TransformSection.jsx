import React from 'react';
import styles from '../assets/style/TransformSection.module.css';
import rightdecor from '../assets/images/icons/workIcon/Abstract Design.png';
// import leftdecor from '../assets/images/left-Decoration.svg';
import digitX from '../assets/DigitX.png';

const TransformSection = () => {
    return (
        <section className={styles.section}>
            {/* Background Vectors */}
            <img src={rightdecor} alt="Left Decoration" className={styles.leftVector} />
            <img src={rightdecor} alt="Right Decoration" className={styles.rightVector} />

            {/* Content */}
            <div className={styles.content}>
                <h2>Ready to Transform Your Digital Presence?</h2>
                <p>
                    Take the first step towards digital success with DigitX by your side. Our team of experts is eager to craft tailored solutions that drive growth for your business. Whether you need a stunning website, a powerful mobile app, or a data-driven marketing campaign, we've got you covered. Let's embark on this transformative journey together.
                </p>

                <div className={styles.buttonGroup}>
                    <button className={styles.primaryButton}>Get Started</button>
                    <button className={styles.secondaryButton}>Free Consultation</button>
                </div>

                <div className={styles.branding}>
                    <img src={digitX} alt="DigitX" />
                </div>
            </div>
        </section>
    );
};

export default TransformSection;
