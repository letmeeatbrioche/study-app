"use client"
import React, { useState } from 'react'

type Props = {
  categories: string[]
  selectedCategory?: string,
  setSelectedCategory: Function,
  isActive: boolean,
  setIsActive: Function,
}

const CategoryDropdown = (props: Props) => {
  const [createdCategory, setCreatedCategory] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      props.setSelectedCategory(createdCategory);
      props.setIsActive(!props.isActive);
    }
  }

  <input type="text"  />
  return (
    <div className='dropdown-container'>
      <div className='dropdown-button' onClick={() => props.setIsActive(!props.isActive)}>{props.selectedCategory}</div>

      {props.isActive &&
        <div className='dropdown-menu'>
          {props.categories.map((category) =>
            <div className='dropdown-item'
              onClick={() => {
                props.setSelectedCategory(category)
                props.setIsActive(!props.isActive)
              }}>
              {category}
            </div>
          )}
          <div className='dropdown-item' onKeyDown={handleKeyDown}>
            <input type="text" placeholder='+ New category' value={createdCategory} onChange={(e) => setCreatedCategory(e.target.value)} />
          </div>
        </div>
      }
    </div>
  )
}

export default CategoryDropdown