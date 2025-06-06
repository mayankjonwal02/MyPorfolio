import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json()

    if (password === "MUMP") {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 })
    }
  } catch (error) {
    console.error("Error in authentication:", error)
    return NextResponse.json({ error: "Authentication failed" }, { status: 500 })
  }
}
