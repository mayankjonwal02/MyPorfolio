import { type NextRequest, NextResponse } from "next/server"
import clientPromise from "@/lib/db"
import { ObjectId } from "mongodb"

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = params.id
    const { isResponded } = await request.json()

    if (isResponded === undefined) {
      return NextResponse.json({ error: "Missing isResponded field" }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db("portfolio")

    const result = await db.collection("messages").updateOne({ _id: new ObjectId(id) }, { $set: { isResponded } })

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Message not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error updating message:", error)
    return NextResponse.json({ error: "Failed to update message" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = params.id

    const client = await clientPromise
    const db = client.db("portfolio")

    const result = await db.collection("messages").deleteOne({
      _id: new ObjectId(id),
    })

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Message not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting message:", error)
    return NextResponse.json({ error: "Failed to delete message" }, { status: 500 })
  }
}
