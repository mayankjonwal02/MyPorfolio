"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 90 },
        { name: "Java", level: 85 },
        { name: "Kotlin", level: 80 },
        { name: "C++", level: 75 },
      ],
    },
    {
      category: "Web Development",
      skills: [
        { name: "Node.js", level: 95 },
        { name: "Express.js", level: 90 },
        { name: "React.js", level: 85 },
        { name: "Next.js", level: 90 },
        { name: "Django", level: 85 },
        { name: "FastAPI", level: 80 },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "MySQL", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "Redis", level: 80 },
        { name: "Neo4j", level: 75 },
        { name: "Firebase", level: 85 },
      ],
    },
    {
      category: "AI & Machine Learning",
      skills: [
        { name: "LangChain", level: 90 },
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 80 },
        { name: "OpenAI API", level: 90 },
        { name: "LangGraph", level: 85 },
        { name: "CrewAI", level: 80 },
      ],
    },
    {
      category: "DevOps & Cloud",
      skills: [
        { name: "Docker", level: 85 },
        { name: "AWS", level: 80 },
        { name: "GCP", level: 75 },
        { name: "GitHub Actions", level: 85 },
        { name: "Kubernetes", level: 70 },
        { name: "CI/CD", level: 80 },
      ],
    },
  ]

  return (
    <section id="skills" className="container mx-auto py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-gray-900 to-gray-950 border border-cyan-900/50 h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-cyan-400">{category.category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-cyan-400">{skill.level}%</span>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-2 bg-gray-700"
                        indicatorClassName="bg-gradient-to-r from-cyan-500 to-blue-600"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
