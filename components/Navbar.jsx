"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const NavItems = ({ isNavOpen, setIsNavOpen }) => {
	const [isMobile, setIsMobile] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);

	const handleItemClick = useCallback(() => {
		if (!isAnimating) {
			setIsNavOpen(false);
		}
	}, [isAnimating, setIsNavOpen]);

	const navVariant = {
		open: {
			clipPath: isMobile 
				? `circle(1920px at calc(100% - 40px) 40px)`
				: `circle(2444px at calc(100% - 40px) 40px)`,
			transition: {
				type: "spring",
				stiffness: 400,
				damping: 40,
				onComplete: () => setIsAnimating(false)
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
				onComplete: () => setIsAnimating(false)
			},
		},
	};

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

	// Track animation state
	useEffect(() => {
		if (isNavOpen !== undefined) {
			setIsAnimating(true);
		}
	}, [isNavOpen]);

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

	return (
		<AnimatePresence mode="wait">
			{isNavOpen && (
				<motion.div
					key="nav-overlay"
					className="fixed z-[45] w-full h-screen flex items-center justify-center backdrop-blur-sm transition-all ease duration-700 overflow-hidden"
					variants={navVariant}
					initial="closed"
					animate="open"
					exit="closed"
					onAnimationStart={() => setIsAnimating(true)}
					onAnimationComplete={() => setIsAnimating(false)}
				>
					<div className="relative backdrop-blur-sm opacity-95 flex flex-col items-center space-x-8 min-h-[100vh] bg-white min-w-[100vw] shadow-2xl">
						<div className="flex flex-col items-center space-y-8 my-auto mx-0 z-50">
							<motion.h1
								variants={itemVariants}
								initial="closed"
								animate="open"
								className="text-6xl font-bold text-[#0f8fd4]"
							>
								Menu
							</motion.h1>
							
							<Link href="/#home">
								<div
									className="text-2xl font-bold text-gray-800 hover:text-[#0f8fd4] transition-colors duration-300 cursor-pointer"
									onClick={handleItemClick}
								>
									<motion.h2
										className="text-gray-800 hover:text-[#0f8fd4] transition-colors duration-300"
										variants={itemVariants}
										initial="closed"
										animate="open"
										custom={0.1}
									>
										Home
									</motion.h2>
								</div>
							</Link>
							
							<Link href="/about">
								<div
									onClick={handleItemClick}
									className="text-2xl font-bold text-gray-800 hover:text-[#0f8fd4] transition-colors duration-300 cursor-pointer"
								>
									<motion.h2
										className="text-gray-800 hover:text-[#0f8fd4] transition-colors duration-300"
										variants={itemVariants}
										initial="closed"
										animate="open"
										custom={0.2}
									>
										About
									</motion.h2>
								</div>
							</Link>
							
							<Link href="/projects">
								<div
									onClick={handleItemClick}
									className="text-2xl font-bold text-gray-800 hover:text-[#0f8fd4] transition-colors duration-300 cursor-pointer"
								>
									<motion.h2
										className="text-gray-800 hover:text-[#0f8fd4] transition-colors duration-300"
										variants={itemVariants}
										initial="closed"
										animate="open"
										custom={0.3}
									>
										Projects
									</motion.h2>
								</div>
							</Link>
							
							<Link href="/#contact">
								<div
									onClick={handleItemClick}
									className="text-2xl font-bold text-gray-800 hover:text-[#0f8fd4] transition-colors duration-300 cursor-pointer"
								>
									<motion.h2
										className="text-gray-800 hover:text-[#0f8fd4] transition-colors duration-300"
										variants={itemVariants}
										initial="closed"
										animate="open"
										custom={0.4}
									>
										Contact
									</motion.h2>
								</div>
							</Link>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

const Navbar = () => {
	const navRef = useRef(null);
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [isToggling, setIsToggling] = useState(false);

	const toggleNav = useCallback(() => {
		if (isToggling) return; // Prevent multiple rapid clicks
		
		setIsToggling(true);
		setIsNavOpen(!isNavOpen);
		
		// Reset toggle lock after animation
		setTimeout(() => setIsToggling(false), 800);
	}, [isNavOpen, isToggling]);

	// Prevent body scroll when nav is open
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
				} inset-0 flex flex-row justify-between items-center h-16 z-50`}
			>
				<div>
					<h1
						className={`text-2xl w-24 ml-2 md:ml-0 transition-colors ease duration-500 ${
							isNavOpen ? "text-blue-600" : "text-gray-800"
						}`}
					>
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
						className="burger button flex flex-col justify-center items-center space-y-1.5 p-4 rounded-lg hover:bg-gray-100 transition-colors duration-300"
						onClick={toggleNav}
						disabled={isToggling}
						style={{ 
							touchAction: 'manipulation',
							WebkitTouchCallout: 'none',
							WebkitUserSelect: 'none'
						}}
					>
						<div
							className={`w-8 h-0.5 rounded-full transition-all ease duration-300 ${
								isNavOpen ? "rotate-45 bg-blue-600 translate-y-[4px]" : "bg-gray-800"
							}`}
						/>
						<div
							className={`w-8 h-0.5 rounded-full transition-all ease duration-300 ${
								isNavOpen ? "-rotate-45 -translate-y-1 bg-blue-600" : "bg-gray-800"
							}`}
						/>
					</button>
				</div>
			</nav>
			
			<NavItems isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
		</>
	);
};

export default Navbar;