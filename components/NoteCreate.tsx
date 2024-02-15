"use client"
import React, { useState } from 'react'
import SaveNoteButton from './SaveNoteButton'
import DiscardEditButton from './DiscardEditButton'
import CategoryDropdown from './CategoryDropdown'
import ImageUpload from './ImageUpload'
import { Grid, Paper } from '@mui/material'

type Props = {
  category?: string,
  categories: string[]
}

const NoteCreate = (props: Props) => {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(props.category || props.categories[0]);

  return (
    <Paper className='paper-form' elevation={3}>
      <h1>Note Create</h1>
      <form>
        <Grid container justifyContent='space-around' >
          <Grid item xs={5.7} className='form-grid-item'>
            <input className='note-title-input' type='text' placeholder='Title' value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)} />
            <ImageUpload />
          </Grid>
          <Grid item xs={5.7} className='form-grid-item'>
            <CategoryDropdown categories={props.categories} isActive={isActive} setIsActive={setIsActive} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}  />
            <textarea className='note-text-input' placeholder='Notes...' value={noteText} onChange={(e) => setNoteText(e.target.value)} />
            <SaveNoteButton />
            <DiscardEditButton buttonText='Note' confirmationText='note' />
          </Grid>
        </Grid>
      </form>
    </Paper>
  )
}

export default NoteCreate