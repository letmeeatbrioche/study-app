import NoteView from '@/components/NoteView'
import React from 'react'
import { getNote } from '@/utils/requests'

const testProps = {
  name: 'Math and raggle and fraggle',
  image: 'https://s3-eu-west-1.amazonaws.com/media.squirrelaccord.uk/2021/09/AdobeStock_239716417_Isle_of_Wight_square_256.jpg',
  text: `"They use a mental, spatial map in order to find it. Think of a squirrel GPS. And they go off of, okay there's a rock here, and a tree there, the nut is somewhere between there," Tekiela said. Then, they use their sense of smell to find the exact location, even under the snow."`,
  title: 'How squirrels find their burried food',
  category: 'Squirrels',
  id: 'xxxxxxxxxxxxx'
}

type Props = {
  _id: string,
  image: string,
  text: string,
  title: string,
  category: string
}

const NoteViewPage = async ({ params }: { params: { id: string } }, props: Props) => {
  const note = await getNote(params.id);
  return (
    <NoteView image={note.image} text={note.text} title={note.title} category={note.category} id={note.id} />
  )
}

export default NoteViewPage