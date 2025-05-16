"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Message } from "@/lib/db"
import { motion } from "framer-motion"
import { ArrowLeft, Trash2, RefreshCw, CheckCircle, XCircle } from "lucide-react"

export default function MessagesPage() {
  const [messages, setMessages] = useState<(Message & { _id: string })[]>([])
  const [loading, setLoading] = useState(true)
  const [sortBy, setSortBy] = useState("receivedAt")
  const [sortOrder, setSortOrder] = useState("desc")
  const [filter, setFilter] = useState("all")
  const router = useRouter()

  useEffect(() => {
    // Check if user is authenticated (in a real app, you'd use a more secure method)
    const isAuthenticated = sessionStorage.getItem("adminAuthenticated")
    if (!isAuthenticated) {
      router.push("/admin")
      return
    }

    fetchMessages()
  }, [router, sortBy, sortOrder, filter])

  const fetchMessages = async () => {
    setLoading(true)
    try {
      let url = `/api/messages?sortBy=${sortBy}&sortOrder=${sortOrder}`
      if (filter === "responded") {
        url += "&filterResponded=true"
      } else if (filter === "notResponded") {
        url += "&filterResponded=false"
      }

      const response = await fetch(url)
      if (!response.ok) throw new Error("Failed to fetch messages")

      const data = await response.json()
      setMessages(data)
    } catch (error) {
      console.error("Error fetching messages:", error)
    } finally {
      setLoading(false)
    }
  }

  const toggleResponseStatus = async (id: string, currentStatus: boolean) => {
    try {
      const response = await fetch(`/api/messages/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isResponded: !currentStatus }),
      })

      if (!response.ok) throw new Error("Failed to update message")

      setMessages(messages.map((msg) => (msg._id === id ? { ...msg, isResponded: !currentStatus } : msg)))
    } catch (error) {
      console.error("Error updating message:", error)
    }
  }

  const deleteMessage = async (id: string) => {
    if (!confirm("Are you sure you want to delete this message?")) return

    try {
      const response = await fetch(`/api/messages/${id}`, {
        method: "DELETE",
      })

      if (!response.ok) throw new Error("Failed to delete message")

      setMessages(messages.filter((msg) => msg._id !== id))
    } catch (error) {
      console.error("Error deleting message:", error)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleString()
  }

  const logout = () => {
    sessionStorage.removeItem("adminAuthenticated")
    router.push("/admin")
  }

  // Set authentication in session storage (in a real app, you'd use a more secure method)
  useEffect(() => {
    sessionStorage.setItem("adminAuthenticated", "true")
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-cyan-400">Messages Dashboard</h1>
            <p className="text-gray-400 mt-1">Manage and respond to contact form submissions</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-950/50"
              onClick={() => router.push("/")}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Site
            </Button>
            <Button variant="outline" className="border-red-500 text-red-400 hover:bg-red-950/50" onClick={logout}>
              Logout
            </Button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-cyan-900/50 rounded-lg p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div className="space-y-2 flex-1">
              <label className="text-sm font-medium text-gray-300">Sort By</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700 text-white">
                  <SelectItem value="receivedAt">Date Received</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="subject">Subject</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 flex-1">
              <label className="text-sm font-medium text-gray-300">Sort Order</label>
              <Select value={sortOrder} onValueChange={setSortOrder}>
                <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white">
                  <SelectValue placeholder="Sort order" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700 text-white">
                  <SelectItem value="asc">Ascending</SelectItem>
                  <SelectItem value="desc">Descending</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 flex-1">
              <label className="text-sm font-medium text-gray-300">Filter</label>
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white">
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700 text-white">
                  <SelectItem value="all">All Messages</SelectItem>
                  <SelectItem value="responded">Responded</SelectItem>
                  <SelectItem value="notResponded">Not Responded</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
              onClick={fetchMessages}
            >
              <RefreshCw className="mr-2 h-4 w-4" /> Refresh
            </Button>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
          </div>
        ) : messages.length === 0 ? (
          <div className="text-center py-12 bg-gradient-to-br from-gray-900 to-gray-950 border border-cyan-900/50 rounded-lg">
            <p className="text-gray-400">No messages found</p>
          </div>
        ) : (
          <div className="space-y-6">
            {messages.map((message) => (
              <motion.div
                key={message._id.toString()}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  className={`bg-gradient-to-br from-gray-900 to-gray-950 border ${
                    message.isResponded ? "border-green-900/50" : "border-yellow-900/50"
                  } shadow-lg`}
                >
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl font-bold text-white">{message.subject}</CardTitle>
                        <CardDescription className="text-gray-400">
                          From: {message.name} ({message.email})
                        </CardDescription>
                      </div>
                      <div className="flex items-center space-x-2">
                        {message.isResponded ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <XCircle className="h-5 w-5 text-yellow-500" />
                        )}
                        <span className={message.isResponded ? "text-green-400" : "text-yellow-400"}>
                          {message.isResponded ? "Responded" : "Pending"}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Received: {formatDate(message.receivedAt.toString())}</p>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="bg-gray-800/50 p-4 rounded-md text-gray-300 mb-4">{message.message}</div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <Switch
                          checked={message.isResponded}
                          onCheckedChange={() => toggleResponseStatus(message._id.toString(), message.isResponded)}
                        />
                        <span className="text-sm text-gray-400">
                          Mark as {message.isResponded ? "not responded" : "responded"}
                        </span>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-red-500 text-red-400 hover:bg-red-950/50"
                        onClick={() => deleteMessage(message._id.toString())}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  )
}
