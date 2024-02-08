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

const NoteEdit = (props: Props) => {
  return (
    <Paper className='paper-form' elevation={3}>
      <h1>Note Edit</h1>
      <form>
        <Grid container justifyContent='space-around' >
          <Grid item xs={5.7} className='form-grid-item'>
            <input className='note-title-input' type='text' placeholder='Title' defaultValue={props.title} />
            <ImageUpload image={props.image} /> {/** GET IMAGE FROM PROPS TO DISPLAY */}
          </Grid>
          <Grid item xs={5.7} className='form-grid-item'>
            <CategoryDropdown currentCategory={props.category} categories={props.categories} />
            <textarea className='note-text-input' placeholder='Notes...' defaultValue={props.text} />
            <SaveNoteButton />
            <DiscardEditButton buttonText='Edits' confirmationText='edits' />
          </Grid>
        </Grid>
      </form>
    </Paper>
  )
}

export default NoteEdit