import React from 'react';
import Hearingaid1 from "../../assets/icons/haid1.png";
import Hearingaid2 from "../../assets/icons/haid2.png";
import Hearingaid3 from "../../assets/icons/haid3.png";
import { FaWhatsapp } from "react-icons/fa";
import { UpdateFollower } from "react-mouse-follower";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

const fadeUp = (delay) => ({
    hidden: {
        opacity: 0,
        y: 100,
        scale: 0.5,
    },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            delay: delay,
            ease: easeInOut,
        },
    },
    exit: {
        opacity: 0,
        y: 50,
        scale: 0.5,
        transition: {
            duration: 0.2,
            ease: easeInOut,
        },
    },
});

const headphoneData = [
    {
        id: 1,
        image: Hearingaid1,
        title: "ToneMaster Elite",
        subtitle: "ToneMaster Elite offers superior sound quality with precision-tuned audio technology, providing a rich, natural listening experience. Its adaptive features automatically adjust to various environments, ensuring optimal clarity and comfort. Designed for elegance and convenience, ToneMaster Elite combines advanced performance with a sleek, discreet profile for everyday use.",
        price: "£3895",
        modal: "Grayish blue",
        bgcolor: "#9eaab8",
    },
    {
        id: 2,
        image: Hearingaid2,
        title: "ToneMaster Amber",
        subtitle: "ClearTone Premium provides unparalleled audio clarity with cutting-edge sound enhancement technology, making every conversation crisp and clear. Its adaptive sound processing adjusts seamlessly to different environments, ensuring a perfect listening experience wherever you are. With a stylish, comfortable design and long-lasting battery life, ClearTone Premium is the perfect blend of functionality and sophistication.",
        price: "£3895",
        modal: "Walnut creame",
        bgcolor: "#dbcbbc",
    },
    {
        id: 3,
        image: Hearingaid3,
        title: "ToneMaster Hoary",
        subtitle: "TrueTone Vision delivers exceptional sound fidelity with innovative tuning technology,allowing you to hear every nuance with perfect clarity. Its smart adaptive features optimize performance based on your surroundings, ensuring clear and comfortable listening. Combining modern aesthetics with user-friendly controls, TrueTone Vision offers a refined and seamless hearing experience",
        price: "£3895",
        modal: "Clacier Gray",
        bgcolor: "#d6d5d5",
    },
];

const Hero = () => {
    const [activeData, setActiveData] = React.useState(headphoneData[0]);

    const handleActiveData = (data) => {
        setActiveData(data);
    }

    return (
        <section className="bg-brandDark text-white font-varela">
            <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
                {/* ______ Headphone Info ______ */}
                <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]">
                    <div className="space-y-5 text-center md:text-left">
                        <AnimatePresence mode="wait">
                            <UpdateFollower
                                mouseOptions={{
                                    backgroundColor: "white",
                                    zIndex: 9999,
                                    followSpeed: 0.5,
                                    rotate: -720,
                                    mixBlendMode: "difference",
                                    scale: 10,
                                }}
                            >
                                <motion.h1
                                    key={activeData.id}
                                    variants={fadeUp(0.2)}
                                    initial="hidden"
                                    animate="show"
                                    exit="exit"
                                    className="text-3xl lg:text-6xl font-bold font-varela"
                                >
                                    {activeData.title}
                                </motion.h1>
                            </UpdateFollower>
                        </AnimatePresence>
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={activeData.id}
                                variants={fadeUp(0.3)}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                                className="text-sm leading-loose text-white/80"
                            >
                                {activeData.subtitle}
                            </motion.p>
                        </AnimatePresence>
                        <AnimatePresence mode="wait">
                            <UpdateFollower
                                mouseOptions={{
                                    backgroundColor: activeData.bgcolor,
                                    zIndex: 9999,
                                    followSpeed: 0.5,
                                    rotate: -720,
                                    scale: 6,
                                    backgroundElement: (
                                        <div>
                                            <img src={activeData.image} />
                                        </div>
                                    ),
                                }}
                            >
                                <motion.button
                                    key={activeData.id}
                                    variants={fadeUp(0.3)}
                                    initial="hidden"
                                    animate="show"
                                    exit="exit"
                                    style={{ backgroundColor: activeData.bgcolor }}
                                    className="px-4 py-2 inline-block font-normal rounded-sm">
                                    Experience Clarity
                                </motion.button>
                            </UpdateFollower>
                        </AnimatePresence>

                        {/* ______ hearingaid List Separator ______*/}
                        <div className="flex items-center justify-center md:justify-start gap-4 !mt-24">
                            <div className="w-20 h-[1px] bg-white"></div>
                            <p className="uppercase text-sm">Best hearing aids tailored for you</p>
                            <div className="w-20 h-[1px] bg-white"></div>
                        </div>

                        {/* ________ Hearingaid List Switcher ________ */}
                        <div className="grid grid-cols-3 gap-10">
                            {headphoneData.map((item) => {
                           return (
                                <UpdateFollower
                                    key={item.id}
                                    mouseOptions={{
                                        backgroundColor: item.bgcolor,
                                        zIndex: 9999,
                                        followSpeed: 0.5,
                                        scale: 5,
                                        text: "View Details",
                                        textFontSize: "2px",
                                    }}
                                >
                                    <div
                                        onClick={() => handleActiveData(item)}
                                        className="grid grid-cols-2 place-items-center cursor-pointer"
                                    >
                                        <div>
                                            <img src={item.image} alt="" className="w-[200px]" />
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-base font-bold">{item.price}</p>
                                            <p className="text-xs font-normal text-nowrap">{item.modal}</p>
                                        </div>
                                    </div>
                                </UpdateFollower>
                           );
                        })}
                        </div>
                    </div>
                </div>

                {/* ______ main Image ______ */}
                <div className="flex flex-col justify-end items-center">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={activeData.id}
                            initial={{ opacity: 0, scale: 0.9, y: 100 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2, ease: easeInOut }}
                            exit={{
                                opacity: 0,
                                scale: 0.9,
                                y: 100,

                                transition: {
                                    duration: 0.2
                                },
                            }}
                            src={activeData.image}
                            alt=""
                            className="w-[300px] md:w-[400px] xl:w-[550px]"
                        />
                    </AnimatePresence>
                </div>

                {/* ______ WhatsApp Icon  ______ */}
                <div className="text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference">
                    <a href="#">
                        <FaWhatsapp />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
