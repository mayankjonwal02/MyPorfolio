import { type NextRequest, NextResponse } from "next/server"
import clientPromise, { type Message } from "@/lib/db"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db("portfolio")

    const newMessage: Message = {
      name,
      email,
      subject,
      message,
      isResponded: false,
      receivedAt: new Date(),
    }

    const result = await db.collection("messages").insertOne(newMessage)

    return NextResponse.json({
      success: true,
      id: result.insertedId,
    })
  } catch (error) {
    console.error("Error saving message:", error)
    return NextResponse.json({ error: "Failed to save message" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const sortBy = searchParams.get("sortBy") || "receivedAt"
    const sortOrder = searchParams.get("sortOrder") === "asc" ? 1 : -1
    const filterResponded = searchParams.get("filterResponded")

    const client = await clientPromise
    const db = client.db("portfolio")

    let query = {}
    if (filterResponded === "true") {
      query = { isResponded: true }
    } else if (filterResponded === "false") {
      query = { isResponded: false }
    }

    const messages = await db
      .collection("messages")
      .find(query)
      .sort({ [sortBy]: sortOrder })
      .toArray()

    return NextResponse.json(messages)
  } catch (error) {
    console.error("Error fetching messages:", error)
    return NextResponse.json({ error: "Failed to fetch messages" }, { status: 500 })
  }
}
