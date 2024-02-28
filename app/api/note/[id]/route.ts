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

// DELETE one note
export async function DELETE(req: NextRequest, id: { params: any; }) {
  console.log('ID in DELETE one note ROUTE HANDLER:', id.params.id);
  try {
    await connectToDatabase();
    const query = { _id: new ObjectId(id.params.id) };
    const result = await collections.notes?.deleteOne(query);

    if (result && result.deletedCount) {
      return NextResponse.json({res: 'Note successfully deleted'});
    } else if (!result) {
      return NextResponse.json(`Failed to remove note with id ${id}`);
    } else if (!result.deletedCount) {
      return NextResponse.json(`Note with id ${id} does not exist`);
    }
    } catch (error) {
      console.error(error.message);
      return NextResponse.json(error.message);
    }
}