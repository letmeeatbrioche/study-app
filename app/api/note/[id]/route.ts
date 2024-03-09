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
    // console.log('note:', note);
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
    console.log('query:', query);
    const result = await collections.notes?.deleteOne(query);
    console.log('result:', result);

    if (result && result.deletedCount) {
      return NextResponse.json({res: 'Note successfully deleted'});
    } else if (!result) {
      return NextResponse.json(`Failed to remove note with id ${id}`);
    } else if (!result.deletedCount) {
      console.log('!!!No deletedCount!!!');
      console.log(`Note with id ${id} does not exist`);
      return NextResponse.json(`Note with id ${id} does not exist`);
    }
    } catch (error) {
      console.error(error.message);
      return NextResponse.json(error.message);
    }
}

// EDIT one note
export async function PUT(req) {
  console.log('in PUT req handler!!!!!!!')
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
    const noteData = reqObject;
    const query = { _id: new ObjectId(reqObject.id) };
    console.log('noteData:', noteData);
    console.log('query:', query);
    const result = await collections.notes?.replaceOne(query, noteData);
    if (result) {
      return NextResponse.json({success: true});
    } else {
      return NextResponse.json({success: false, reason: 'Falsy result'})
    }
  } catch (error) {
    console.log('Error editing note in database:', error);
    NextResponse.json({success: false})
  }
}
