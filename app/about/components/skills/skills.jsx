"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CodepenIcon, WebhookIcon, ActivityIcon, MobileIcon } from "./icons"

const serviceCategories = {
	web: {
		title: "Web Development Services",
		icon: CodepenIcon,
		description: "Complete web solutions from custom code to CMS platforms",
		services: [
			"Custom Website Development",
			"WordPress Development",
			"Shopify Store Creation",
			"E-commerce Solutions",
			"Responsive Web Design",
			"Landing Pages",
			"Portfolio Websites",
			"Business Websites",
			"Blog Development",
			"Website Maintenance"
		],
		technologies: [
			"HTML/CSS/JavaScript",
			"React & NextJS",
			"PHP & Laravel",
			"WordPress",
			"Shopify",
			"WooCommerce",
			"Elementor",
			"Figma to Code",
			"Mobile-First Design"
		],
	},
	seo: {
		title: "SEO & Digital Marketing",
		icon: WebhookIcon,
		description: "Boost your online visibility and search rankings",
		services: [
			"Search Engine Optimization",
			"Keyword Research & Analysis",
			"On-Page SEO Optimization",
			"Technical SEO Audits",
			"Content Strategy",
			"Local SEO",
			"SEO Reporting & Analytics",
			"Competitor Analysis",
			"Link Building",
			"Website Speed Optimization"
		],
		technologies: [
			"Google Analytics",
			"Google Search Console",
			"SEMrush",
			"Ahrefs",
			"Yoast SEO",
			"Schema Markup",
			"Google PageSpeed",
			"GTmetrix",
			"Screaming Frog"
		],
	},
	social: {
		title: "Social Media & Ads",
		icon: MobileIcon,
		description: "Grow your social presence and run effective ad campaigns",
		services: [
			"Social Media Management",
			"Instagram Followers Growth",
			"YouTube Views & Engagement",
			"TikTok Likes & Followers",
			"Facebook Ads Management",
			"Google Ads Campaigns",
			"Content Creation",
			"Influencer Marketing",
			"Social Media Strategy",
			"Brand Awareness Campaigns"
		],
		technologies: [
			"Facebook Ads Manager",
			"Google Ads",
			"Instagram Business",
			"YouTube Analytics",
			"TikTok Ads",
			"Canva Pro",
			"Adobe Creative Suite",
			"Hootsuite",
			"Buffer",
			"Analytics Tools"
		],
	},
	ai: {
		title: "AI Solutions & Agents",
		icon: ActivityIcon,
		description: "Custom AI agents and intelligent automation solutions",
		services: [
			"Custom AI Agent Development",
			"Chatbot Creation",
			"Business Process Automation",
			"Customer Service Bots",
			"Lead Generation Agents",
			"Content Generation AI",
			"Data Analysis Automation",
			"AI Integration Services",
			"Machine Learning Solutions",
			"AI Consultation & Strategy"
		],
		technologies: [
			"OpenAI GPT API",
			"Google Gemini",
			"LangChain",
			"Python & FastAPI",
			"TensorFlow",
			"Dialogflow",
			"n8n",
			"Make.com",
			"Zapier",
			"Custom AI Models",
			"API Integration"
		],
	},
};

function ServiceCard({ service, isSelected, onClick }) {
	const Icon = service.icon;

	return (
		<motion.div
			onClick={onClick}
			className={`relative cursor-pointer group p-6 rounded-2xl backdrop-blur-lg border transition-all duration-300 ${
				isSelected
					? "bg-gradient-to-br from-[#0f8fd4]/20 to-black/20 border-[#0f8fd4] border-2 shadow-lg shadow-[#0f8fd4]/20"
					: "bg-white/10 border-gray-300/20 hover:bg-gradient-to-br hover:from-[#0f8fd4]/10 hover:to-black/10 hover:border-[#0f8fd4]/50"
			}`}
			whileHover={{
				scale: 1.05,
				rotateY: 5,
			}}
			whileTap={{ scale: 0.95 }}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				type: "spring",
				stiffness: 300,
				damping: 20,
			}}>
			{/* Glow effect */}
			{!isSelected && (
				<div className="absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-50 bg-gradient-to-r from-[#0f8fd4]/20 to-black/20 blur-xl" />
			)}

			<div className="relative z-10 flex flex-col items-center text-center space-y-4">
				<div
					className={`p-4 rounded-xl transition-all duration-300 ${
						isSelected 
							? "bg-gradient-to-br from-[#0f8fd4]/30 to-black/20" 
							: "bg-white/10 group-hover:bg-gradient-to-br group-hover:from-[#0f8fd4]/20 group-hover:to-black/10"
					}`}>
					<Icon className={`w-8 h-8 ${isSelected ? 'text-[#0f8fd4]' : 'text-black group-hover:text-[#0f8fd4]'}`} />
				</div>
				<div>
					<h3 className={`font-semibold text-lg mb-2 ${
						isSelected 
							? 'bg-gradient-to-r from-black to-[#0f8fd4] bg-clip-text text-transparent' 
							: 'text-black group-hover:text-[#0f8fd4]'
					}`}>
						{service.title}
					</h3>
					<p className="text-gray-600 text-sm leading-relaxed">
						{service.description}
					</p>
				</div>
			</div>
		</motion.div>
	);
}

