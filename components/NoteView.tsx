import { Box, Button, Grid, Paper } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import DeleteNoteButton from './DeleteNoteButton'

type Props = {
  image: string,
  text: string,
  title: string,
  category: string,
  id: string
}
// props: Props, params: object | undefined
// params: {id: string}, props: Props
const NoteView = (props: Props, params: object | undefined) => {
  return (
    <div className='view-note-container'>
      <Paper className='paper' elevation={3}>
        <Box sx={{ width: '100%' }}>
          <h1>Note View</h1>
          <Grid container >
            <Grid xs={6}>
              <div className='grid-item' >
                <h2>{props.id}</h2>
                <h2 className='note-title'>{props.title}</h2>
                <div className='note-image' style={{background: `url(${props.image})`}}></div>
              </div>
            </Grid>
            <Grid xs={6}>
              <div className='grid-item' >
                <h3 className='note-category'>{props.category}</h3>
                <p>{props.text}</p>
                {!params &&
                  <Link href={`/edit/${props.id}`}>
                    <Button variant="contained">
                      Edit
                    </Button>
                  </Link>
                }
                {!params &&
                  <Link href={`/note-view/${props.id}`}>
                    <Button variant="contained">
                      View Note
                    </Button>
                  </Link>
                }

                {!params &&
                  <DeleteNoteButton id={props.id} categoryId={props.category} />
                }

              </div>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </div>
  )
}

export default NoteView