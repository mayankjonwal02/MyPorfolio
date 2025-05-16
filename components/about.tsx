"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const handleDownloadResume = () => {
    // Create a link element
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Mayank_Jonwal_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="about" className="py-20 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-cyan-500/5 to-blue-500/5 blur-3xl"
            style={{
              width: `${Math.random() * 40 + 20}rem`,
              height: `${Math.random() * 40 + 20}rem`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 30 + 15,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto relative z-10"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.p variants={itemVariants} className="text-lg text-gray-300">
              I'm a B.Tech student in <span className="text-cyan-400">Artificial Intelligence & Data Science</span> at
              IIT Jodhpur, passionate about building scalable web applications and integrating AI solutions.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg text-gray-300">
              With experience in both backend and AI development, I specialize in creating robust systems that handle
              complex data workflows and deliver exceptional user experiences.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg text-gray-300">
              My research work under Dr. Sumit Kalra focuses on AI integration in healthcare systems, where I've
              developed production-grade solutions deployed across multiple AIIMS hospitals nationwide.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg shadow-cyan-900/20"
                  onClick={handleDownloadResume}
                >
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 p-8 rounded-2xl border border-cyan-800/50 backdrop-blur-sm shadow-xl shadow-cyan-900/10"
          >
            <motion.h3 variants={itemVariants} className="text-xl font-semibold mb-4 text-cyan-300">
              Quick Info
            </motion.h3>
            <motion.ul variants={containerVariants} className="space-y-4">
              <motion.li variants={itemVariants} className="flex items-start">
                <span className="text-cyan-400 font-semibold mr-2">Name:</span>
                <span className="text-gray-300">Mayank Jonwal</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start">
                <span className="text-cyan-400 font-semibold mr-2">Education:</span>
                <span className="text-gray-300">B.Tech in AI & Data Science, IIT Jodhpur</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start">
                <span className="text-cyan-400 font-semibold mr-2">Email:</span>
                <span className="text-gray-300">mayank.jonwal02@gmail.com</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start">
                <span className="text-cyan-400 font-semibold mr-2">Phone:</span>
                <span className="text-gray-300">+91 9625401776</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start">
                <span className="text-cyan-400 font-semibold mr-2">Location:</span>
                <span className="text-gray-300">Jodhpur, India</span>
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
