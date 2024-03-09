// "use client"
import DeleteCategory from '@/components/DeleteCategory'
import NoteCard from '@/components/NoteCard'
import NoteView from '@/components/NoteView'
import stubs from '@/mockData'
import { Note } from '@/models/models'
import { getCategories, getCategory, getNotes } from '@/utils/requests'
import { Grid } from '@mui/material'
import { request } from 'http'
import { usePathname } from 'next/navigation'
import { Router } from 'next/router'
import { NextRequest } from 'next/server'
import React from 'react'

type Props = {}

const CategoryPage = async ({ params }: { params: { id: string } }, props: Props) => {
  let notes = await getNotes(params.id);
  let category = await getCategory(params.id);

  return (
    <>
    {notes ?
      <>
        <h1 className='category-name'>{category.name}</h1>

        <DeleteCategory categoryName={category.name} />

        <Grid container className='note-cards-container' direction='row' spacing={2} style={{width: '70%', margin: '20px auto'}}>
            {notes.reverse().map((note: Note) => (
              <Grid item xs={4}>
                <NoteCard id={note._id} image={note.image} text={note.text} title={note.title} category={note.category}></NoteCard>
              </Grid>
            ))}
        </Grid>
      </>
    : <h1>No notes in category</h1>
    }
    </>
  )
}

export default CategoryPage

// Revious working code
/*
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
    : <h1>No notes in category</h1>
    }
    </>
  )
}

export default CategoryPage
*/