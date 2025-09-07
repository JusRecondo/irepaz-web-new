'use client'

import { motion } from "framer-motion"

interface AnimatedBlockProps {
  direction?: "left" | "right"
  children: React.ReactNode
}

export default function AnimatedBlock({ direction = "left", children }: AnimatedBlockProps) {
  const xInitial = direction === "left" ? -100 : 100

  return (
    <motion.div
      initial={{ opacity: 0, x: xInitial }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}