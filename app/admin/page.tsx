"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function AdminLogin() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "MUMP") {
      router.push("/admin/messages")
    } else {
      setError("Invalid password")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="bg-gradient-to-br from-gray-900 to-gray-950 border border-cyan-900/50 shadow-xl shadow-cyan-900/10">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center text-cyan-400">Admin Access</CardTitle>
            <CardDescription className="text-center text-gray-400">
              Enter your secret code to access messages
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="Secret Code"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-500"
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
              </div>
            </CardContent>
            <CardFooter>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
              >
                Login
              </Button>
            </CardFooter>
          </form>
        </Card>
      </motion.div>
    </div>
  )
}
