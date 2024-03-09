"use client"
import { Box, Button } from '@mui/material'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
  categoryName: string
}

const DeleteCategory = (props: Props) => {
  const router = useRouter();
  const path = usePathname();
  const id = path.slice(path.lastIndexOf('/') + 1);

  const confirmDelete = () => {
    const confirmed = confirm(`Are you sure you want to delete the "${props.categoryName}" category and all notes inside it?`);

    if (confirmed) {
      const deleteCategory = fetch(`http://localhost:3000/api/category/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        cache: 'no-store'
      })
      .then((res) => res && router.push(`/`))
      .catch((error) => {
        console.log('Error deleting category in DeleteCategoryButton:', error)
        alert('Problem deleting category. Please try again.')
      })
    }
  }

  return (
    <Box textAlign='center'>
      <Button variant='contained' onClick={confirmDelete}>
        Delete Category
      </Button>
    </Box>
  )
}

export default DeleteCategory

/* PREVIOUS WORKING CODE
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

*/