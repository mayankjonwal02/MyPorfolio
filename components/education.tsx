"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar, BookOpen } from "lucide-react"

export default function Education() {
  const courses = [
    "Deep Learning",
    "Software & Data Engineering",
    "Virtualization & Cloud Computing",
    "Computer Vision",
    "Introduction to IoT",
    "Pattern Recognition & Machine Learning",
    "Human Machine Interaction",
    "Data Engineering",
    "Data Structure & Algorithm",
    "Probability Statistics Stochastic Processes",
  ]

  return (
    <section id="education" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
          Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-gray-900 to-gray-950 border border-cyan-900/50 h-full">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-cyan-400 flex items-center">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Academic Background
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white">Indian Institute of Technology, Jodhpur</h3>
                  <p className="text-gray-400 flex items-center">
                    <Calendar className="mr-2 h-4 w-4 text-cyan-500" />
                    December 2021 - May 2025
                  </p>
                  <p className="text-gray-300">B.Tech in Artificial Intelligence & Data Science</p>
                </div>

                <div className="pt-4 border-t border-gray-800">
                  <h4 className="text-md font-semibold text-cyan-300 mb-2">Achievements & Research</h4>
                  <ul className="space-y-2">
                    <li className="text-gray-300 flex">
                      <span className="text-cyan-500 mr-2">•</span>
                      <span>
                        Research Paper: "Talking Gloves: Novel Approach for Post-Laryngectomy Communication" - Under
                        Review, IEEE Robotics and Automation Letters
                      </span>
                    </li>
                    <li className="text-gray-300 flex">
                      <span className="text-cyan-500 mr-2">•</span>
                      <span>
                        Research Paper: "EEG Signal Processing for Wheelchair Control" - Submitted to International
                        Conference on Biomedical Robotics
                      </span>
                    </li>
                    <li className="text-gray-300 flex">
                      <span className="text-cyan-500 mr-2">•</span>
                      <span>Hackathon Winner: 2nd Position at Neuroscience Hackathon'25, IIT Jodhpur</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-gray-900 to-gray-950 border border-cyan-900/50 h-full">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-cyan-400 flex items-center">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Relevant Coursework
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {courses.map((course, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 p-3 rounded-lg border border-cyan-800/30 flex items-center"
                    >
                      <span className="text-cyan-500 mr-2">•</span>
                      <span className="text-gray-300 text-sm">{course}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-800">
                  <h4 className="text-md font-semibold text-cyan-300 mb-2">Problem-Solving Approach</h4>
                  <ul className="space-y-2">
                    <li className="text-gray-300 flex">
                      <span className="text-cyan-500 mr-2">•</span>
                      <span>
                        Demonstrated ability to diagnose complex technical challenges and develop innovative solutions
                      </span>
                    </li>
                    <li className="text-gray-300 flex">
                      <span className="text-cyan-500 mr-2">•</span>
                      <span>Proficient in breaking down complex problems into manageable components</span>
                    </li>
                    <li className="text-gray-300 flex">
                      <span className="text-cyan-500 mr-2">•</span>
                      <span>Strong focus on scalable, efficient, and robust system design</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
