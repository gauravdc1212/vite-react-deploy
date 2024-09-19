import React from 'react'

const Card3 = ({image,name}) => {
  return (
    <>
       <div className="col col-lg-4 col-md-6 mb-2">
            <div className="card border-3 border-primary " style={{ width: 400 }}>
              <img className="card-img-top" style={{ height: 250 }} src={image} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title fs-1 fw-bold text-center">{name}</h5>
                <div className="outer1">
                    <div className="inner1"></div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Card3
