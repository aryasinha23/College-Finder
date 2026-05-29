import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      id: 1,
      name: "IIT Delhi",
      location: "Delhi",
      course: "B.Tech",
    },
    {
      id: 2,
      name: "IIM Ahmedabad",
      location: "Ahmedabad",
      course: "MBA",
    },
    {
      id: 3,
      name: "AIIMS Delhi",
      location: "Delhi",
      course: "MBBS",
    },
  ]);
}