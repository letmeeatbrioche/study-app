"use client"
import { Button } from '@mui/material'
import React from 'react'

type Props = {}

const DeleteNoteButton = (props: Props) => {
  const confirmDelete = () => {
    confirm('Are you sure you want to delete this note?')
  }
  return (
    <Button onClick={() => confirmDelete()} variant="contained">
        Delete Note
    </Button>
  )
}

export default DeleteNoteButton