import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa';
import styles from './../assets/style/Faq.module.css';
const data = [
    {
        question: "How long does it take to complete a web development project?",
        answer: "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
    },
    {
        question: "Can you handle large-scale mobile app development projects?",
        answer: " Yes, we have experience in developing large-scale mobile applications for various industries. Our team is equipped to handle projects of any size.",
    },
    {
        question: "Do you offer maintenance services for websites and apps developed by other companies?",
        answer: " Yes, we provide maintenance and support services for websites and apps developed by other companies. We can help you with updates, bug fixes, and performance improvements.",
    },
    {
        question: "How do you ensure the security of user data in your web applications?",
        answer: " We prioritize security by implementing best practices such as data encryption, secure authentication, and regular security audits. We also stay updated with the latest security trends.",
    },
    {
        question: "Can you create a responsive website design that looks great on all devices?",
        answer: " Yes, all our web designs are responsive and optimized for various devices, including desktops, tablets, and smartphones. We ensure a seamless user experience across all platforms.",
    },
    {
        question: "What digital marketing strategies do you employ to drive website traffic?",
        answer: "   We use a combination of SEO, content marketing, social media marketing, and paid advertising to drive traffic to websites. Our strategies are tailored to meet the specific needs of each client.",
    },
    {
        question: "Can you integrate third-party APIs into our mobile app?",
        answer: " Yes, we have experience integrating various third-party APIs into mobile applications. This allows us to enhance functionality and provide a better user experience.",
    },
    {
        question: "How do you ensure cross-platform compatibility for mobile apps?",
        answer: " We use cross-platform development frameworks and conduct thorough testing on multiple devices and operating systems to ensure compatibility across platforms.",
    },
];

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(prev => (prev === index ? null : index));
    };
    return (
        <div>
            <div className={styles.faqSection}>
                <h2 className={styles.title}>
                    <span>Frequently </span><strong>Asked Questions</strong>
                </h2>
                <p className={styles.subtitle}>
                    Got questions? We've got answers. Check out our frequently asked questions section to find valuable insights into our processes, pricing, and more. Transparency is at the core of our client interactions.
                </p>
                <input className={styles.searchInput} placeholder="Search" />

                <div className={styles.faqGrid}>
                    {data.map((item, index) => (
                        <div className={styles.faqItem} key={index}>
                            <div
                                className={styles.faqQuestion}
                                onClick={() => toggleAccordion(index)}
                            >
                                <span>{item.question}</span>
                                <span className={styles.icon}>
                                    {activeIndex === index ? <FaMinus /> : <FaPlus />}
                                </span>
                            </div>
                            {activeIndex === index && item.answer && (
                                <div className={styles.faqAnswer}>{item.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Faq
