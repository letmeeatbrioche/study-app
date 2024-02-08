"use client"
import React, { useState } from 'react'

type Props = {
  currentCategory?: string,
  categories: string[]
}

const CategoryDropdown = (props: Props) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState(props.currentCategory || props.categories[0]);

  return (
    <div className='dropdown-container'>
      <div className='dropdown-button' onClick={() => setIsActive(!isActive)}>{selected}</div>

      {isActive &&
        <div className='dropdown-menu'>
          {props.categories.map((category) =>
            <div className='dropdown-item' onClick={() => {setSelected(category); setIsActive(!isActive)}}>{category}</div>
          )}
        </div>
      }
    </div>
  )
}

export default CategoryDropdown