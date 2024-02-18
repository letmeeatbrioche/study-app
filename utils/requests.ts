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
    console.log('Error getting all categories:', error);
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
    console.log('Error getting all notes:', error);
  }
}

// GET one note
export const getNote = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/note/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      cache: 'no-store'
    });
    if (!res.ok) throw new Error('Could not get note in getNote');
    const note = await res.json();
    console.log('note:', note);
    return note;
  } catch (error) {
    console.log('Error getting one note:', error);
  }
}
