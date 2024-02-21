import NoteEdit from '@/components/NoteEdit'
import { Note } from '@/models/models';
import { getCategories, getNote } from '@/utils/requests';
import { Paper } from '@mui/material'
import React from 'react'

// Function to get all categories
const getAllCategories = () => {
  let categories = ['Category 1', 'Category 2', 'Category 3', 'Squirrels'];
  return categories;
}

type Props = {
  image: string,
  text: string,
  title: string,
  category: string,
  categories: string[],
  id: string
}

const testProps = {
  name: 'Math and raggle and fraggle',
  image: 'https://s3-eu-west-1.amazonaws.com/media.squirrelaccord.uk/2021/09/AdobeStock_239716417_Isle_of_Wight_square_256.jpg',
  text: `"They use a mental, spatial map in order to find it. Think of a squirrel GPS. And they go off of, okay there's a rock here, and a tree there, the nut is somewhere between there," Tekiela said. Then, they use their sense of smell to find the exact location, even under the snow."`,
  title: 'How squirrels find their burried food',
  category: 'Squirrels',
  categories: ['Squirrels', 'Category 1', 'Category 2', 'Category 3', 'Category 4']
}

const editNote = async ({ params }: { params: { id: string } }, props: Props) => {
  // Change to real get all categories request function
  // Change href in Edit button to get the note id
  // Change props to be from the note data
  // const categories = await getAllCategories();
  const categories = await getCategories();
  const note = await getNote(params.id);
  return (
    <>
      <NoteEdit image={note.image} text={note.text} title={note.title} category={note.category} categories={categories} id={note.id} />
    </>
  )
}

export default editNote
















// OLD CODE
// import NoteEdit from '@/components/NoteEdit'
// import { Note } from '@/models/models';
// import { getCategories } from '@/utils/requests';
// import { Paper } from '@mui/material'
// import React from 'react'

// // Function to get all categories
// const getAllCategories = () => {
//   let categories = ['Category 1', 'Category 2', 'Category 3', 'Squirrels'];
//   return categories;
// }

// type Props = {
//   image: string,
//   text: string,
//   title: string,
//   category: string,
//   categories: string[],
//   id: string
// }

// const testProps = {
//   name: 'Math and raggle and fraggle',
//   image: 'https://s3-eu-west-1.amazonaws.com/media.squirrelaccord.uk/2021/09/AdobeStock_239716417_Isle_of_Wight_square_256.jpg',
//   text: `"They use a mental, spatial map in order to find it. Think of a squirrel GPS. And they go off of, okay there's a rock here, and a tree there, the nut is somewhere between there," Tekiela said. Then, they use their sense of smell to find the exact location, even under the snow."`,
//   title: 'How squirrels find their burried food',
//   category: 'Squirrels',
//   categories: ['Squirrels', 'Category 1', 'Category 2', 'Category 3', 'Category 4']
// }

// const editNote = async (props: Props) => {
//   // Change to real get all categories request function
//   // Change href in Edit button to get the note id
//   // Change props to be from the note data
//   // const categories = await getAllCategories();
//   const categories = await getCategories();
//   return (
//     <>
//       <NoteEdit image={testProps.image} text={testProps.text} title={testProps.title} category={testProps.category} categories={testProps.categories} id={note.id} />
//     </>
//   )
// }

// export default editNote