import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
const projects = [
	{
		title: "E-commerce Platform",
		description:
			"A full-stack online store with modern features including real-time inventory, secure payments, and admin dashboard",
		image: "/placeholder.svg?height=400&width=600",
		liveLink: "#",
		githubLink: "#",
		tech: ["Next.js", "TypeScript", "Tailwind CSS"],
		tools: ["Prisma", "PostgreSQL", "Stripe"],
	},
	{
		title: "Resumed",
		description:
			"A responsive and user-friendly resume builder with a clean and modern design for easy customization",
		image: "/resumed.png",
		liveLink: "https://resumed-app.vercel.app/",
		githubLink: "https://github.com/Subrat6844/resumed",
		tech: ["React", "Node.js", "Express"],
		tools: ["MongoDB","shadcn/ui","Gemini AI","Gemini SDK"],
	},
	{
		title: "AI-Powered Chat",
		description:
			"Real-time chat application with AI-powered features and multi-language support",
		image: "/placeholder.svg?height=400&width=600",
		liveLink: "#",
		githubLink: "#",
		tech: ["Next.js", "TypeScript", "WebSocket"],
		tools: ["OpenAI", "Vercel AI SDK", "Redis"],
	},
	{
		title: "Portfolio Website",
		description: "Modern portfolio website with dynamic content and animations",
		image: "/portfolio.png",
		liveLink: "https://portfolio-six-lemon-26.vercel.app/",
		githubLink: "https://github.com/Subrat6844/portfolio",
		tech: ["Next.js", "TypeScript", "Tailwind CSS"],
		tools: ["Framer Motion", "shadcn/ui","Magic UI"],
	},
];

export default function Projects() {
	return (
		<section className="py-24 bg-background" id="projects">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl font-bold text-center mb-12">
					<span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
						Featured Projects
					</span>
				</h2>
				<div className=" grid gap-8 md:grid-cols-2">
					{projects.map((project,index) => (
						<div key={index} className="relative rounded-xl">
							<Card
								key={project.title}
								className="bg-muted border-muted-foreground/20 overflow-hidden group transition-all duration-300"
							>
								<div className="relative">
									<Image
										src={project.image || "/placeholder.svg"}
										alt={project.title}
										width={600}
										height={400}
										className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								</div>
								<CardHeader>
									<CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
										{project.title}
									</CardTitle>
									<CardDescription className="text-secondary">
										{project.description}
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-4">
									<div className="space-y-2">
										<div className="text-sm text-secondary">Technologies</div>
										<div className="flex flex-wrap gap-2">
											{project.tech.map((tech) => (
												<Badge
													key={tech}
													variant="secondary"
													className="bg-secondary text-primary hover:bg-secondary/80"
												>
													{tech}
												</Badge>
											))}
										</div>
									</div>
									<div className="space-y-2">
										<div className="text-sm text-secondary">Tools</div>
										<div className="flex flex-wrap gap-2">
											{project.tools.map((tool) => (
												<Badge
													key={tool}
													variant="outline"
													className="border-accent/50 text-accent hover:bg-accent/10"
												>
													{tool}
												</Badge>
											))}
										</div>
									</div>
									<div className="flex justify-between pt-4">
										<Button
											asChild
											variant="outline"
											size="sm"
											className="hover:bg-primary hover:text-white transition-colors duration-300"
										>
											<a
												href={project.liveLink}
												target="_blank"
												rel="noopener noreferrer"
											>
												<ExternalLink className="w-4 h-4 mr-2" />
												Live Demo
											</a>
										</Button>
										<Button
											asChild
											variant="outline"
											size="sm"
											className="hover:bg-primary hover:text-white transition-colors duration-300"
										>
											<a
												href={project.githubLink}
												target="_blank"
												rel="noopener noreferrer"
											>
												<Github className="w-4 h-4 mr-2" />
												View Code
											</a>
										</Button>
									</div>
								</CardContent>
							</Card>
						</div>
					))}
				</div>
			</div>
		</section>
	);

}