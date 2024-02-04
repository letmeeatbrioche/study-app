import React from 'react'
import SaveNoteButton from './SaveNoteButton'
import DiscardEditButton from './DiscardEditButton'
import CategoryDropdown from './CategoryDropdown'

type Props = {}

const NoteEditCreate = (props: Props) => {
  return (
    <div className='form'>
      <DiscardEditButton />
      <form>
        <input type='text' placeholder='Title' />
        <CategoryDropdown />
        <input type='image'></input>
        <input type="text" placeholder='Notes...' />
        <SaveNoteButton />
      </form>
    </div>
  )
}

export default NoteEditCreate