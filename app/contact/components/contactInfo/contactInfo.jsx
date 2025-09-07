"use client";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const contactDetails = [
  {
    icon: faEnvelope,
    title: "Email",
    details: ["webvisionagency0@gmail.com"],
    link: "mailto:webvisionagency0@gmail.com",
  },
  {
    icon: faMapMarkerAlt,
    title: "Location",
    details: ["El Jadida, Morocco"],
  },
  {
    icon: faPhone,
    title: "Phone",
    details: ["+212 6 02 39 37 95"],
    link: "tel:+212602393795",
  },
  {
    icon: faClock,
    title: "Working Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Weekend: On Request"],
  },
];

const socialLinks = [
  {
    icon: faEnvelope,
    href: "mailto:webvisionagency0@gmail.com",
    label: "Email",
    color: "hover:text-red-500",
  },
  {
    icon: faInstagram,
    href: "https://www.instagram.com/webvision__agency/",
    label: "Instagram",
    color: "hover:text-pink-500",
  },
  {
    icon: faFacebook,
    href: "https://www.facebook.com/webvisionagency0/",
    label: "Facebook",
    color: "hover:text-blue-600",
  },
];

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="space-y-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold bg-gradient-to-r from-black to-[#0f8fd4] bg-clip-text text-transparent"
        >
          Let&apos;s Build Something Amazing Together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 text-lg leading-relaxed"
        >
          Ready to transform your digital presence? Whether you need a stunning website, 
          effective SEO strategy, social media growth, or innovative AI solutions, 
          I&apos;m here to bring your vision to life.
        </motion.p>
      </div>

      {/* Contact Details */}
      <div className="space-y-6">
        {contactDetails.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="flex items-start space-x-4 p-4 rounded-lg bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-[#0f8fd4] rounded-full flex items-center justify-center text-white">
                <FontAwesomeIcon icon={item.icon} className="text-lg" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-black mb-1">
                {item.title}
              </h3>
              {item.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600">
                  {item.link ? (
                    <a
                      href={item.link}
                      className="hover:text-[#0f8fd4] transition-colors duration-300"
                    >
                      {detail}
                    </a>
                  ) : (
                    detail
                  )}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="space-y-4"
      >
        <h3 className="text-xl font-semibold text-black">
          Follow Us on Social Media
        </h3>
        <div className="flex space-x-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#0f8fd4] hover:text-white transition-all duration-300 transform hover:scale-110 ${social.color}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + index * 0.1 }}
            >
              <FontAwesomeIcon icon={social.icon} className="text-lg" />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Why Choose Us */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="p-6 bg-gradient-to-br from-[#0f8fd4]/10 to-black/5 rounded-xl border border-[#0f8fd4]/20"
      >
        <h3 className="text-xl font-semibold text-black mb-4">
          Why Choose Web Vision Agency?
        </h3>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-[#0f8fd4] rounded-full"></span>
            <span>Custom solutions tailored to your business needs</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-[#0f8fd4] rounded-full"></span>
            <span>Competitive pricing with transparent costs</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-[#0f8fd4] rounded-full"></span>
            <span>Fast delivery and ongoing support</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-[#0f8fd4] rounded-full"></span>
            <span>Expertise in latest technologies and trends</span>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
}