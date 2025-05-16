"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Full Stack Developer | AI Enthusiast | Problem Solver"
  const controls = useAnimation()
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl"
            style={{
              width: `${Math.random() * 30 + 10}rem`,
              height: `${Math.random() * 30 + 10}rem`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="space-y-8 max-w-4xl relative z-10"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <motion.div
            variants={itemVariants}
            className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-cyan-500/50 shadow-lg shadow-cyan-500/20"
          >
            <Image src="/images/profile.png" alt="Mayank Jonwal" fill className="object-cover" priority />
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"
            >
              Mayank Jonwal
            </motion.h1>

            <motion.div variants={itemVariants} className="h-8">
              <p className="text-xl md:text-2xl text-cyan-300">{typedText}</p>
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 mt-6 max-w-2xl">
              Building innovative solutions at the intersection of AI and web technologies
            </motion.p>
          </div>
        </div>

        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mt-8">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2 rounded-md shadow-lg shadow-cyan-900/20">
              View Projects
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-950 px-6 py-2 rounded-md shadow-lg shadow-cyan-900/20"
            >
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
      >
        <ChevronDown className="h-8 w-8 text-cyan-400" />
      </motion.div>
    </section>
  )
}
