"use client"
import React, { useState } from 'react'

type Props = {}

const CategoryDropdown = (props: Props) => {
  const options = ['Category 1', 'Category 2', 'Category 3'];
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className='dropdown-container'>
      <div className='dropdown-button' onClick={() => setIsActive(!isActive)}>{selected}</div>

      {isActive &&
        <div className='dropdown-menu'>
          {options.map((option) =>
            <div className='dropdown-item' onClick={() => {setSelected(option); setIsActive(!isActive)}}>{option}</div>
          )}
        </div>
      }
    </div>
  )
}

export default CategoryDropdown