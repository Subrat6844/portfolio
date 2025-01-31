"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function PageLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // Adjust this value to control how long the loader is shown

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      onAnimationComplete={() => setLoading(false)}
    >
      <motion.div
        className="w-20 h-20 border-4 border-primary border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
    </motion.div>
  )
}

