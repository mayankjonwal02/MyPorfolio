"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BriefcaseIcon, CalendarIcon, MapPinIcon } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "AI Backend Development Engineer (Intern)",
      company: "WebAI Solutions",
      location: "Remote",
      period: "Mar 2024 – July 2024",
      description: [
        "Architected microservices for food delivery platform serving 5,000+ daily users, reducing system downtime by 75%.",
        "Integrated GPT-4 via LangChain for contextual response generation and designed a scalable microservice to handle 100k+ daily chat messages.",
      ],
      technologies: ["MySQL", "MongoDB", "NodeJs", "ExpressJs", "SpringBoot", "Django", "Redis", "Docker"],
    },
    {
      title: "Backend Development Engineer (Intern)",
      company: "AlphaData Labs",
      location: "Remote",
      period: "Dec 2023 – March 2024",
      description: [
        "Developed and maintained backend services handling 20K+ daily API requests.",
        "Optimized operations by reducing response latency by 30% using Redis caching and implemented Langchain Agents for automated workflow processing.",
      ],
      technologies: ["MySQL", "MongoDB", "NodeJs", "ExpressJs", "SpringBoot", "PHP", "Redis", "RESTful APIs"],
    },
    {
      title: "Undergraduate Researcher",
      company: "CSE Department, Systems Lab - IIT Jodhpur",
      location: "Jodhpur",
      period: "Mar 2023 – May 2025",
      description: [
        "Leading research under Dr. Sumit Karla focusing on AI integration in healthcare systems, system design, and IoT for medical applications.",
        "Developed two production-grade healthcare solutions (IVR System & SURVIC Trial) deployed across multiple AIIMS hospitals nationwide.",
        "Designed distributed system architecture that enabled secure handling of 5000+ patient records while maintaining 99.99% data integrity.",
      ],
      technologies: ["System Design", "Software Development", "IoT", "AI Integration", "Healthcare Systems"],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
          Work Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-gray-900 to-gray-950 border border-cyan-900/50 overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <CardTitle className="text-xl md:text-2xl font-bold text-cyan-400">{exp.title}</CardTitle>
                    <Badge variant="outline" className="border-cyan-500 text-cyan-400 w-fit">
                      <CalendarIcon className="h-3 w-3 mr-1" />
                      {exp.period}
                    </Badge>
                  </div>
                  <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-gray-400 text-sm mt-2">
                    <div className="flex items-center">
                      <BriefcaseIcon className="h-4 w-4 mr-1 text-cyan-500" />
                      {exp.company}
                    </div>
                    <div className="flex items-center">
                      <MapPinIcon className="h-4 w-4 mr-1 text-cyan-500" />
                      {exp.location}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-300 flex">
                        <span className="text-cyan-500 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} className="bg-cyan-950/50 text-cyan-300 border border-cyan-800/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
