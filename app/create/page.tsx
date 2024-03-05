import NoteCreate from '@/components/NoteCreate'
import { getCategories } from '@/utils/requests';
import React from 'react'

// Function to get all categories
const getAllCategories = () => {
  let categories = ['Category 1', 'Category 2', '65cd6fa735525e420e529d46', 'Squirrels'];
  return categories;
}


type Props = {}

const CreateNote = async (props: Props) => {
  const gottenCategories = await getCategories();
  const categories = await getAllCategories();
  console.log('after gettingCategories in CreateNote/page.tsx:', gottenCategories);
  return (
    <NoteCreate categories={gottenCategories} />
  )
}

export default CreateNote