import React from 'react'
import SaveNoteButton from './SaveNoteButton'
import DiscardEditButton from './DiscardEditButton'
import CategoryDropdown from './CategoryDropdown'
import ImageUpload from './ImageUpload'

type Props = {}

const NoteEditCreate = (props: Props) => {
  return (
    <div className='form'>
      <h1>Note Edit/Create</h1>
      <DiscardEditButton />
      <form>
        <input type='text' placeholder='Title' />
        <CategoryDropdown />
        <ImageUpload />
        <input type="text" placeholder='Notes...' />
        <SaveNoteButton />
      </form>
    </div>
  )
}

export default NoteEditCreate