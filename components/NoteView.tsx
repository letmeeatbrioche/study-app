import { Box, Button, Grid, Paper } from '@mui/material'
import Link from 'next/link'
import React from 'react'

type Props = {
  image: string,
  text: string,
  title: string,
  category: string
}

// GET title, image, category, text from note by id

// const NoteView = (props: Props) => {
//   return (
//     <>
//       <h1>Note View</h1>
//       <Button variant="contained" href="/note-view/123">
//             Go to "Note View"
//       </Button>
//       <div className='note-view'>
//         <h2 className='note-title'>{props.title}</h2>
//         <h3 className='note-category'>{props.category}</h3>
//         <div className='note-image' style={{background: `url(${props.image})`}}></div>
//         <p>{props.text}</p>
//         <Link href={'#'}>
//           <button type='button'>Edit</button>
//         </Link>
//       </div>
//     </>
//   )
// }

const NoteView = (props: Props, params: object | undefined) => {
  return (
    <div className='view-note-container'>
      <Paper className='paper' elevation={3}>
        <Box sx={{ width: '100%' }}>
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
                  <Button variant="contained">
                    Edit
                  </Button>
                </Link>
                {!params &&
                  <Link href={'/note-view/123'}>
                    <Button variant="contained">
                      View Note
                    </Button>
                  </Link>
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