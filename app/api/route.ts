import { collections, connectToDatabase } from "@/db";
import { Category } from "@/models/models";
import { NextResponse } from "next/server";

// GET all categories
export async function GET() {
  try {
    await connectToDatabase();
    const categories = (await collections.categories?.find({}).toArray()) as Category[];
    return NextResponse.json(categories);
  } catch (error) {
    NextResponse.json({errorMsg: error})
  }
}