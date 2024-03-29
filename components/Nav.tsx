import { Box, Button, ThemeProvider } from '@mui/material'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Nav = (props: Props) => {
  return (
    <div className='nav'>
      <Box
        sx={{
          borderRadius: 1,
          bgcolor: 'primary.main'
        }}
        height={100}
        display="flex"
        alignItems="center">
          <Link className='home-button' href={'/'}>RAGGLE FRAGGLE</Link>
      </Box>

    </div>
  )
}

export default Nav