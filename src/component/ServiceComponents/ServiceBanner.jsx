import React from 'react';
import bgImage from '../../assets/images/Partners/cardBg.png';

const ServiceBanner = () => {
    return (
        <section className="relative h-screen overflow-hidden bg-black text-white">
            {/* Left Diagonal Streak */}
            <div className="absolute top-0 bottom-0 left-0 w-[30%] h-full overflow-hidden z-0">
                <div
                    className="absolute top-0 left-[25%] w-[40%] h-[150%] bg-gradient-to-br from-transparent via-white/10 to-transparent"
                    style={{
                        transform: 'rotate(-62deg)',
                        filter: 'blur(20px)',
                    }}
                />
            </div>

            {/* Right Diagonal Streak */}
            <div className="absolute top-0 right-0 w-[30%] h-full overflow-hidden z-0">
                <div
                    className="absolute top-0 left-[25%] w-[40%] h-[150%] bg-gradient-to-br from-transparent via-white/10 to-transparent"
                    style={{
                        transform: 'rotate(62deg)',
                        filter: 'blur(20px)',
                    }}
                />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div
                    className="sm:w-full max-w-5xl p-6 md:p-8 rounded-lg shadow-lg text-left bg-black/30 backdrop-blur-md"
                    style={{
                        backgroundImage: `url(${bgImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundBlendMode: 'overlay'
                    }}
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                        Our Comprehensive <span className="text-gray-400">Digital Solutions</span>
                    </h1>
                    <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                        At DigitX, we offer a comprehensive suite of digital solutions designed to propel your business to new heights in the digital realm. With a team of skilled professionals, cutting-edge technologies, and a passion for innovation, we are committed to delivering exceptional results for every project we undertake. From captivating web design that leaves a lasting impression to seamless web development that ensures optimal functionality, we cover every aspect of your online presence.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ServiceBanner;