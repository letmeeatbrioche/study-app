import DeleteCategory from '@/components/DeleteCategory'
import NoteView from '@/components/NoteView'
import stubs from '@/mockData'
import React from 'react'

type Props = {}

const CategoryPage = (props: Props) => {
  // Get category id from params
  //  Get all notes from category

  return (
    <>
      <DeleteCategory />
      {stubs.map((note) => (
        <NoteView image={note.image} text={note.text} title={note.title} category={note.category}></NoteView>
      ))}
    </>
  )
}

export default CategoryPage