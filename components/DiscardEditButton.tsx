import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

type Props = {}

const DiscardEditButton = (props: Props) => {
  // Function: redirect to previous page without performing any CRUD operations
  return (
    <Link href={'/'}>
      <Button>
        Discard Edits
      </Button>
    </Link>
  )
}

export default DiscardEditButton