"use client"
import { motion } from "framer-motion"

const skills = [
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Node.js", level: 85 },
  { name: "Express", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "PostgreSQL", level: 70 },
  { name: "GraphQL", level: 65 },
  { name: "Docker", level: 60 },
  { name: "AWS", level: 55 },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Technical Skills
          </span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-muted/30 rounded-lg p-4 backdrop-blur-sm"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold">{skill.name}</span>
                <span className="text-sm text-secondary">{skill.level}%</span>
              </div>
              <div className="w-full bg-muted/50 rounded-full h-2.5">
                <motion.div
                  className="bg-gradient-to-r from-primary to-accent h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

