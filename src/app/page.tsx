import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import Projects from "@/components/project";
import { OrbitalSkills } from "@/components/orbital-skills";
import Contact from "@/components/contact";
import {Footer} from "@/components/footer";

export default function Home() {
	return (
		<div className="min-h-screen bg-background text-white relative">
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-0 left-0 w-full h-full bg-repeat opacity-5"></div>
				<div className="absolute top-0 left-0 w-full h-full animate-pulse">
					<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
					<div className="absolute top-3/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl"></div>
				</div>
			</div>
			<main className="relative z-10">
				<Hero />
				<About />
				<Projects />
				<Skills />
				<OrbitalSkills />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}
