"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const NavItems = ({ isNavOpen, setIsNavOpen }) => {
	const [isMobile, setIsMobile] = useState(false);

	const handleItemClick = useCallback(() => {
		setIsNavOpen(false);
	}, [setIsNavOpen]);

	useEffect(() => {
		const updateScreenWidth = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		updateScreenWidth();
		window.addEventListener("resize", updateScreenWidth);

		return () => {
			window.removeEventListener("resize", updateScreenWidth);
		};
	}, []);

	const navVariant = {
		open: {
			clipPath: isMobile 
				? `circle(1920px at calc(100% - 40px) 40px)` 
				: `circle(2444px at calc(100% - 40px) 40px)`,
			transition: {
				type: "spring",
				stiffness: 400,
				damping: 40,
			},
		},
		closed: {
			clipPath: isMobile 
				? "circle(0px at calc(100% - 35px) 35px)" 
				: "circle(0px at calc(100% - 120px) 35px)",
			transition: {
				delay: 0.5,
				type: "spring",
				stiffness: 400,
				damping: 40,
			},
		},
	};

	const itemVariants = {
		open: (custom) => ({
			opacity: 1,
			x: 0,
			rotate: 0,
			transition: {
				delay: custom,
				type: "spring",
				stiffness: 400,
				damping: 40,
			},
		}),
		closed: {
			opacity: 0,
			x: -80,
			rotate: 0,
			transition: {
				type: "spring",
				stiffness: 400,
				damping: 40,
			},
		},
	};

	if (!isNavOpen) return null;

	return (
		<motion.div
			className="fixed z-[45] w-full h-screen flex items-center justify-center backdrop-blur-sm transition-all ease duration-700 overflow-hidden"
			variants={navVariant}
			animate="open"
			initial="closed"
			exit="closed">
			<div className="relative backdrop-blur-sm opacity-95 flex flex-col items-center space-x-8 min-h-[100vh] bg-white min-w-[100vw] shadow-2xl">
				<div className="flex flex-col items-center space-y-8 my-auto mx-0 z-50">
					<motion.h1
						variants={itemVariants}
						animate="open"
						initial="closed"
						className="text-6xl font-bold text-[#0f8fd4]">
						Menu
					</motion.h1>
					
					<Link href="/#home">
						<motion.h2
							onClick={handleItemClick}
							className="text-2xl font-bold text-gray-800 active:text-[#0f8fd4] md:hover:text-[#0f8fd4] transition-colors duration-300 cursor-pointer"
							variants={itemVariants}
							animate="open"
							initial="closed"
							custom={0.1}>
							Home
						</motion.h2>
					</Link>

					<Link href="/about">
						<motion.h2
							onClick={handleItemClick}
							className="text-2xl font-bold text-gray-800 active:text-[#0f8fd4] md:hover:text-[#0f8fd4] transition-colors duration-300 cursor-pointer"
							variants={itemVariants}
							animate="open"
							initial="closed"
							custom={0.2}>
							About
						</motion.h2>
					</Link>

					<Link href="/projects">
						<motion.h2
							onClick={handleItemClick}
							className="text-2xl font-bold text-gray-800 active:text-[#0f8fd4] md:hover:text-[#0f8fd4] transition-colors duration-300 cursor-pointer"
							variants={itemVariants}
							animate="open"
							initial="closed"
							custom={0.3}>
							Projects
						</motion.h2>
					</Link>

					<Link href="/#contact">
						<motion.h2
							onClick={handleItemClick}
							className="text-2xl font-bold text-gray-800 active:text-[#0f8fd4] md:hover:text-[#0f8fd4] transition-colors duration-300 cursor-pointer"
							variants={itemVariants}
							animate="open"
							initial="closed"
							custom={0.4}>
							Contact
						</motion.h2>
					</Link>
				</div>
			</div>
		</motion.div>
	);
};

const Navbar = () => {
	const navRef = useRef(null);
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [isToggling, setIsToggling] = useState(false);

	const toggleNav = useCallback(() => {
		if (isToggling) return; // Prevent multiple rapid clicks
		
		setIsToggling(true);
		setIsNavOpen(prev => !prev);
		
		// Reset the toggle lock after animation
		setTimeout(() => {
			setIsToggling(false);
		}, 300);
	}, [isToggling]);

	// Close menu when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (navRef.current && !navRef.current.contains(event.target) && isNavOpen) {
				setIsNavOpen(false);
			}
		};

		if (isNavOpen) {
			document.addEventListener('mousedown', handleClickOutside);
			document.addEventListener('touchstart', handleClickOutside, { passive: true });
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('touchstart', handleClickOutside);
		};
	}, [isNavOpen]);

	// Prevent body scroll when menu is open
	useEffect(() => {
		if (isNavOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isNavOpen]);

	return (
		<>
			<nav
				ref={navRef}
				className={`navbar px-5 md:px-24 w-screen fixed bg-white md:bg-transparent transition-colors ease duration-500 ${
					isNavOpen
						? "backdrop-filter backdrop-blur-sm bg-opacity-90"
						: "backdrop-filter backdrop-blur-sm bg-opacity-80"
				} inset-0 flex flex-row justify-between items-center h-16 z-50`}>
				<div>
					<h1
						className={`text-2xl w-24 ml-2 md:ml-0 transition-colors ease duration-500 ${
							isNavOpen ? "text-blue-600" : "text-gray-800"
						}`}>
						<Image 
							src="/image/logo.png" 
							alt="Logo" 
							width={96} 
							height={48}
							className="w-auto h-auto"
						/>
					</h1>
				</div>
				<div className="flex flex-row items-center">
					<button
						type="button"
						className="burger button flex flex-col justify-center items-center space-y-1.5 p-4 rounded-lg active:bg-gray-200 md:hover:bg-gray-100 transition-colors duration-300"
						onClick={toggleNav}
						disabled={isToggling}>
						<div
							className={`w-8 h-0.5 rounded-full transition-all ease duration-300 ${
								isNavOpen ? "rotate-45 bg-blue-600 translate-y-[4px]" : "bg-gray-800"
							}`}></div>
						<div
							className={`w-8 h-0.5 rounded-full transition-all ease duration-300 ${
								isNavOpen ? "-rotate-45 -translate-y-1 bg-blue-600" : "bg-gray-800"
							}`}></div>
					</button>
				</div>
			</nav>
			<NavItems isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
		</>
	);
};

export default Navbar;