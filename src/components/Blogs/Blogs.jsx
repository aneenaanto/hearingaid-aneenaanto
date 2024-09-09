import React from 'react';
import Blogs1 from "../../assets/blogs/blg1.jpg";
import Blogs2 from "../../assets/blogs/blg2.jpg";
import Blogs3 from "../../assets/blogs/blg3.jpg";
import Blogs4 from "../../assets/blogs/blg4.png";
import { UpdateFollower } from 'react-mouse-follower';
import { motion } from "framer-motion";

const BlogsData = [
    {
        id: 1,
        title: "How to Safely Clean Your Ears: Doctor’s Advice",
        desc: "According to doctors, avoid using cotton swabs or inserting objects into your ear canal, as this can push wax further in or cause injury. Instead, gently clean the outer ear with a damp cloth and consult a healthcare professional for safe ear cleaning solutions if you experience discomfort or a buildup of earwax.",
        link: "#",
        img: Blogs1,
    },
    {
        id: 2,
        title: "Understanding Ear Pain or otalgia",
        desc: "otalgia, can stem from several causes, including infections, injuries, or underlying medical conditions. Common causes include ear infections, sinus infections, or even referred pain from dental issues. If you're experiencing ear pain, it’s crucial to avoid inserting objects into the ear canal and consult a healthcare professional for an accurate diagnosis and treatment.",
        link: "#",
        img: Blogs2,
    },
    {
        id: 3,
        title: "Dealing with cerumen and Hearing issues",
        desc: "Earwax, or cerumen, is a natural substance that protects and cleans the ear canal, but too much can lead to discomfort and hearing issues. Doctors advise against using cotton swabs or other objects to remove earwax, as this can push it deeper or cause injury. Instead, consider using over-the-counter ear drops or consult a healthcare professional for safe removal methods if you experience symptoms like earache or hearing loss. Regular check-ups can help manage earwax buildup and maintain ear health.",
        link: "#",
        img: Blogs3,
    },
    {
        id: 4,
        title: "Exploring New Hearing Aid Models: What’s New in 2024",
        desc: "The latest hearing aid models for 2024 offer cutting-edge technology and improved user experience. New advancements include advanced digital processing for clearer sound, Bluetooth connectivity for seamless integration with smartphones and other devices, and rechargeable batteries for convenience. Many models now feature noise reduction and directional microphones to enhance hearing in various environments. For personalized recommendations and to find the best fit for your needs, consult with an audiologist who can guide you through the latest options and features.",
        link: "#",
        img: Blogs4,
    },
]

const Blogs = () => {
  return <>
  <section className="bg-gray-50">
    <div className="container py-14">
    <h1
    className="text-3xl font-bold text-center
    font-poppins pb-8">
    Blogs
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2
    md:grid-cols-4 gap-6">
        {BlogsData.map((data) => {
            return <>
            <UpdateFollower
             mouseOptions={{
                backgroundColor: "black",
                zIndex: 999,
                followSpeed: 1.5,
                text: "read",
                textFontSize: "3px",
                scale: 5,
            }}
            >
                <div
                className="flex flex-col items-center justify-center
                p-5 max-w-[300px] mx-auto shadow-lg rounded-md bg-white
                hover:-translate-y-2 duration-300"
                >
                <img src={data.img} alt="" />
                <div className="space-y-2">
                    <h1 className="text-lg font-bold line-clamp-2">
                    {data.title}
                    </h1>
                    <p className="line-clamp-2">
                    {data.desc}
                    </p>
                </div>
                </div>
            </UpdateFollower>
            </>
        })}
    </div>
    </div>
  </section>
  </>
};

export default Blogs;