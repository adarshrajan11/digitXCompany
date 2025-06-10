import React from 'react';

const ServiceBanner = () => {
    return (
        <section className="relative h-screen overflow-hidden bg-black text-white">
            {/* Left Diagonal Streak */}
            <div className="absolute top-0 bottom-[-10%] left-0 w-[40%] h-full overflow-hidden z-0">
                <div
                    className="absolute top--1 left-[25%]  w-[40%] h-[150%] bg-gradient-to-br from-transparent via-white/10 to-transparent"
                    style={{
                        transform: 'rotate(-62deg)',
                        filter: 'blur(20px)',
                        // clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
                    }}
                />
            </div>

            {/* Right Diagonal Streak */}
            <div className="absolute top-0 right-0 w-[43%] h-full overflow-hidden z-1">
                <div
                    className="absolute top--1 left-[25%]  w-[40%] h-[150%] bg-gradient-to-br from-transparent via-white/10 to-transparent"
                    style={{
                        transform: 'rotate(62deg)',
                        filter: 'blur(20px)',
                        // clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
                    }}
                />
            </div>

            {/* Content Overlay */}
            <div className="absolute left-[20%]  right-40 top-0 bottom-0 z-10 flex items-center">
                <div className="container mx-auto px-4">
                    <div className="bg-transparent backdrop-blur p-8 rounded-lg max-w-7xl shadow-lg text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bottom-4 text-white">
                            Our Comprehensive <span className="text-gray-300">Digital</span> Solutions
                        </h1>
                        <p className="text-gray-300 top-9 text-base md:text-lg leading-relaxed max-w-6xl">
                            At DigitX, we offer a comprehensive suite of digital solutions designed to propel your business to new heights in the digital realm. With a team of skilled professionals, cutting-edge technologies, and a passion for innovation, we are committed
                            to delivering exceptional results for every project we undertake. From captivating web design that leaves a lasting impression to seamless web development that ensures optimal functionality, we cover every aspect of your online presence.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ServiceBanner;