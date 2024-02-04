import React from 'react'
import SaveNoteButton from './SaveNoteButton'
import DiscardEditButton from './DiscardEditButton'

type Props = {}

const NoteEditCreate = (props: Props) => {
  return (
    <div className='form'>
      <DiscardEditButton />
      <form>
        <input type='text' placeholder='Title' />
        <input type='image'></input>
        <input type="text" placeholder='Notes...' />
        <SaveNoteButton />
      </form>
    </div>
  )
}

export default NoteEditCreate