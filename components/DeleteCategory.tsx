"use client"
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
    <button type='button' onClick={testConfirm}>Delete Category</button>
  )
}

export default DeleteCategory