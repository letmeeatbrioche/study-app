const categories = ['Squirrels', 'Category 1', 'Category 2', 'Category 3', 'Category 4'];

type Note = {
  image: string,
  text: string,
  title: string,
  category: string,
}

const stubs: object[] = [
  {
    image: 'https://s3-eu-west-1.amazonaws.com/media.squirrelaccord.uk/2021/09/AdobeStock_239716417_Isle_of_Wight_square_256.jpg',
    text: `"They use a mental, spatial map in order to find it. Think of a squirrel GPS. And they go off of, okay there's a rock here, and a tree there, the nut is somewhere between there," Tekiela said. Then, they use their sense of smell to find the exact location, even under the snow."`,
    title: 'How squirrels find their burried food',
    category: 'Squirrels',
  },

  {
    image: 'https://i.pinimg.com/474x/ab/2e/6b/ab2e6b37c93ca5fc4af0037eca066e37.jpg',
    text: `"Squirrels sleep either in trees or in underground burrows at night. After a busy day of playing around, searching for and burying food, they retreat to their nests at night to sleep. Tree squirrels sleep in dens or nests at night."`,
    title: 'Where squirrels live',
    category: 'Squirrels',
  }
]

export default stubs