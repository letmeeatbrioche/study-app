import NoteEdit from '@/components/NoteEdit'
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
  categories: string[]
}

const testProps = {
  name: 'Math and raggle and fraggle',
  image: 'https://s3-eu-west-1.amazonaws.com/media.squirrelaccord.uk/2021/09/AdobeStock_239716417_Isle_of_Wight_square_256.jpg',
  text: `"They use a mental, spatial map in order to find it. Think of a squirrel GPS. And they go off of, okay there's a rock here, and a tree there, the nut is somewhere between there," Tekiela said. Then, they use their sense of smell to find the exact location, even under the snow."`,
  title: 'How squirrels find their burried food',
  category: 'Squirrels',
  categories: ['Squirrels', 'Category 1', 'Category 2', 'Category 3', 'Category 4']
}

const editNote = async (props: Props) => {
  const categories = await getAllCategories();
  return (
    <>
      <NoteEdit image={testProps.image} text={testProps.text} title={testProps.title} category={testProps.category} categories={categories} />
    </>
  )
}

export default editNote