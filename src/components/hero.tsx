"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export  function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-background to-background" />

      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/30 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.h1
            className="text-4xl text-left sm:text-center sm:text-5xl md:text-6xl font-extrabold text-[#C4C1FF] mb-6 leading-tight"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Full-Stack Developer
            <br className="hidden sm:inline" />
            <motion.p
              className="bg-clip-text text-left sm:text-center text-transparent bg-gradient-to-r from-primary to-accent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Crafting Digital Experiences
            </motion.p>
          </motion.h1>
          <motion.p
            className="mt-4 text-xl sm:text-2xl text-secondary max-w-3xl mx-auto mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Turning ideas into reality through code and creativity
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button asChild className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="#projects">View Projects</Link>
              </motion.div>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary text-white hover:bg-primary/10 px-8 py-3 rounded-full text-lg"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="#contact">Get in Touch</Link>
              </motion.div>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

