import { NextResponse } from "next/server";
import { connectDB } from "../../../../lib/mongodb";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const db = await connectDB();

    await db.collection("applications").insertOne({
      ...data,
      createdAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      message: "Application saved successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save application",
      },
      { status: 500 }
    );
  }
}