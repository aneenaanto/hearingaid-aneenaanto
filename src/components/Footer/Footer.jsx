import React from 'react';
import { FaFacebook, FaGoogle, FaInstagram, FaPhone, FaTelegram } from 'react-icons/fa';
import { FaMapLocation } from 'react-icons/fa6';
import Cards from "../../assets/icons/credit-cards.webp";
import { motion } from "framer-motion";

const Footer = () => {
  return <>
  <footer className="bg-stone-900 pt-12 pb-8 text-white">
    <div className="container">
      <div className="grid grid-cols-1 sm:cols-2 md:grid-cols-3 gap-8">
      {/* ______ company details section _____ */}
        < motion.div 
        initial={{ opacity: 0, y:100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.6,
        }}
        className="space-y-6">
          <h1 className="text-3xl font-bold uppercase">
          TRUETONE HEARING
          </h1>
          <p className="text-sm max-w-[300px]">
          Welcome to Truetone Hearing, the UK's premier provider of advanced hearing aids. Our expert team delivers personalized care and top-notch service to enhance your hearing experience. Combining cutting-edge technology with tailored solutions, we aim to significantly improve your quality of life. Discover our range of high-quality products and services today.
          </p>
          <div>
            <p className="flex items-center gap-2">
              <FaPhone />
              +1 (123) 456-7890
            </p>
            <p className="flex items-center gap-2 mt-2">
            {" "}
            <FaMapLocation /> Hyde Park, London
            </p>
          </div>
        </motion.div>
      {/* ______ footer links section _____ */}
      <motion.div 
      initial={{ opacity: 0, y:100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.4,
        duration: 0.6,
      }}
      className="space-y-6">
        <h1 className="text-3xl font-bold">
          Quick Links
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <ul className="space-y-2">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      </motion.div>
      {/* ______ social links section _____ */}
        <motion.div 
        initial={{ opacity: 0, y:100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.6,
        }}
        className="space-y-6">
          <h1 className="text-3xl font-bold">
            Follow Us
          </h1>
          <div className="flex items-center gap-3">
            <FaFacebook className="text-3xl hover:scale-105 duration-300" />
            <FaInstagram className="text-3xl hover:scale-105 duration-300" />
            <FaTelegram className="text-3xl hover:scale-105 duration-300" />
            <FaGoogle className="text-3xl hover:scale-105 duration-300" />
          </div>
          <div className="space-y-2">
            <p>Payment Methods</p>
            <img src={Cards} alt="" className="w-[80%]" />
          </div>
        </motion.div>
        </div>
      {/* ______ copyright section _____ */}
        <p className="text-white text-center mt-8 border-t-2 pt-8">
        Copyright © 2024 True Tone Hearing Company. All rights reserved.
        </p>
    </div>
  </footer>
  </>;
};

export default Footer;