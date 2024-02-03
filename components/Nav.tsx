import Link from 'next/link'
import React from 'react'

type Props = {}

const Nav = (props: Props) => {
  return (
    <div className='nav'>
      <Link href={"/"}>Raggle Fraggle</Link>
    </div>
  )
}

export default Nav