import { Box, Button, Grid, ThemeProvider } from '@mui/material'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Nav = (props: Props) => {
  return (
    <div className='nav'>
      <Box
        sx={{
          borderRadius: 1,
          bgcolor: '#273870'
        }}
        height={80}
        display="flex"
        alignItems="center">
          <Grid container justifyContent='space-between'>
            <Grid item>
              <Link className='home-button' href={'/'}>Categori</Link>
            </Grid>

            <Grid item>
              <Link className='create-note-button' href={'/create'}>
                <Button variant='contained'>Create New Note</Button>
              </Link>
            </Grid>
          </Grid>
      </Box>

    </div>
  )
}

export default Nav