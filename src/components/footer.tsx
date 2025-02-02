"use client";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import type React from "react";
import { motion } from "framer-motion";
import { BoxReveal } from "./ui/box-reveal";

const Twitter = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		version="1.1"
		id="Layer_1"
		width="24px"
		height="24px"
		viewBox="0 0 24 24"
		fill="#fff"
	>
		<path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z" />
	</svg>
);
export default function Footer() {
	return (
		<footer className="bg-background border-t border-muted-foreground/20 py-8">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col items-center justify-between md:flex-row">
					<div className="mb-4 md:mb-0">
						<Link href="/" className="uppercase text-xl font-bold text-white">
							Subrat Chaudhary.
						</Link>
					</div>
					<motion.div
						className="flex space-x-4"
						initial={{ y: 20, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.8 }}
						viewport={{ once: true }}
					>
						<SocialLink
							href="https://github.com/yourusername"
							icon={<Github />}
							label="GitHub"
						/>
						<SocialLink
							href="https://linkedin.com/in/yourusername"
							icon={<Linkedin />}
							label="LinkedIn"
						/>
						<SocialLink
							href="https://twitter.com/yourusername"
							icon={<Twitter />}
							label="Twitter"
						/>
						<SocialLink
							href="mailto:your.email@example.com"
							icon={<Mail />}
							label="Email"
						/>
					</motion.div>
				</div>
				<div className="mt-8 text-center text-sm text-secondary">
					<p>
						&copy; {new Date().getFullYear()} Subrat Chaudhary. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}

function SocialLink({
	href,
	icon,
	label,
}: {
	href: string;
	icon: React.ReactNode;
	label: string;
}) {
	return (
		<motion.a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="text-secondary hover:text-white transition-colors p-2 hover:bg-primary/20 rounded-full group relative"
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
		>
			{icon}
			<span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
				{label}
			</span>
		</motion.a>
	);
}