function ServiceDetails({ selectedService }) {
	if (!selectedService) return null;

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -20 }}
			transition={{ duration: 0.5 }}
			className="mt-12 space-y-8">
			{/* Services Offered */}
			<motion.div
				className="backdrop-blur-lg bg-gradient-to-br from-white/20 to-[#0f8fd4]/10 border border-[#0f8fd4]/30 rounded-2xl p-8"
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.2 }}>
				<h3 className="text-2xl font-semibold bg-gradient-to-r from-black to-[#0f8fd4] bg-clip-text text-transparent mb-6 text-center">
					Services Offered
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
					{selectedService.services.map((service, index) => (
						<motion.div
							key={service}
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.3 + index * 0.1 }}
							className="px-4 py-3 bg-gradient-to-r from-[#0f8fd4]/20 to-black/10 
									 border border-[#0f8fd4]/40 rounded-full text-black font-medium
									 backdrop-blur-sm hover:scale-105 transition-transform cursor-default
									 hover:bg-gradient-to-r hover:from-[#0f8fd4]/30 hover:to-black/20
									 hover:border-[#0f8fd4]/60 hover:text-[#0f8fd4] hover:shadow-lg hover:shadow-[#0f8fd4]/20
									 text-center">
							{service}
						</motion.div>
					))}
				</div>
			</motion.div>

			{/* Technologies Used */}
			<motion.div
				className="backdrop-blur-lg bg-gradient-to-br from-[#0f8fd4]/10 to-white/20 border border-black/30 rounded-2xl p-8"
				initial={{ opacity: 0, x: 50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.4 }}>
				<h3 className="text-2xl font-semibold bg-gradient-to-r from-[#0f8fd4] to-black bg-clip-text text-transparent mb-6 text-center">
					Technologies & Tools
				</h3>
				<div className="flex flex-wrap justify-center gap-3">
					{selectedService.technologies.map((tech, index) => (
						<motion.span
							key={tech}
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.5 + index * 0.1 }}
							className="px-4 py-2 bg-gradient-to-r from-black/20 to-[#0f8fd4]/10 
									 border border-black/40 rounded-full text-black font-medium
									 backdrop-blur-sm hover:scale-105 transition-transform cursor-default
									 hover:bg-gradient-to-r hover:from-black/30 hover:to-[#0f8fd4]/20
									 hover:border-black/60 hover:text-black hover:shadow-lg hover:shadow-black/20">
							{tech}
						</motion.span>
					))}
				</div>
			</motion.div>
		</motion.div>
	);
}

export default function Services() {
	const [selectedCategory, setSelectedCategory] = useState("web");
	
	return (
		<div className="relative">
			<div className="mx-auto container px-6 py-20">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center space-y-4 mb-16">
					<h2 className="text-5xl font-bold bg-gradient-to-r from-black via-[#0f8fd4] to-black bg-clip-text text-transparent">
						Services & Solutions
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
						Comprehensive digital services to grow your business. Click on any
						category to explore the specific services and technologies I offer.
					</p>
				</motion.div>

				{/* Service Categories Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
					{Object.entries(serviceCategories).map(([key, service], index) => (
						<motion.div
							key={key}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}>
							<ServiceCard
								service={service}
								isSelected={selectedCategory === key}
								onClick={() => setSelectedCategory(key)}
							/>
						</motion.div>
					))}
				</div>

				{/* Service Details */}
				<AnimatePresence mode="wait">
					<ServiceDetails selectedService={serviceCategories[selectedCategory]} />
				</AnimatePresence>
			</div>
		</div>
	);
}