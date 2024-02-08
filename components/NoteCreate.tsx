"use client"
import React from 'react'
import SaveNoteButton from './SaveNoteButton'
import DiscardEditButton from './DiscardEditButton'
import CategoryDropdown from './CategoryDropdown'
import ImageUpload from './ImageUpload'
import { Grid, Paper } from '@mui/material'

type Props = {
  categories: string[]
}

const NoteCreate = (props: Props) => {
  return (
    <Paper className='paper-form' elevation={3}>
      <h1>Note Create</h1>
      <form>
        <Grid container justifyContent='space-around' >
          <Grid item xs={5.7} className='form-grid-item'>
            <input className='note-title-input' type='text' placeholder='Title' />
            <ImageUpload />
          </Grid>
          <Grid item xs={5.7} className='form-grid-item'>
            <CategoryDropdown categories={props.categories} />
            <textarea className='note-text-input' placeholder='Notes...' />
            <SaveNoteButton />
            <DiscardEditButton buttonText='Note' confirmationText='note' />
          </Grid>
        </Grid>
      </form>
    </Paper>
  )
}

export default NoteCreate