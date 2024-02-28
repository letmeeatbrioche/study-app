import { collections, connectToDatabase } from "@/db";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

// DELETE category
export async function DELETE(req: NextRequest, id: { params: any; }) {
  console.log('ID in DELETE one category ROUTE HANDLER:', id.params.id);
  try {
    await connectToDatabase();
    const categoryQuery = { _id: new ObjectId(id.params.id) };
    const noteQuery = { category: new ObjectId(id.params.id) };
    const deleteCategoryResult = await collections.categories?.deleteOne(categoryQuery);

    if (deleteCategoryResult && deleteCategoryResult.deletedCount) {
      const deleteNotesResult = await collections.notes?.deleteMany(noteQuery);

      if (deleteNotesResult && deleteNotesResult.deletedCount) {
        return NextResponse.json({success: [true,'Category and Notes successfully deleted']});
      } else if (!deleteNotesResult) {
        return NextResponse.json({success: [false,`Failed to remove notes in category with id ${id}`]});
        // console.log('Deleted category, but failed deleting notes in category')
      } else if (!deleteNotesResult.deletedCount) {
        return NextResponse.json({success: [false,`No notes found with category id ${id}`]});
      }
    } else if (!deleteCategoryResult) {
      return NextResponse.json({success: [false,`Failed to remove category with id ${id}`]});
    } else if (!deleteCategoryResult.deletedCount) {
      return NextResponse.json({success: [false,`Category with id ${id} does not exist`]});
    }
    } catch (error) {
      console.error(error.message);
      return NextResponse.json(error.message);
    }
}