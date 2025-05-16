"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Github, Send, Loader2 } from "lucide-react"
import { toast } from "@/hooks/use-toast"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
        variant: "default",
      })

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("Error sending message:", error)
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-gray-900 to-gray-950 border border-cyan-900/50 h-full">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-cyan-400">Contact Information</CardTitle>
                <CardDescription className="text-gray-400">
                  Feel free to reach out to me through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-cyan-500 mt-1 mr-3" />
                    <div>
                      <h4 className="font-medium text-white">Email</h4>
                      <p className="text-gray-400">mayank.jonwal02@gmail.com</p>
                      <p className="text-gray-400">jonwal.1@iitj.ac.in</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-cyan-500 mt-1 mr-3" />
                    <div>
                      <h4 className="font-medium text-white">Phone</h4>
                      <p className="text-gray-400">+91 9625401776</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-cyan-500 mt-1 mr-3" />
                    <div>
                      <h4 className="font-medium text-white">Location</h4>
                      <p className="text-gray-400">Jodhpur, Rajasthan, India</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-800">
                  <h4 className="font-medium text-white mb-4">Connect with me</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://linkedin.com/in/mayankjonwal02"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 p-3 rounded-full border border-cyan-800/30 hover:from-cyan-900/50 hover:to-blue-900/50 transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-cyan-400" />
                    </a>
                    <a
                      href="https://github.com/mayankjonwal02"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 p-3 rounded-full border border-cyan-800/30 hover:from-cyan-900/50 hover:to-blue-900/50 transition-colors"
                    >
                      <Github className="h-5 w-5 text-cyan-400" />
                    </a>
                  </div>
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
            <Card className="bg-gradient-to-br from-gray-900 to-gray-950 border border-cyan-900/50">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-cyan-400">Send Me a Message</CardTitle>
                <CardDescription className="text-gray-400">I'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-300">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-300">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                        className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      required
                      className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      required
                      className="min-h-[120px] bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" /> Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
