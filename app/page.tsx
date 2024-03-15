import Thumbnail from '@/components/Thumbnail'
import { Box, Button, Grid, Link, Paper } from '@mui/material'
import { getCategories } from '@/utils/requests'
import { Category } from '@/models/models'
import TestButton from '@/components/TestButton'


const testProps1 = {
  image: 'https://s3-eu-west-1.amazonaws.com/media.squirrelaccord.uk/2021/09/AdobeStock_239716417_Isle_of_Wight_square_256.jpg',
  text: `"They use a mental, spatial map in order to find it. Think of a squirrel GPS. And they go off of, okay there's a rock here, and a tree there, the nut is somewhere between there," Tekiela said. Then, they use their sense of smell to find the exact location, even under the snow."`,
  title: 'How squirrels find their burried food',
  category: 'Squirrels',
  categories: ['Squirrels', 'Category 1', 'Category 2', 'Category 3', 'Category']
}

const testProps2 = {
  image: 'https://i.pinimg.com/474x/ab/2e/6b/ab2e6b37c93ca5fc4af0037eca066e37.jpg',
  text: `"Squirrels sleep either in trees or in underground burrows at night. After a busy day of playing around, searching for and burying food, they retreat to their nests at night to sleep. Tree squirrels sleep in dens or nests at night."`,
  title: 'Where squirrels live',
  category: 'Squirrels',
  categories: ['Category 1', 'Category 2', 'Interior Design', 'Squirrels']
}

export default async function Home() {
  const categories = await getCategories();
  return (
    <>
      <h1 className='your-categories'>Your Categories</h1>
      <Grid className='categories-container' container rowSpacing={1} columnSpacing={8} style={{width: '70%', margin: '50px auto'}}>
        {categories.map((category: Category) => {
          return (
            <Grid item xs={3} style={{height: '240px', maxWidth: '240px'}}>
              <Thumbnail key={category._id} categoryName={category.name} categoryId={category._id}/>
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

// rowSpacing={3} columns={4} justifyContent='space-between'

