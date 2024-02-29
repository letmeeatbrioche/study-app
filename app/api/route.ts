import { collections, connectToDatabase } from "@/db";
import { Category } from "@/models/models";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

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

// POST one note
export async function POST(req) {
  console.log('in POST req handler!!!!!!!!!!!!!')
  try {
    await connectToDatabase();
    const reqObject = await req.json();
    reqObject.category = new ObjectId(reqObject.category);
    const query = reqObject;
    console.log('req:', query);
    const result = await collections.notes?.insertOne(query);
    if (result) {
      return NextResponse.json({success: true});
    } else {
      return NextResponse.json({success: false, reason: 'Falsy result'})
    }
  } catch (error) {
    console.log('Error creating note in database:', error);
    NextResponse.json({success: false})
  }
}