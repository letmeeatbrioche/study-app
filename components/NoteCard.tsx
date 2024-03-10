import { Card, CardActionArea, CardContent, CardMedia, Grid } from '@mui/material'
import React from 'react'

type Props = {
  image: string,
  text: string,
  title: string,
  category: string,
  id: string
}

const NoteCard = (props: Props) => {
  // let text = props.text;
  // const truncatedText = text.slice(0, 49);
  return (
    <Card sx={{ flex: '1 0 auto', maxWidth: 345 }}>
      <CardActionArea href={`/note-view/${props.id}`}>
        <CardMedia
        sx={{ height: 140 }}
        image={props.image}
        title={`${props.title} image`} />

        <CardContent>
          <h2 className='note-title'>{props.title}</h2>
          {/* <p className='note-card-text'>{props.text}</p> */}
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default NoteCard