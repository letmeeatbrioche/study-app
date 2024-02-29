// "use client"
import DeleteCategory from '@/components/DeleteCategory'
import NoteView from '@/components/NoteView'
import stubs from '@/mockData'
import { Note } from '@/models/models'
import { getNotes } from '@/utils/requests'
import { request } from 'http'
import { usePathname } from 'next/navigation'
import { Router } from 'next/router'
import { NextRequest } from 'next/server'
import React from 'react'

type Props = {}

const CategoryPage = async ({ params }: { params: { id: string } }, props: Props) => {
  let notes = await getNotes(params.id);

  return (
    <>
    {notes ?
      <>
        <h2>Notes gotten: {notes.length}</h2>
        <DeleteCategory />
        {notes.reverse().map((note: Note) => (
          <NoteView id={note._id} image={note.image} text={note.text} title={note.title} category={note.category}></NoteView>
        ))}
      </>
      : <h1>No categories to display</h1>
    }
    </>
  )
}

export default CategoryPage