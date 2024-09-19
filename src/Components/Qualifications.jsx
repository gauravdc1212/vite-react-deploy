import React from 'react'
import Card from './Card'
import image11 from '../assets/Kiet.jpg'
import image12 from '../assets/Rsm2.jpeg'
import image13 from '../assets/Shikhar.jpg'

const Qualifications = () => {
    let Cards = [{
        id:1,
        image:image11,
        name:"KIET Group of Intitutions",
        description:"Currently I am pursuing Master of Computer Application in Kiet Group of Institution",
        link:"https://www.kiet.edu/"
       },
       {
         id:2,
         image:image12,
         name:"RSM Degree College" ,
         description:"I am a graduate in Bachelor of Science(Hons) in Maths with 67.5%",
         link:"https://rsmcollege.edu.in/"
       },{
         id:3,
         image:image13,
         name:"Shikhar Sr. Sec. School",
         description:"I passed my 10th standard with 75.2% and my Intermediate with 78.5% marks",
         link:"https://www.shikharschool.in/"
       }]
     
  return (
    <>
        <div className='container'>
        <div className='row'>
    {
    Cards.map(item =><Card key={item.id} image={item.image} name={item.name} description={item.description} link={item.link}></Card>)
}
    </div>
    </div>
    </>
  )
}

export default Qualifications











