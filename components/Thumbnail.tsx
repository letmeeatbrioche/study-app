import { Box, Paper } from '@mui/material'
import { url } from 'inspector'
import { ObjectId } from 'mongodb'
import Link from 'next/link'
import React from 'react'

type Props = {
  categoryName: string,
  image?: string,
  key: string,
  categoryId: string | undefined | ObjectId
}

/*
Square that shows text in the middle which will be cut off...
if it doesn't fit.

Note card thumbnails will be the same, but if there is an image,
it will show the image with title text on top.
*/
const Thumbnail = (props: Props) => {
  return (
    <Link className='category-link' href={`/category/${props.categoryId}`}>
      <Paper elevation={3} square={false} className='category-thumbnail'>
        {/* <div className='category-thumbnail' style={{background: `url(${props.image}) center`}}> */}
            <p>{props.categoryName}</p>
        {/* </div> */}
      </Paper>
    </Link>
  )
}

export default Thumbnail