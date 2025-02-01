"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(196, 193, 255, ${0.05 + i * 0.01})`,
    width: 0.5 + i * 0.03,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full text-[#C4C1FF]" viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.05 + path.id * 0.01}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-background to-background" />

      {/* Animated background elements */}
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.05 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#C4C1FF] mb-6 leading-tight">
              <span className="inline-block">Full-Stack Developer</span>
              <br className="hidden sm:inline" />
              <span
  className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
  style={{ lineHeight: "1.3" }}
>
  Crafting Digital Experiences
</span>

            </h1>
          </motion.div>
          <motion.p
            className="mt-4 text-lg sm:text-xl md:text-2xl text-secondary max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Turning ideas into reality through code and creativity
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 px-4 sm:px-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button
              asChild
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg"
            >
              <Link href="#projects">View Projects</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto border-primary text-white hover:bg-primary/10 px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg"
            >
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

