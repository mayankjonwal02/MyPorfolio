"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const controls = useAnimation()
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const projects = [
    {
      title: "IVR - Interactive Voice Response System",
      description:
        "AI-powered IVR system using LLM-based reasoning for patient communication about implant removal schedules with 98% accuracy.",
      image: "/images/IVR.jpeg",
      technologies: ["Kotlin", "NodeJS", "ExpressJS", "MySQL", "Apache", "Redis", "LangChain", "OpenAI API"],
      collaboration: "IIT Jodhpur & AIIMS Jodhpur",
      link: "#",
      github: "#",
    },
    {
      title: "SurVIC Trial - Multi-Center Oncology Research Platform",
      description:
        "Scalable backend platform for an ICMR-sponsored multi-center oncology trial handling medical data of 5000+ patients.",
      image: "/images/cancer.jpeg",
      technologies: ["NextJS", "NodeJS", "MongoDB", "AWS", "LangChain", "OpenAI GPT-4"],
      collaboration: "IIT Jodhpur & 7+ AIIMS Institutes",
      link: "#",
      github: "#",
    },
    {
      title: "YouTube Contextual Chatbot",
      description:
        "Interactive chatbot that runs alongside YouTube videos, providing context-aware responses based on video transcripts.",
      image: "/images/youtubechatbot.jpeg",
      technologies: ["NextJS", "FastAPI", "LangChain", "OpenAI", "YouTube API", "React"],
      collaboration: "Personal Project",
      link: "#",
      github: "#",
    },
    {
      title: "AI Meal Planner",
      description:
        "Personalized meal planning application that generates recipes and nutrition plans based on dietary preferences and restrictions.",
      image: "/images/aimealplanner.jpeg",
      technologies: ["NextJS", "FastAPI", "LangChain", "Ollama", "Tailwind CSS", "MongoDB"],
      collaboration: "Personal Project",
      link: "#",
      github: "#",
    },
    {
      title: "Medical Alarm System",
      description:
        "Smart alarm system that connects with room lights via IoT devices, automatically turning on lights when the alarm rings.",
      image: "/images/medicalalarm.jpeg",
      technologies: ["Kotlin", "Arduino", "Servo Motors", "IoT", "Bluetooth", "Android Studio"],
      collaboration: "Personal Project",
      link: "#",
      github: "#",
    },
    {
      title: "AI-based Virtual Marker",
      description:
        "Computer vision application that allows users to write on screen by detecting hand gestures, with pinch detection for drawing.",
      image: "/images/aibasedvirtualmarker.jpeg",
      technologies: ["Python", "OpenCV", "MediaPipe", "TensorFlow", "NumPy", "PyQt5"],
      collaboration: "Personal Project",
      link: "#",
      github: "#",
    },
    {
      title: "Facial Verification System",
      description:
        "Production-grade facial verification system using deep learning for secure access control with 99.7% accuracy.",
      image: "/images/facialverificationsystem.jpeg",
      technologies: ["Python", "FastAPI", "Docker", "TensorFlow", "PyTorch", "LangChain", "Redis"],
      collaboration: "RapidRadio Solutions & IIT Jodhpur Library",
      link: "#",
      github: "#",
    },
    {
      title: "VidNation - Video Streaming Platform",
      description: "Video streaming web app with advanced recommendation system using graph-based AI algorithms.",
      image: "/images/vidnation.jpeg",
      technologies: ["React.js", "Node.js", "Express.js", "MySQL", "MongoDB", "Neo4j", "Django"],
      collaboration: "Personal Project",
      link: "#",
      github: "#",
    },
  ]

  const nextProject = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevProject = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  return (
    <section id="projects" className="py-20">
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"
        >
          Featured Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          A collection of my most significant work spanning web development, AI integration, and IoT solutions
        </motion.p>

        <div className="relative">
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full z-10 px-4">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-gray-900/80 border-cyan-500 text-cyan-400 hover:bg-cyan-950/50 shadow-lg shadow-cyan-900/20"
                onClick={prevProject}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-gray-900/80 border-cyan-500 text-cyan-400 hover:bg-cyan-950/50 shadow-lg shadow-cyan-900/20"
                onClick={nextProject}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </motion.div>
          </div>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate={controls}
                  className="w-full flex-shrink-0 px-4"
                >
                  <Card className="bg-gradient-to-br from-gray-900 to-gray-950 border border-cyan-900/50 overflow-hidden shadow-xl shadow-cyan-900/10 hover:shadow-cyan-900/20 transition-all duration-300 h-full">
                    <div className="relative h-64 w-full overflow-hidden group">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="absolute top-4 right-4"
                      >
                        <Badge className="bg-cyan-900/80 text-cyan-300 backdrop-blur-sm">{project.collaboration}</Badge>
                      </motion.div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-cyan-400">{project.title}</CardTitle>
                      <CardDescription className="text-gray-300">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            viewport={{ once: true }}
                          >
                            <Badge className="bg-cyan-950/50 text-cyan-300 border border-cyan-800/50">{tech}</Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-950/50">
                          <Github className="mr-2 h-4 w-4" /> GitHub
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                          <ExternalLink className="mr-2 h-4 w-4" /> View Project
                        </Button>
                      </motion.div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {projects.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === activeIndex ? "bg-cyan-400" : "bg-gray-600"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
