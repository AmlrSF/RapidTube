import React from 'react';
import './categories.css';

const categoryItems  = [
  'tout',
  'jeux video',
  'Speedrun',
  'Dream',
  'react',
  'Programmation informatique',
  'mix',
  'pewdiepie',
  'brawlhala',
  'counter strike : Global Offensive',
  'Histoire',
  'minecraft pocket edition',
  'fonctions',
  'chimie organic',
  'intelligence artificielle',
  'Alogorithme',
  'base de donneé',
  'en direct',
  'jeux de vidéo stratégie',
]

const Categories = ({category,setCategory}) => {
  return (
    <div className='categories'>
      {categoryItems.map(categoryItem=>(
        <button key={categoryItem}
          onClick={()=>{
            setCategory(categoryItem)
          }}
          style={{backgroundColor:categoryItem === category ?
             'red' : '#000'}}
          className='category  border-0 py-2 px-3d text-light  badge badge-pill'>
          {categoryItem}
        </button>
      ))}
    </div>
  )
}

export default Categories