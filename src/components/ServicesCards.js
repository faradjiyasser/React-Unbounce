import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component'
const ServicesCards = ({image , title, paragraph,link}) => {
    return (
      <div className="col-4 justify">
        <div className="services__card animate">
          <Link to={link} className="none services__card__body ">
                <div className="services__card__body__images">
                    <div className="services__card__body__images__image">
                        <LazyLoadImage src={image} alt={image} />
                    </div>
                </div>
                <h1 className="services__card__body__title">
                    {title}
                </h1>

                <p className="services__card__body__paragraph">
                    {paragraph}
                </p> 
          </Link>
          </div>
      </div>
    )
  }
  
  export default ServicesCards