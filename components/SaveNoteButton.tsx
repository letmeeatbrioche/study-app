import React from 'react'

type Props = {
  id?: string
}

const SaveNoteButton = (props: Props) => {
  return (
    // Functions:
      // Change submit button behavior depending on if creating or editing a note
      // Editing a note will require (I think) a note id prop
    <button type='submit'>SaveNoteButton</button>
  )
}

export default SaveNoteButton