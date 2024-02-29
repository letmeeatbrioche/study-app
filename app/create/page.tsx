import NoteCreate from '@/components/NoteCreate'
import React from 'react'

// Function to get all categories
const getAllCategories = () => {
  let categories = ['Category 1', 'Category 2', '65cd6fa735525e420e529d46', 'Squirrels'];
  return categories;
}

type Props = {}

const CreateNote = async (props: Props) => {
  const categories = await getAllCategories();
  return (
    <NoteCreate categories={categories} />
  )
}

export default CreateNote