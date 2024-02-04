import Link from 'next/link'
import React from 'react'
import DeleteNoteButton from './DeleteNoteButton'

type Props = {
  image: string,
  text: string,
  title: string,
  category: string
}

// GET title, image, category, text from note by id

const NoteView = (props: Props) => {
  return (
    <>
      <h1>Note View</h1>
      <div className='note-view'>
        <h2 className='note-title'>{props.title}</h2>
        <h3 className='note-category'>{props.category}</h3>
        <div className='note-image' style={{background: `url(${props.image})`}}></div>
        <p>{props.text}</p>
        <Link href={'#'}>
          <button type='button'>Edit</button>
        </Link>
        <DeleteNoteButton />
      </div>
    </>
  )
}

export default NoteView