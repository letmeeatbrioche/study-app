import { ObjectId } from "mongodb";

// For documents in the "notes" collection
export class Note {
  constructor(
    public title: string,
    public text: string,
    public image: string,
    public category_id: ObjectId,
    public _id?: ObjectId,
  ){}
}

// For documents in the "categories" collection
export class Category {
  constructor(
    public name: string,
    public _id?: ObjectId,
  ){}
}
