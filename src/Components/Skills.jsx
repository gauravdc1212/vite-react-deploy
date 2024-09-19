import React from 'react'
import image4 from '../assets/html.png'
import image5 from '../assets/Css.jpeg'
import image6 from '../assets/bootstrap.jpg'
import image7 from '../assets/Javascript.webp'
import image8 from '../assets/react.png'
import './Skills.css'
import image9 from '../assets/Cprogramming.jpeg'
import Card3 from './Card3'

const Skills = () => {
  let skill = [{
    id: 1,
    image: image4,
    name: "HTML"
  },
  {
    id: 2,
    image: image5,
    name: "CSS"
  }, {
    id: 3,
    image: image6,
    name: "BOOTSTRAP"
  }, {
    id: 4,
    image: image7,
    name: "JAVASCRIPT"
  }, {
    id: 5,
    image: image8,
    name: "REACT"
  }, {
    id: 6,
    image: image9,
    name: "C LANGUAGE"
  },
  ]
  return (
    <>

      <div className='container'>
        <div className='row'>
          {
            skill.map(item => <Card3 key={item.id} image={item.image} name={item.name}></Card3>)
          }
        </div>
      </div>


    </>
  )
}

export default Skills
