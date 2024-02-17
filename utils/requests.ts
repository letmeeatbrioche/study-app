import { NextRequest, NextResponse } from "next/server";

// GET all categories
export const getCategories = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/', {
      headers: {
        'Content-Type': 'application/json'
      },
      cache: 'no-store'
    });
    if (!res.ok) throw new Error('Could not get categories, !res.ok');
    const categories = await res.json();
    return categories;
  } catch (error) {
    console.log('Error in getCategories:', error);
  }
}

// GET all notes
export const getNotes = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      cache: 'no-store'
    });
    if (!res.ok) throw new Error('Could not get notes in getNotes');
    const notes = await res.json();
    return notes;
  } catch (error) {
    console.log('Error in getNotes:', error);
  }
}