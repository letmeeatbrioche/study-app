import NoteView from '@/components/NoteView'
import React from 'react'

const testProps = {
  name: 'Math and raggle and fraggle',
  image: 'https://s3-eu-west-1.amazonaws.com/media.squirrelaccord.uk/2021/09/AdobeStock_239716417_Isle_of_Wight_square_256.jpg',
  text: `"They use a mental, spatial map in order to find it. Think of a squirrel GPS. And they go off of, okay there's a rock here, and a tree there, the nut is somewhere between there," Tekiela said. Then, they use their sense of smell to find the exact location, even under the snow."`,
  title: 'How squirrels find their burried food',
  category: 'Squirrels'
}

type Props = {}

const NoteViewPage = (props: Props) => {
  return (
    <NoteView image={testProps.image} text={testProps.text} title={testProps.title} category={testProps.category} />
  )
}

export default NoteViewPage