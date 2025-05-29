import React from 'react';

const ServiceBanner = () => {
    return (
        <section className="relative grid grid-cols-1 md:grid-cols-3 h-screen overflow-hidden bg-black text-white">
            {/* Left Diagonal Strip - Middle Only */}
            <div className="absolute top-1/4 left-10 h-1/2 w-1/6 hidden md:block z-0">
                <div className="h-full w-full bg-white/10 backdrop-blur-2xl [clip-path:polygon(0_0,100%_0,60%_100%,0%_100%)]" />
            </div>


            {/* Right Diagonal Strip - Middle Only */}
            <div className="absolute top-1/4 right-0 h-1/2 w-1/3 hidden md:block z-0">
                <div className="h-full w-full bg-white/10 clip-right-diagonal" />
            </div>

            {/* Overlay Content Centered */}
            <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-10 flex justify-center px-4">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg max-w-4xl w-full shadow-lg">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Our Comprehensive <span className="text-gray-300">Digital</span> Solutions
                    </h2>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                        At DigitX, we offer a suite of digital solutions to elevate your business. From web design to full-stack development, we blend creativity and technology to deliver results that matter.
                    </p>
                </div>
            </div>

            {/* Grid Columns (for possible future content/backgrounds) */}
            <div className="relative z-0" />
            <div className="relative z-0" />
            <div className="relative z-0" />
        </section>
    );
};

export default ServiceBanner;
