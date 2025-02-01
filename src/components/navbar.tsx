"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import type React from "react";

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
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
					<Link href="/" className="text-2xl font-bold text-primary">
						Subrat Chaudhary
					</Link>
					<div className="hidden md:flex space-x-4">
						<NavLink href="#about">About</NavLink>
						<NavLink href="#projects">Projects</NavLink>
						<NavLink href="#skills">Skills</NavLink>
						<NavLink href="#contact">Contact</NavLink>
					</div>
					<div className="hidden md:flex items-center space-x-4">
						<Button className="bg-primary hover:bg-primary/90">
							Download CV
						</Button>
					</div>
					<div className="md:hidden">
						<Button
							variant="ghost"
							size="icon"
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						>
							<Menu className="h-6 w-6" />
						</Button>
					</div>
				</div>
			</div>
			{isMobileMenuOpen && (
				<div className="md:hidden">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/80 backdrop-blur-md">
						<NavLink
							onClick={() => setIsMobileMenuOpen(false)}
							href="#about"
							mobile
						>
							About
						</NavLink>
						<NavLink
							onClick={() => setIsMobileMenuOpen(false)}
							href="#projects"
							mobile
						>
							Projects
						</NavLink>
						<NavLink
							onClick={() => setIsMobileMenuOpen(false)}
							href="#skills"
							mobile
						>
							Skills
						</NavLink>
						<NavLink
							onClick={() => setIsMobileMenuOpen(false)}
							href="#contact"
							mobile
						>
							Contact
						</NavLink>
						<Button className="w-full bg-primary hover:bg-primary/90 mt-2">
							Download CV
						</Button>
					</div>
				</div>
			)}
		</nav>
	);
}

function NavLink({
	onClick,
	href,
	children,
	mobile = false,
}: {
	onClick?: () => void;
	href: string;
	children: React.ReactNode;
	mobile?: boolean;
}) {
	return (
		<Button onClick={onClick}>
			<Link
				href={href}
				className={`${
					mobile ? "block" : "inline-block"
				} px-3 py-2 rounded-md text-sm font-medium text-secondary hover:text-white hover:bg-primary/20 transition duration-300`}
			>
				{children}
			</Link>
		</Button>
	);
}
