import React from 'react';

const Card = ({ image,name, description,link }) => {
    return (
        <>
        <div className="col col-lg-4 col-md-4 mb-2">
            <div className="card border-3 border-primary " style={{ width: 400 }}>
              <a href={link}><img className="card-img-top" style={{ height: 250 }} src={image} alt="Card image cap" /></a>
              <div className="card-body">
                <h5 className="card-title fs-1 fw-bold text-center">{name}</h5>
                <p className="card-text fs-6">{description}</p>
              </div>
            </div>
          </div>

        </>
    );
};

export default Card;
