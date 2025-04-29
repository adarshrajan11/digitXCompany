import React from 'react';
import style from './../assets/style/Reasons.module.css';
import expertIcon from '../assets/images/icons/expertise.png';
import icon2 from '../assets/images/icons/icon2.png';
import icon4 from '../assets/images/icons/icon 3.png';
import icon3 from '../assets/images/icons/icon4.png';
import icon5 from '../assets/images/icons/icon5.png';
import icon6 from '../assets/images/icons/icon6.png';
import arrow from '../assets/images/icons/Icon.png';

const Reasons = () => {
    const reasonsData = [
        {
            img: expertIcon,
            title: 'Expert Team',
            description: 'Our team of seasoned professionals brings years of experience and expertise to the table.'
        },
        {
            img: icon2,
            title: 'Tailored Business Solutions ',
            description: 'We understand that every business is unique. Thats why our solutions are customized.'
        },
        {
            img: icon3,
            title: 'Cutting-Edge Web Design',
            description: 'We leverage cutting-edge technologies to solve complex problems.'
        },
        {
            img: icon4,
            title: 'Mobile-First Approach',
            description: 'Your satisfaction is our priority at every stage of the project.'
        },
        {
            img: icon5,
            title: 'Marketing Strategies',
            description: 'Clear communication and regular updates throughout our engagement.'
        },
        {
            img: icon6,
            title: 'Search Engine Optimization ',
            description: 'High-quality solutions that maximize your return on investment.'
        }
    ];

    return (
        <div className={style.reasonscontainer}>
            <div className={style.reasonsheading}>
                <h1>Reason to Choose DigitX for</h1>
                <h1 className={style.blackHeading}>Your Digital Journey</h1>
                <p>Partnering with DigitX offers a multitude of advantages. Experience increased brand visibility,
                    improved customer engagement, and higher ROI. Our tailored solutions are designed to meet your unique business needs, ensuring lasting success.</p>
            </div>

            <div className={style.reasonsgrid}>
                {reasonsData.map((reason, index) => (
                    <div key={index} className={style.reasoncard}>
                        <div className={style.reasonimagecontainer}>
                            <img src={reason.img} alt={reason.title} className='reason-image' />
                        </div>
                        <h3 className={style.reasontitle}>{reason.title}</h3>
                        <p className={style.reasondescription}>{reason.description}</p>
                        <button className={style.reasonbutton}>Learn More <img src={arrow} alt="" /></button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reasons;