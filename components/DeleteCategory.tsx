"use client"
import { Button } from '@mui/material'
import React from 'react'

type Props = {}

const DeleteCategory = (props: Props) => {
  const testConfirm = () => {
    const confirmed = confirm('Are you sure you want to delete this category and all notes inside it?');
    if (confirmed) {
      // Perform DELETE operation on the respective category
        // (including deleting all notes inside the category)
    }
  }

  return (
    <Button variant='contained' onClick={testConfirm}>
      Delete Category
    </Button>
  )
}

export default DeleteCategory