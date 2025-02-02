"use client";
import { motion, Variants } from "framer-motion";
import { useMemo } from "react";

const skills = [
	{ name: "HTML", level: 95 },
	{ name: "CSS", level: 95 },
	{ name: "JavaScript", level: 90 },
	{ name: "Tailwind CSS", level: 90 },
	{ name: "React", level: 90 },
	{ name: "Next.js", level: 85 },
	{ name: "TypeScript", level: 80 },
	{ name: "Node.js", level: 85 },
	{ name: "Express", level: 80 },
	{ name: "MongoDB", level: 75 },
	{ name: "Github", level: 70 },
];

export function Skills() {
	// Memoized animation variants to prevent unnecessary recalculations
	const containerVariants = useMemo<Variants>(
		() => ({
			hidden: { opacity: 0 },
			visible: {
				opacity: 1,
				transition: { staggerChildren: 0.1 },
			},
		}),
		[]
	);

	const itemVariants = useMemo<Variants>(
		() => ({
			hidden: { opacity: 0, y: 20 },
			visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
		}),
		[]
	);

	return (
		<section id="skills" className="py-24 bg-background relative overflow-hidden">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.h2
					className="text-3xl font-bold text-center mb-12"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={itemVariants}
				>
					<span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
						Technical Skills
					</span>
				</motion.h2>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 gap-8"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={containerVariants}
				>
					{skills.map((skill) => (
						<motion.div
							key={skill.name}
							className="bg-muted/30 rounded-lg p-4 backdrop-blur-sm"
							variants={itemVariants}
						>
							<div className="flex justify-between items-center mb-2">
								<span className="text-lg font-semibold">{skill.name}</span>
								<span className="text-sm text-secondary">{skill.level}%</span>
							</div>
							<div className="w-full bg-muted/50 rounded-full h-2.5">
								<motion.div
									className="bg-gradient-to-r from-primary to-accent h-2.5 rounded-full"
									initial={{ scaleX: 0 }}
									whileInView={{ scaleX: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 0.8, ease: "easeOut" }}
									style={{ originX: 0, width: `${skill.level}%` }}
								/>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
