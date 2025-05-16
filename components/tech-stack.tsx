"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  Code2,
  FileJson,
  Blocks,
  Palette,
  Server,
  Database,
  Globe,
  FastForward,
  Cylinder,
  TableProperties,
  Brain,
  Bot,
  Cpu,
  Cloud,
  GitBranch,
  Container,
  Smartphone,
  MicroscopeIcon as Microchip,
  Bluetooth,
} from "lucide-react"

export default function TechStack() {
  const techCategories = [
    {
      name: "Frontend",
      techs: [
        { name: "React", icon: <Code2 className="text-blue-400" /> },
        { name: "Next.js", icon: <Blocks className="text-white" /> },
        { name: "Angular", icon: <Code2 className="text-red-400" /> },
        { name: "Tailwind CSS", icon: <Palette className="text-cyan-400" /> },
        { name: "TypeScript", icon: <FileJson className="text-blue-500" /> },
        { name: "JavaScript", icon: <FileJson className="text-yellow-400" /> },
      ],
    },
    {
      name: "Backend",
      techs: [
        { name: "Node.js", icon: <Server className="text-green-500" /> },
        { name: "Express", icon: <FastForward className="text-gray-400" /> },
        { name: "Django", icon: <Globe className="text-green-600" /> },
        { name: "FastAPI", icon: <FastForward className="text-teal-500" /> },
        { name: "Spring Boot", icon: <Server className="text-green-400" /> },
        { name: "PHP", icon: <Code2 className="text-purple-400" /> },
      ],
    },
    {
      name: "Databases",
      techs: [
        { name: "MongoDB", icon: <Database className="text-green-500" /> },
        { name: "MySQL", icon: <Database className="text-blue-500" /> },
        { name: "PostgreSQL", icon: <Cylinder className="text-blue-400" /> },
        { name: "Redis", icon: <Database className="text-red-500" /> },
        { name: "Firebase", icon: <Database className="text-yellow-500" /> },
        { name: "Neo4j", icon: <TableProperties className="text-cyan-500" /> },
      ],
    },
    {
      name: "AI & ML",
      techs: [
        { name: "TensorFlow", icon: <Brain className="text-orange-500" /> },
        { name: "PyTorch", icon: <Cpu className="text-red-500" /> },
        { name: "LangChain", icon: <Bot className="text-green-400" /> },
        { name: "OpenAI", icon: <Brain className="text-cyan-400" /> },
        { name: "Ollama", icon: <Bot className="text-purple-400" /> },
        { name: "Hugging Face", icon: <Bot className="text-yellow-400" /> },
      ],
    },
    {
      name: "DevOps & Cloud",
      techs: [
        { name: "Docker", icon: <Container className="text-blue-500" /> },
        { name: "AWS", icon: <Cloud className="text-yellow-500" /> },
        { name: "GCP", icon: <Cloud className="text-red-400" /> },
        { name: "GitHub Actions", icon: <GitBranch className="text-purple-400" /> },
        { name: "Kubernetes", icon: <Container className="text-blue-400" /> },
        { name: "Vercel", icon: <Cloud className="text-gray-400" /> },
      ],
    },
    {
      name: "Mobile & IoT",
      techs: [
        { name: "Kotlin", icon: <Smartphone className="text-purple-500" /> },
        { name: "React Native", icon: <Smartphone className="text-blue-400" /> },
        { name: "Arduino", icon: <Microchip className="text-teal-500" /> },
        { name: "Raspberry Pi", icon: <Microchip className="text-red-500" /> },
        { name: "Android", icon: <Smartphone className="text-green-500" /> },
        { name: "Bluetooth", icon: <Bluetooth className="text-blue-500" /> },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section id="tech-stack" className="py-20 bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"
          >
            Tech Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            The technologies, frameworks, and tools I work with to build powerful and scalable applications
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {techCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants} transition={{ duration: 0.5 }} className="h-full">
              <Card className="bg-gradient-to-br from-gray-900 to-gray-950 border border-cyan-900/50 h-full shadow-lg shadow-cyan-900/10 hover:shadow-cyan-900/20 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-cyan-400 mb-6 border-b border-cyan-900/50 pb-2">
                    {category.name}
                  </h3>
                  <div className="grid grid-cols-3 gap-6">
                    {category.techs.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        variants={iconVariants}
                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                        whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                        className="flex flex-col items-center justify-center"
                      >
                        <div className="w-12 h-12 mb-2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full p-2 flex items-center justify-center shadow-md">
                          {tech.icon}
                        </div>
                        <span className="text-xs text-gray-300 text-center">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
