"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/legacy/image";
import FixedButton from "@/components/FixedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Hr from "@/components/Hr";
import ContactInfo from "./components/contactInfo/contactInfo";
import ContactForm from "./components/contactForm/contactForm";

// Import your hero image
import Hero from "@/public/image/setup.jpg";

export default function ContactPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <main className="overflow-hidden">
        <FixedButton href="/#contact">
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="text-[#0f8fd4] pr-10"
          />
        </FixedButton>
        
        {/* Hero Section */}
        <div className="relative h-screen gap-4 p-10 flex justify-center items-center flex-col mb-10 overflow-hidden">
          {/* Hero image - only show on desktop */}
          {!isMobile && (
            <div className="z-0 mb-48 md:mb-0 md:absolute top-1/4 md:right-[10%] md:-translate-y-16">
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: 1.6 }}
                transition={{ ease: "circOut", duration: 1 }}
                className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0 border-4 border-[#0f8fd4] shadow-lg shadow-[#0f8fd4]/20"
              >
                <Image
                  src={Hero}
                  alt="Contact Web Vision Agency"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                />
              </motion.div>
            </div>
          )}
          
          {/* Content - adjusted positioning for mobile */}
          <div className={`z-10 w-full ${
            isMobile 
              ? 'relative flex flex-col justify-center items-center text-center h-full' 
              : 'absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start'
          } px-10 pt-4 ${
            isMobile 
              ? 'bg-transparent' 
              : 'backdrop-filter backdrop-blur-sm md:backdrop-blur-none bg-gray-100 bg-opacity-50 md:bg-transparent'
          } md:pt-0`}>
            <h1 className={`${
              isMobile 
                ? 'text-center text-6xl mb-4' 
                : 'md:bg-white bg-transparent lg:bg-transparent bg-opacity-50 md:px-0 text-5xl md:text-8xl'
            } text-black font-bold`}>
              Contact <span className="text-[#0f8fd4]">Us</span>
            </h1>
            <Hr />
            <p className={`title text-xl mt-4 tracking-wider text-gray-900 leading-[1.7rem] mb-5 ${
              isMobile ? 'text-center max-w-md' : ''
            }`}>
              Ready to start your project?{" "}
              <span className={`${
                isMobile 
                  ? 'text-[#0f8fd4] font-medium' 
                  : 'bg-transparent md:bg-gray-100 bg-opacity-50 xl:bg-transparent text-[#0f8fd4] font-medium'
              }`}>
                Let's discuss your ideas.
              </span>
            </p>
          </div>
        </div>
        
        {/* Contact Content */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <ContactInfo />
            
            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </main>
    </>
  );
}