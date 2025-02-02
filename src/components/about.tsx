"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { Code, Server, Database } from "lucide-react";
import type React from "react";
import { BoxReveal } from "./ui/box-reveal";


const skills = [
  { name: "Frontend Development", icon: Code },
  { name: "Backend Development", icon: Server },
  { name: "Database Management", icon: Database },
];

// Common fade-up animation variant
const fadeUpVariant: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export function About() {
  // Respect users who prefer reduced motion
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="bg-background relative overflow-hidden">
      {/* Background Animated Elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full filter blur-3xl animate-pulse" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          transition={{ duration: 0.8 }}
        >
          {/* Heading */}
          <motion.h2
            className="text-3xl font-bold mb-6"
            variants={fadeUpVariant}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              About Me
            </span>
          </motion.h2>

          {/* Introductory Paragraphs */}
          <motion.p
            className="text-xl text-secondary text-justify mb-8"
            variants={fadeUpVariant}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hello! I&apos;m Subrat Chaudhary, a passionate full-stack developer with a keen eye for creating seamless,
            user-centric web applications. With a strong foundation in both front-end and back-end technologies, I
            specialize in building robust and scalable solutions that make a real impact.
          </motion.p>
          <motion.p
            className="text-lg text-secondary text-justify mb-8"
            variants={fadeUpVariant}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            My journey in tech has equipped me with a diverse skill set, allowing me to tackle complex problems and
            deliver high-quality results. I&apos;m always excited to learn new technologies and push the boundaries of what&apos;s
            possible in web development.
          </motion.p>

          {/* Skills Section */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            variants={fadeUpVariant}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-white/5 rounded-lg p-4 backdrop-blur-sm"
                // For users who prefer reduced motion, disable the scale animation.
                initial={{ scale: shouldReduceMotion ? 1 : 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <skill.icon className="h-8 w-8 text-primary mb-2 mx-auto" />
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </motion.div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            variants={fadeUpVariant}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Button className="pointer-events-auto border-primary text-white px-8 py-3">
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <Button variant="outline" className="border-primary text-white hover:bg-primary/10">
              <Link href="#projects">View Projects</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
