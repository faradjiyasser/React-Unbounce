import React, { useState } from 'react'
import ServicesCards from './ServicesCards'
import ServicesData from '../data/ServicesData'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom';
const Services = () => {
    const [state] = useState({
        earnPic:"/assets/images/services/earnpic01.png",
        earnLogo:"/assets/images/earnworthy-logo.png",
        trafficPic:"/assets/images/services/traffic01.png"
    })
  return (
    <div className="services">
        <div className="container">
            <div className="row">
                    <div className="col-12 justify">
                        <div className="services__h1 animate">
                            <h1>650 Million Conversions and Counting</h1>
                        </div>
                    </div>
                    <div className="col-12 justify">
                        <div className="services__paragraph animate">
                            <p>After ten years of powering marketers, we've fine-tuned th conversion path and are committed to helping you simplify your workflow, launch faster, and make your business boom.</p>
                        </div>
                    </div>
                    
                {ServicesData.map((data)=>(
                    <ServicesCards image={data.image} icon={data.icon} title={data.title} paragraph={data.paragraph} link={data.link} key={data.id} />
                ))}

                <div className="col-6 justify">
                    <div className="services__earnpic animate">
                        <LazyLoadImage src={state.earnPic} alt={state.earnPic} />
                    </div>
                </div>
                <div className="col-6 justify">
                    <div className="services__earnbody animate">
                        <div className="services__earnbody__text">
                            <p>"We've seen <strong> convertion increases of over 70%,</strong> just by switching a client's landing page over to Unbounce. We're also able ro test and iterate more rapidl, which is a win for everyone."</p>
                        </div>
                        <div className="services__earnbody__smallText">
                            <p> <strong>Nicholas Scalice</strong>, Founder of Earnworthy</p>
                        </div>
                        <div className="services__earnbody__logo">
                            <img src={state.earnLogo} alt={state.earnLogo} />
                        </div>
                    </div>
                </div>
                <div className="services__traffic justify row">
                    <div className="col-6 justify">
                        <div className="services__traffic__body animate">
                            <div className="services__traffic__body__h1">
                                <h1>Smart Traffic</h1>
                            </div>
                            <div className="services__traffic__body__p">
                                <p>Get Al-powered optimization that automatically matches each visitor to the landing page most likely to convert.</p>
                            </div>
                            <div className="services__traffic__body__link">
                                <Link to={"/"}>Learn More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 justify">
                        <div className="services__traffic__image animate">
                            <LazyLoadImage src={state.trafficPic} alt={state.trafficPic} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services