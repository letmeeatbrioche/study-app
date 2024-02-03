import { url } from 'inspector'
import Link from 'next/link'
import React from 'react'

type Props = {
  name: string,
  image?: string
}

/*
Square that shows text in the middle which will be cut off...
if it doesn't fit.

Note card thumbnails will be the same, but if there is an image,
it will show the image with title text on top.
*/
const Thumbnail = (props: Props) => {
  return (
    <Link href={'#'}>
      <div
        className='thumbnail'
        style={{background: `url(${props.image}) center`}}>
          {`${props.name.slice(0, 15)}...`}
      </div>
    </Link>
  )
}

export default Thumbnail