"use client"
import React, { useState } from 'react'
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
  categories: string[],
  id: string
}

const NoteEdit = (props: Props) => {
  const [noteTitle, setNoteTitle] = useState(props.title);
  const [noteText, setNoteText] = useState(props.text);
  const [isActive, setIsActive] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(props.category || props.categories[0]);

  return (
    <Paper className='paper-form' elevation={3}>
      <h1>Note Edit</h1>
      <form>
        <Grid container justifyContent='space-around' >
          <Grid item xs={5.7} className='form-grid-item'>
            <input className='note-title-input' type='text' placeholder='Title' value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)} />
            <ImageUpload image={props.image} /> {/** GET IMAGE FROM PROPS TO DISPLAY */}
          </Grid>
          <Grid item xs={5.7} className='form-grid-item'>
            <CategoryDropdown categories={props.categories} isActive={isActive} setIsActive={setIsActive} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <textarea className='note-text-input' placeholder='Notes...' value={noteText} onChange={(e) => setNoteText(e.target.value)} />
            <SaveNoteButton />
            <DiscardEditButton buttonText='Edits' confirmationText='edits' />
          </Grid>
        </Grid>
      </form>
    </Paper>
  )
}

export default NoteEdit