import Image from 'next/image'
import styles from './page.module.css'
import Thumbnail from '@/components/Thumbnail'
import DeleteCategory from '@/components/DeleteCategory'

const testProps = {
  name: 'Math and raggle and fraggle',
  image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/EasternGraySquirrel_GAm.jpg'
}

export default function Home() {
  return (
    <>
      <Thumbnail name={testProps.name} image={testProps.image}/>
      <DeleteCategory />
    </>
  )
}
