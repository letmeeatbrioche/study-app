"use client"
import React from 'react'
import SaveNoteButton from './SaveNoteButton'
import DiscardEditButton from './DiscardEditButton'
import CategoryDropdown from './CategoryDropdown'
import ImageUpload from './ImageUpload'
import { Grid, Paper } from '@mui/material'

type Props = {
  image: string,
  text: string,
  title: string,
  category: string,
  categories: string[]
}

const NoteEditCreate = (props: Props) => {
  return (
    <Paper className='paper-form' elevation={3}>
      <h1>Note Edit/Create</h1>
      <DiscardEditButton />
      <form>
        <input type='text' placeholder='Title' />
        <CategoryDropdown />
        <ImageUpload />
        <input type="text" placeholder='Notes...' />
        <SaveNoteButton />
      </form>
    </div>
  )
}

export default NoteEditCreate