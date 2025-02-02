"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type React from "react";
import { BoxReveal } from "./ui/box-reveal";

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent"
			}`}
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<BoxReveal>
						<Link href="/" className="group">
							<motion.span
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5 }}
								className="text-xl uppercase font-bold text-white group-hover:opacity-80 transition-opacity"
							>
								Subrat Chaudhary.
							</motion.span>
						</Link>
					</BoxReveal>
					<div className="hidden md:flex space-x-4">
						<BoxReveal>
							<NavLink href="#about">About</NavLink>
						</BoxReveal>
						<BoxReveal>
							<NavLink href="#projects">Projects</NavLink>
						</BoxReveal>
						<BoxReveal>
							<NavLink href="#skills">Skills</NavLink>
						</BoxReveal>
						<BoxReveal>
							<NavLink href="#contact">Contact</NavLink>
						</BoxReveal>
					</div>
					<div className="hidden md:flex items-center space-x-4">
						<BoxReveal>
							<Button className="bg-primary hover:bg-primary/90">
								Download CV
							</Button>
						</BoxReveal>
					</div>
					<div className="md:hidden">
						<BoxReveal>
            <Button
							variant="ghost"
							size="icon"
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						>
							{isMobileMenuOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</Button>
            </BoxReveal>
					</div>
				</div>
			</div>
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						className="md:hidden"
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.2 }}
					>
						<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/80 backdrop-blur-md">
							<NavLink href="#about" mobile>
								About
							</NavLink>
							<NavLink href="#projects" mobile>
								Projects
							</NavLink>
							<NavLink href="#skills" mobile>
								Skills
							</NavLink>
							<NavLink href="#contact" mobile>
								Contact
							</NavLink>
							<Button className="w-full bg-primary hover:bg-primary/90 mt-2">
								Download CV
							</Button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}

function NavLink({
	href,
	children,
	mobile = false,
}: {
	href: string;
	children: React.ReactNode;
	mobile?: boolean;
}) {
	return (
		<Link
			href={href}
			className={`${
				mobile ? "block" : "inline-block"
			} px-3 py-2 rounded-md text-sm font-medium text-secondary hover:text-white hover:bg-primary/20 transition duration-300`}
		>
			{children}
		</Link>
	);
}
