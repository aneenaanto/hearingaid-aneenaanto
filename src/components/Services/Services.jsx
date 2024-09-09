import React from 'react';
import Ic1 from "../../assets/icons/ic1.png";
import Ic2 from "../../assets/icons/ic2.png";
import Ic3 from "../../assets/icons/ic3.png";
import { UpdateFollower } from 'react-mouse-follower';
import { motion } from 'framer-motion';

export const fadeUp = (delay) => {
    return {
        hidden: {
            opacity: 0,
            y: 100,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: delay,
            },
        },
      };
    };

const ServicesData = [
    {
        id: 1,
        title: "Personalized Fitting & Adjustment",
        link: "#",
        icon: Ic1,
        desc: "Our hearing aids are customized to fit your unique ear shape and hearing needs. We use advanced technology to ensure a precise and comfortable fit. Our experts will adjust the settings to match your hearing profile for optimal performance. Experience improved sound quality and comfort tailored just for you.",
        delay: 0.5
    },
    {
        id: 2,
        title: "Comprehensive Hearing Assessments",
        link: "#",
        icon: Ic2,
        desc: "Our team conducts thorough hearing evaluations to understand your specific hearing requirements. We use state-of-the-art equipment to accurately assess your hearing levels. Based on the results, we recommend the most suitable hearing aids for your lifestyle. Trust our expertise to guide you towards the best solution for your hearing needs",
        delay: 0.8
    },
    {
        id: 3,
        title: "Ongoing Support & Maintenance",
        link: "#",
        icon: Ic3,
        desc: "Enjoy peace of mind with our continuous support and maintenance services. Our team provides regular check-ups to ensure your hearing aids are functioning at their best. We offer troubleshooting and repairs as needed to keep your devices in optimal condition. Rely on us for reliable support to enhance your hearing experience over time.",
        delay: 1.1
    },
];

const Services = () => {
    return (
        <section className="bg-gray-100 font-poppins py-8">
            <div className="container py-14">
                <motion.h1 
                variants={fadeUp(0.2)}
                initial="hidden"
                whileInView="show"
                className="text-3xl font-bold text-center pb-10">
                    What We Provide
                </motion.h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {ServicesData.map((data) => (
                        <UpdateFollower
                            key={data.id}
                            mouseOptions={{
                                backgroundColor: "white",
                                zIndex: 9999,
                                followSpeed: 0.5,
                                scale: 5,
                                rotate: 720,
                                mixBlendMode: "darken",
                                backgroundElement: (
                                    <motion.div>
                                        <img src={data.icon} alt={data.title} />
                                    </motion.div>
                                )
                            }}
                        >
                            <motion.div 
                                    variants={fadeUp(data.delay)}
                                    initial="hidden"
                                    whileInView="show"
                                    className="flex flex-col items-center 
                                    justify-center p-5 max-w-[300px] mx-auto 
                                    shadow-lg rounded-xl bg-white">
                                <img src={data.icon} alt={data.title} className="w-[100px] mb-4" />
                                <div className="text-center space-y-2">
                                    <h1 className="text-2xl font-bold">
                                        {data.title}
                                    </h1>
                                    <p className="text-center text-sm text-black/75">
                                        {data.desc}
                                    </p>
                                </div>
                            </motion.div>
                        </UpdateFollower>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
