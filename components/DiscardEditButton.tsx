import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

type Props = {}

const DiscardEditButton = (props: Props) => {
  // Function: redirect to previous page without performing any CRUD operations
  // Function: onClick for button to confirmation dialog
  const discardConfirm = () => {
    confirm('Are you sure you want to discard edits?');
  }
  return (
    <Link href={'/'}>
      <Button onClick={() => discardConfirm()}>
        Discard Edits
      </Button>
    </Link>
  )
}

export default DiscardEditButton