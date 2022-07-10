import React from 'react'
import PartnersData from '../data/PartnersData'
import { LazyLoadImage } from 'react-lazy-load-image-component'
const Partners = () => {
  return (
    <div className="container">
      <div className="partners">
      <div className="row">
          <div className="col-12">
            <h1 className="partners__h2">
              The #1 Landing page platform for +15,000 brands
            </h1>
          </div>
          <div className="col-12">
            <ul className="partners__companies row">
              {PartnersData.map((partner)=>(
                <div className="col-2 justify" key={partner.id}>
                  <li className=" partners__companies__image">
                  <LazyLoadImage src={partner.image} alt={partner.name} />
                  </li>
                </div>
              ))}
            </ul>
          </div>   
      </div>
      </div>
    </div>

  )
}

export default Partners;