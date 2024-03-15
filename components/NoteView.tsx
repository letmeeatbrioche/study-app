import { Box, Button, Grid, Paper } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import DeleteNoteButton from './DeleteNoteButton'
import { getCategories } from '@/utils/requests'

type Props = {
  image: string,
  text: string,
  title: string,
  category: string,
  id: string
}
// props: Props, params: object | undefined
// params: {id: string}, props: Props
const NoteView = async (props: Props, params: object | undefined) => {
  const categories = await getCategories();
  const noteCategory = categories.find((category) => category._id === props.category);

  return (
    <div className='view-note-container'>
      <Paper className='paper' elevation={3}>
        <Box sx={{ width: '100%' }}>
          <Grid container >
            <Grid item xs={6}>
              <div className='full-note-left-side' >
                <h1 className='note-title'>{props.title}</h1>
                <div className='note-image'>
                  <img src={props.image} alt={`${props.title} note image`} />
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className='full-note-right-side'>
                <div>
                  <h3 className='note-category'>{noteCategory.name}</h3>
                  <p className='note-view-text'>{props.text}</p>
                </div>

                <div className='full-note-buttons'>
                  <a href={`/edit/${props.id}`}>
                    <Button variant="contained">
                      Edit
                    </Button>
                  </a>

                  <DeleteNoteButton id={props.id} categoryId={props.category} />
                </div>
              </div>

            </Grid>
          </Grid>
        </Box>
      </Paper>
    </div>
  )
}

export default NoteView