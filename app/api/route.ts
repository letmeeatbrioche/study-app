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
    const reqObject = await req.json();
    if (reqObject.category) {
      reqObject.category = new ObjectId(reqObject.category);
    } else {
      reqObject.category = new ObjectId();
    }
    await connectToDatabase();
    // Create Category
    if (reqObject.categoryName) {
      var createdCategory = await collections.categories?.insertOne({name: reqObject.categoryName, _id: reqObject.category})
      delete reqObject.categoryName;
    }
    // Create Note
    const query = reqObject;
    console.log('reqObject (query):', query);
    const createdNote = await collections.notes?.insertOne(query);
    if (createdNote) {
      return NextResponse.json({success: true});
    } else {
      return NextResponse.json({success: false, reason: 'Falsy result'})
    }
  } catch (error) {
    console.log('Error creating note in database:', error);
    NextResponse.json({success: false})
  }
}