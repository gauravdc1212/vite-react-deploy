import React from 'react'

const Card2 = ({ image }) => {
    return (
        <>
            <div className='col-lg-4 mb-2'>
                <div className="card border-primary border-3" style={{ width: '25rem' }}>
                    <img src={image} className="card-img-top" alt="..." />
                </div>

            </div>
        </>
    )
}

export default Card2
