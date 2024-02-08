import Image from 'next/image'
import styles from './page.module.css'
import Thumbnail from '@/components/Thumbnail'
import DeleteCategory from '@/components/DeleteCategory'
import NoteView from '@/components/NoteView'
import NoteEdit from '@/components/NoteEdit'
import ImageUpload from '@/components/ImageUpload'
import Button from '@mui/material/Button';
import { Box, Grid, Paper } from '@mui/material'

const testProps1 = {
  image: 'https://s3-eu-west-1.amazonaws.com/media.squirrelaccord.uk/2021/09/AdobeStock_239716417_Isle_of_Wight_square_256.jpg',
  text: `"They use a mental, spatial map in order to find it. Think of a squirrel GPS. And they go off of, okay there's a rock here, and a tree there, the nut is somewhere between there," Tekiela said. Then, they use their sense of smell to find the exact location, even under the snow."`,
  title: 'How squirrels find their burried food',
  category: 'Squirrels',
  categories: ['Squirrels', 'Category 1', 'Category 2', 'Category 3', 'Category','Category','Category','Category','Category']
}

const testProps2 = {
  image: 'https://i.pinimg.com/474x/ab/2e/6b/ab2e6b37c93ca5fc4af0037eca066e37.jpg',
  text: `"Squirrels sleep either in trees or in underground burrows at night. After a busy day of playing around, searching for and burying food, they retreat to their nests at night to sleep. Tree squirrels sleep in dens or nests at night."`,
  title: 'Where squirrels live',
  category: 'Squirrels',
  categories: ['Category 1', 'Category 2', 'Category 3', 'Squirrels']
}

// GET ALL CATEGORIES to show as thumbnails on the home page

export default function Home() {
  return (
    <>
      <Grid className='categories-container' container rowSpacing={3} columns={4} justifyContent='space-between' style={{width: '70%', margin: '0 auto'}}>
        {testProps1.categories.map((category) => (
          <Grid item xs={1}>
            <Thumbnail categoryName={category}/>
          </Grid>
        ))}
      </Grid>

      <DeleteCategory />
      <NoteView image={testProps1.image} text={testProps1.text} title={testProps1.title} category={testProps1.category} />
      <NoteView image={testProps2.image} text={testProps2.text} title={testProps2.title} category={testProps2.category} />
    </>
  )
}