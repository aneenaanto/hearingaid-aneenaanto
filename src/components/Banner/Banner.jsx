import React from 'react';
import Hearingaid4 from "../../assets/icons/haid4.png";
import { motion } from "framer-motion";
import { UpdateFollower } from 'react-mouse-follower';
import { fadeUp } from "../Services/Services"

const Banner = () => {
  return (
    <>
    <section>
        <div className="container py-14 grid grid-cols-1 
        md:grid-cols-2 space-y-6 md:space-y-0 gap-12">
        {/* ______ Banner image ______*/}
        <div>
            <motion.img 
            initial={{ opacity: 0, x: -100, rotate: -180 }}
            animate={{ opacity: 1, x: 0, rotate: 0}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut"}}
            src={Hearingaid4} 
            alt="" 
            className="w-[300px]
            md:w-[400px]" />
        </div>
        {/* ______ Banner Text Info ______*/}
        <div className="flex flex-col justify-center">
            <div className="text-center md:text-left space-y-4
            lg:max-w-[450px]">
                <motion.h1 
                variants={fadeUp(0.7)}
                initial="hidden"
                whileInView="show"
                className="text-3xl lg:text-4xl font-semibold font-poppins">
                Empowering Lives with Cutting-Edge Hearing Solutions
                </motion.h1>
                <motion.p
                 variants={fadeUp(0.9)}
                 initial="hidden"
                 whileInView="show"
                >
                   In a world where clear communication is essential, our hearing aids stand as a beacon of innovation and support. By enhancing auditory experiences, our products play a crucial role in connecting individuals with their families, friends, and communities. They not only improve daily interactions but also foster greater independence and confidence. Embrace the power of advanced hearing technology and rediscover the full spectrum of sound that enriches life and strengthens societal bonds.
                    </motion.p>
                    <UpdateFollower
                    mouseOptions={{
                        backgroundColor: "white",
                        zIndex: 9999,
                        followSpeed: 0.5,
                        mixBlendMode: "diffrence",
                        scale: 5,
                    }}
                    >
                    <motion.button 
                     variants={fadeUp(1.3)}
                     initial="hidden"
                     whileInView="show"
                    className="border-2 border-[#327daf] text-[#28447b]
                    px-6 py-2 rounded-md hover:bg-[#85b8f3] hover:text-white">
                    Shop Now
                    </motion.button>
                    </UpdateFollower>
            </div>
        </div>
        </div>
    </section>
    </>
  );
};

export default Banner;