"use client";
import ReactFullpage from "@fullpage/react-fullpage";
import Image from "next/legacy/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import Head from "next/head";

// components
import Button from "@/components/Button";
import Me from "@/public/image/me.jpg";
import MeAbout from "@/public/image/me2.jpg";
import Setup from "@/public/image/setup.jpg";
import ProjectAll from "@/public/image/projects.png";
import Hr from "@/components/Hr";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";


const MyPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const fullpageOptions = {
    anchors: ["home", "about", "projects", "contact"],
    scrollingSpeed: 1000,
    licenseKey: "gplv3-license",
    menu: "#sidebar",
    lockAnchors: false,
  };

  const imageAnimationProps = {
    initial: {
      x: isMobile ? 0 : 300,
      opacity: 0,
      scale: 1,
    },
    whileInView: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    transition: {
      delay: isMobile ? 0.2 : 0.5,
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
    viewport: { once: true },
  };

  return (
    <>
      <Head>
        {/* Enhanced SEO meta tags */}
        <title>
          Web Vision Agency | #1 Digital Marketing & Web Development Agency in
          Morocco
        </title>
        <meta
          name="description"
          content="🚀 Transform your business with Morocco's premier digital agency! We create high-converting websites, dominate Google rankings, run profitable ads, grow social media, and build AI solutions. Get 10x ROI guaranteed!"
        />
        <meta
          name="keywords"
          content="web development morocco, digital marketing agency casablanca, seo services morocco, website design morocco, ai solutions morocco, wordpress development morocco, shopify store morocco, google ads morocco, facebook ads morocco, instagram marketing morocco"
        />

        {/* Enhanced Open Graph */}
        <meta
          property="og:title"
          content="Web Vision Agency | Transform Your Business with Digital Excellence"
        />
        <meta
          property="og:description"
          content="Morocco's #1 digital agency for websites, SEO, ads & AI solutions. 500+ successful projects, 98% client satisfaction rate."
        />
        <meta
          property="og:image"
          content="https://webvisionagency.ma/og-image-rev.png"
        />
        <meta property="og:url" content="https://webvisionagency.ma" />
        <meta property="og:type" content="website" />

        {/* Enhanced Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Web Vision Agency | #1 Digital Agency Morocco 🚀"
        />
        <meta
          name="twitter:description"
          content="Transform your business with high-converting websites, top SEO rankings & AI solutions."
        />
        <meta
          name="twitter:image"
          content="https://webvisionagency.ma/og-image-rev.png"
        />

        {/* Additional SEO enhancements */}
        <link rel="canonical" href="https://webvisionagency.ma" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="author" content="Web Vision Agency" />
        <meta name="publisher" content="Web Vision Agency" />

        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Web Vision Agency",
            description:
              "Premier digital marketing and web development agency in Morocco",
            url: "https://webvisionagency.ma",
            telephone: "+212-602-393-795",
            email: "webvisionagency0@gmail.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "El Jadida",
              addressRegion: "Casablanca-Settat",
              addressCountry: "Morocco",
            },

            openingHours: ["Mo-Fr 09:00-18:00"],
            priceRange: "$$",
            image: "https://webvisionagency.ma/image/logo.png",
            sameAs: [
              "https://www.facebook.com/share/1CmMaTM3JB/?mibextid=wwXIfr",
              "https://www.instagram.com/webvision__agency",
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Digital Marketing Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Website Development",
                    description:
                      "Custom websites, WordPress, and Shopify development",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "SEO Services",
                    description:
                      "Search engine optimization to rank #1 on Google",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Digital Advertising",
                    description: "Google Ads and Facebook Ads management",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "AI Solutions",
                    description: "AI chatbots and automation solutions",
                  },
                },
              ],
            },
          })}
        </script>
      </Head>
      <div>
        <ReactFullpage
          render={({ state, fullpageApi }) => (
            <ReactFullpage.Wrapper>
              {/* Home Section */}
              <div className="section">
                <div className="mx-auto container flex flex-col items-center justify-center p-10 overflow-hidden md:px-20">
                  <motion.div
                    className="flex flex-col justify-center items-center text-center max-w-4xl"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                    }}
                  >
                    <motion.h3
                      className="uppercase text-xl mb-3 font-normal tracking-[.5rem] text-gray-500 text-center"
                      initial={{ x: -100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.2,
                        type: "spring",
                      }}
                    >
                      Web Vision Agency
                    </motion.h3>
                    <motion.h1
                      className="text-5xl md:text-6xl py-[10px] lg:text-7xl 2xl:text-8xl font-bold my-2 md:my-5 text-center relative"
                      initial={{ x: 0, opacity: 1 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      style={{
                        color: "transparent",
                        WebkitTextStroke: "2px #000",
                        textStroke: "2px #000",
                        background: `
                        linear-gradient(
                        90deg,
                        #000 0%,
                        #000 var(--fill-start, 0%),
                        #0f8fd4 var(--fill-start, 0%),
                        #0f8fd4 calc(var(--fill-start, 0%) + 10%),
                        #0f8fd4 calc(var(--fill-start, 0%) + 20%),
                        #0f8fd4 calc(var(--fill-start, 0%) + 30%),
                        #0f8fd4 calc(var(--fill-start, 0%) + 40%),
                        #0f8fd4 calc(var(--fill-start, 0%) + 50%),
                        #0f8fd4 calc(var(--fill-start, 0%) + 60%),
                        #000 calc(var(--fill-start, 0%) + 60%),
                        #000 100%
                        )
                      `,
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        "--fill-start": "0%",
                      }}
                      animate={{
                        "--fill-start": [
                          "-60%",
                          "-50%",
                          "-40%",
                          "-30%",
                          "-20%",
                          "-10%",
                          "0%",
                          "10%",
                          "20%",
                          "30%",
                          "40%",
                          "50%",
                          "60%",
                          "70%",
                          "80%",
                          "90%",
                          "100%",
                        ],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "restart",
                      }}
                    >
                      We turn your ideas into real digital growth
                    </motion.h1>
                    <motion.p
                      className="title text-[1.1rem] 2xl:text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] text-center"
                      initial={{ x: -100, opacity: 1 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.4,
                        type: "spring",
                      }}
                    >
                      Websites, SEO, Ads, Social Media & AI solutions —
                      everything you need to grow online.
                    </motion.p>
                    <motion.div
                      className="buttons flex flex-row justify-center items-center space-x-4 mt-10"
                      initial={{ x: -100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.5,
                        type: "spring",
                      }}
                    >
                      <Button variation="secondary">
                        <a href="#contact">Contact Me</a>
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* About Section */}
              <div className="section">
                <div className="relative w-screen gap-4 flex justify-center items-center flex-col overflow-hidden min-h-screen">
                  <div className="z-0 mb-48 md:mb-0 md:absolute md:top-1/4 md:right-[10%] md:-translate-y-16">
                    <motion.div
                      className="bg-slate-300 rounded-sm grayscale hover:grayscale-0 relative"
                      style={{
                        height: isMobile ? "400px" : "600px",
                        width: isMobile ? "80vw" : "30vw",
                        maxWidth: isMobile ? "350px" : "none",
                      }}
                      {...imageAnimationProps}
                    >
                      <Image
                        src={MeAbout}
                        layout="fill"
                        className="object-cover"
                        alt="Alvalens"
                        placeholder="blur"
                        priority
                      />
                    </motion.div>
                  </div>
                  <div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 py-5">
                    <motion.h1
                      className="bg-white lg:bg-transparent bg-opacity-50 px-3 md:px-0 text-black text-5xl md:text-8xl font-bold"
                      initial={{ x: -100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.1,
                        type: "spring",
                      }}
                      viewport={{ once: true }}
                    >
                      About Us
                    </motion.h1>
                    <Hr />
                    <motion.p
                      className="title text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] mb-5"
                      initial={{ x: -100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.2,
                        type: "spring",
                      }}
                      viewport={{ once: true }}
                    >
                      A brief introduction about us and our interest.
                    </motion.p>
                    <motion.div
                      initial={{ y: 40, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: 0.3,
                        type: "spring",
                      }}
                      viewport={{ once: true }}
                    >
                      <Button variation="primary">
                        <Link href="/about">Learn More</Link>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Projects Section */}
              <div className="section">
                <div className="relative w-screen gap-4 p-10 flex justify-center items-center flex-col overflow-hidden min-h-screen">
                  <div className="z-0 mb-48 md:mb-0 md:absolute md:top-1/4 md:right-[10%] md:-translate-y-16">
                    <motion.div
                      className="bg-slate-300 rounded-sm grayscale hover:grayscale-0 relative"
                      style={{
                        height: isMobile ? "400px" : "600px",
                        width: isMobile ? "80vw" : "30vw",
                        maxWidth: isMobile ? "350px" : "none",
                      }}
                      {...imageAnimationProps}
                    >
                      <Image
                        src={ProjectAll}
                        layout="fill"
                        className="object-cover"
                        alt="Alvalens Setup"
                        placeholder="blur"
                        priority
                      />
                    </motion.div>
                  </div>
                  <div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 py-5">
                    <motion.h1
                      className="bg-white lg:bg-transparent bg-opacity-50 px-3 md:px-0 text-black text-5xl md:text-8xl font-bold"
                      initial={{ x: -100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.1,
                        type: "spring",
                      }}
                      viewport={{ once: true }}
                    >
                      My Projects
                    </motion.h1>
                    <Hr />
                    <motion.p
                      className="title text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] mb-5"
                      initial={{ x: -100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.2,
                        type: "spring",
                      }}
                      viewport={{ once: true }}
                    >
                      This is some of my projects that I have done <br />
                      <span className="bg-transparent md:bg-gray-100 bg-opacity-50 xl:bg-transparent">
                        and currently working on.
                      </span>
                    </motion.p>
                    <motion.div
                      initial={{ y: 40, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: 0.3,
                        type: "spring",
                      }}
                      viewport={{ once: true }}
                    >
                      <Button variation="primary">
                        <Link href="/projects">Learn More</Link>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="section">
                <div className="relative w-screen gap-4 p-10 flex justify-center items-center flex-col overflow-hidden min-h-screen">
                  <div className="z-0 mb-[196px] md:mb-0 md:absolute md:top-1/4 md:right-[10%] md:-translate-y-16">
                    <motion.div
                      className="bg-slate-300 rounded-sm grayscale hover:grayscale-0 relative"
                      style={{
                        height: isMobile ? "400px" : "600px",
                        width: isMobile ? "80vw" : "30vw",
                        maxWidth: isMobile ? "350px" : "none",
                      }}
                      {...imageAnimationProps}
                    >
                      <Image
                        src={Setup}
                        layout="fill"
                        className="object-cover"
                        alt="Web Vision Agency Setup"
                        placeholder="blur"
                        priority
                      />
                    </motion.div>
                  </div>

                  <div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 overflow-hidden">
                    <motion.h1
                      className="bg-white lg:bg-transparent bg-opacity-50 px-3 md:px-0 text-black text-5xl md:text-8xl font-bold mb-3"
                      initial={{ x: -100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.1,
                        type: "spring",
                      }}
                      viewport={{ once: true }}
                    >
                      Get In Touch
                    </motion.h1>
                    <Hr />

                    <motion.p
                      className="title text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] md:mb-5"
                      initial={{ x: -100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.2,
                        type: "spring",
                      }}
                      viewport={{ once: true }}
                    >
                      Feel free to contact me if you have any <br />
                      <span className="bg-transparent md:bg-gray-100 bg-opacity-50 xl:bg-transparent">
                        questions or just want to say hi.
                      </span>
                    </motion.p>

                    <motion.p
                      className="title text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] mb-5"
                      initial={{ x: -100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.3,
                        type: "spring",
                      }}
                      viewport={{ once: true }}
                    >
                      <a href="mailto:webvisionagency0@gmail.com?subject=Hello&body=Hello WebVisionAgency,">
                        webvisionagency0@gmail.com
                      </a>
                      <br />
                      <a href="tel:+212602393795">+212 6 02 39 37 95</a>
                    </motion.p>

                    <motion.div
                      initial={{ x: -100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.4,
                        type: "spring",
                      }}
                      viewport={{ once: true }}
                      className="mb-6"
                    >
                      <Link href="/contact">
                        <Button variation="primary">Start Your Project</Button>
                      </Link>
                    </motion.div>

                    <div className="flex justify-center items-center space-x-4">
                      <motion.a
                        href="mailto:webvisionagency0@gmail.com?subject=Hello&body=Hello WebVisionAgency,"
                        className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                          y: { delay: 0.1 },
                          opacity: { delay: 0.2 },
                        }}
                        viewport={{ once: true }}
                      >
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="text-3xl"
                        />
                      </motion.a>

                      <motion.a
                        href="https://www.facebook.com/share/19idXTQrfN/?mibextid=wwXIfr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          y: { delay: 0.2 },
                          opacity: { delay: 0.3 },
                        }}
                        viewport={{ once: true }}
                      >
                        <FontAwesomeIcon
                          icon={faFacebook}
                          className="text-3xl"
                        />
                      </motion.a>

                      <motion.a
                        href="https://www.instagram.com/webvision__agency/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          y: { delay: 0.3 },
                          opacity: { delay: 0.4 },
                        }}
                        viewport={{ once: true }}
                      >
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className="text-3xl"
                        />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </ReactFullpage.Wrapper>
          )}
          {...fullpageOptions}
        />
      </div>
    </>
  );
};

export default MyPage;
