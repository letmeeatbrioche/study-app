import Image from 'next/image'
import styles from './page.module.css'
import Thumbnail from '@/components/Thumbnail'
import DeleteCategory from '@/components/DeleteCategory'
import NoteView from '@/components/NoteView'
import NoteEditCreate from '@/components/NoteEditCreate'
import ImageUpload from '@/components/ImageUpload'
import Button from '@mui/material/Button';

const testProps = {
  name: 'Math and raggle and fraggle',
  image: 'https://s3-eu-west-1.amazonaws.com/media.squirrelaccord.uk/2021/09/AdobeStock_239716417_Isle_of_Wight_square_256.jpg',
  text: `"They use a mental, spatial map in order to find it. Think of a squirrel GPS. And they go off of, okay there's a rock here, and a tree there, the nut is somewhere between there," Tekiela said. Then, they use their sense of smell to find the exact location, even under the snow."`,
  title: 'How squirrels find their burried food',
  category: 'Squirrels',
  categories: ['Category 1', 'Category 2', 'Category 3', 'Squirrels']
}

export default function Home() {
  return (
    <>
      <Thumbnail name={testProps.name} image={testProps.image}/>
      <DeleteCategory />
      <NoteView image={testProps.image} text={testProps.text} title={testProps.title} category={testProps.category} />
      <NoteEditCreate image={testProps.image} text={testProps.text} title={testProps.title} category={testProps.category} categories={testProps.categories} />
      <div className='spacer'></div>
    </>
  )
}