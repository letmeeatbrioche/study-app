import { collections, connectToDatabase } from "@/db";
import { Note } from "@/models/models";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

// Routes for queries needing a document id that should be gotten from the url with { params }

// GET all notes
export async function GET(req: NextRequest, id: { params: any; }) {
  console.log('IN ALL NOTES GET id.params.id:', id.params.id);
  try {
    await connectToDatabase();
    // const query = {category: id};
    const query = {category: new ObjectId(id.params.id)};
    const notes = await collections.notes?.find(query).toArray() as Note[];
    // console.log('notes:', notes);
    return await NextResponse.json(notes);
  } catch (error) {
    NextResponse.json({errorMsg: error})
  }
}