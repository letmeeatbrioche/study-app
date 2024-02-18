import { collections, connectToDatabase } from "@/db";
import { Note } from "@/models/models";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

// GET one note
export async function GET(req: NextRequest, id: { params: any; }) {
  console.log('IN GET ONE NOTE id.params.id:', id.params.id);
  try {
    await connectToDatabase();
    const query = {_id: new ObjectId(id.params.id)};
    const note = await collections.notes?.findOne(query) as Note;
    console.log('note:', note);
    return NextResponse.json(note);
  } catch (error) {
    NextResponse.json({errorMsg: error})
  }
}