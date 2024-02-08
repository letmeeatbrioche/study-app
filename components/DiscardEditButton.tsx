import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

type Props = {
  buttonText: string,
  confirmationText: string
}

const DiscardEditButton = (props: Props) => {
  // Function: redirect to previous page without performing any CRUD operations
  // Function: onClick for button to confirmation dialog
  const discardConfirm = () => {
    confirm(`Are you sure you want to discard ${props.confirmationText}?`);
  }
  return (
    <Link href={'/'}>
      <Button onClick={() => discardConfirm()}>
        Discard {props.buttonText}
      </Button>
    </Link>
  )
}

export default DiscardEditButton