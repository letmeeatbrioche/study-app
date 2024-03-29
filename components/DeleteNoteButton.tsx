"use client"
import { collections, connectToDatabase } from '@/db'
import { Button } from '@mui/material'
import { ObjectId } from 'mongodb'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { NextResponse } from 'next/server'
import React from 'react'

type Props = {
  id: string,
  categoryId: string
}

// const key: string = `http://localhost:3000/api/note/${id}`;

// const fetcher = async () => (
//   fetch(key)
//     .then(res => res.json())
//     .catch(error => error)
// )

const DeleteNoteButton = (props: Props) => {
  // const { data, error } = () => useSWR(key, fetcher);
  const router = useRouter();
  const path = usePathname();
  const id = path.slice(path.lastIndexOf('/') + 1);



  const confirmDelete = () => {
    const confirmed = confirm(`Are you sure you want to delete this note? ID: ${id}`);
    if (confirmed) {
      const deleteNote = fetch(`http://localhost:3000/api/note/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        cache: 'no-store'
      })
      .then((res) => res && router.push(`/`))
      .catch((error) => {
        console.log('Error deleting note in DeleteNoteButton:', error)
        alert('Problem deleting note. Please try again.')
      })
    }
  }

  return (
    <Button onClick={() => confirmDelete()} variant="contained">
        Delete Note
    </Button>
  )
}

export default DeleteNoteButton