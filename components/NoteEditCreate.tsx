import React from 'react'
import SaveNoteButton from './SaveNoteButton'
import DiscardEditButton from './DiscardEditButton'
import CategoryDropdown from './CategoryDropdown'
import ImageUpload from './ImageUpload'
import { Grid, Paper } from '@mui/material'

type Props = {}

const NoteEditCreate = (props: Props) => {
  return (
    <Paper className='paper-form' elevation={3}>
      <h1>Note Edit/Create</h1>
      <form>
        <Grid container justifyContent='space-around' >
          <Grid item xs={5.7} className='form-grid-item'>
            <input className='note-title-input' type='text' placeholder='Title' />
            <ImageUpload />
          </Grid>
          <Grid item xs={5.7} className='form-grid-item'>
            <CategoryDropdown />
            <textarea className='note-text-input' placeholder='Notes...' />
            <SaveNoteButton />
            <DiscardEditButton />
          </Grid>
        </Grid>
      </form>
    </Paper>

  )
}

{/* <Box sx={{ width: '100%' }}>
          <h1>Note View</h1>
          <Grid container >
            <Grid xs={6}>
              <div className='grid-item' >
                <h2 className='note-title'>{props.title}</h2>
                <div className='note-image' style={{background: `url(${props.image})`}}></div>
              </div>
            </Grid>
            <Grid xs={6}>
              <div className='grid-item' >
                <h3 className='note-category'>{props.category}</h3>
                <p>{props.text}</p>
                <Link href={'/edit/123'}>
                  <Button variant="contained" href='/edit/123'>
                    Edit
                  </Button>
                </Link>
                {!params &&
                  <Link href={'/note-view/123'}>
                    <Button variant="contained" href="/note-view/123">
                      View Note
                    </Button>
                  </Link>
                }
              </div>
            </Grid>
          </Grid>
        </Box> */}


export default NoteEditCreate