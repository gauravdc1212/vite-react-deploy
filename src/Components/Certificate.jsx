import React from 'react'
import image21 from '../assets/HTMLCertificate.jpg'
import image22 from '../assets/CSSCertificate.jpg'
import image23 from '../assets/BootstrapCertificate.jpg'
import image24 from '../assets/DBMSCertificate_page-0001.jpg'
import image25 from '../assets/JavaCertificate_page-0001.jpg'
import Card2 from './Card2'





const Certificate = () => {
    let certificate = [{
        id:1,
        image:image21
    },
    {
        id:1,
        image:image22
    },
    {
        id:1,
        image:image23
    },
    {
        id:1,
        image:image24
    },
    {
        id:1,
        image:image25
    },
    {
        id:1,
        image:image21
    }
]
  return (
    <>
       <div className='container'>
        <div className='row'>
    {
    certificate.map(item =><Card2 key={item.id} image={item.image}></Card2>)
}
    </div>
    </div>
    </>
  )
}

export default Certificate
 