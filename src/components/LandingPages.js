import React from 'react'
import Cards from './Cards'
import CardsData from '../data/CardsData'
const LandingPages = () => {
    const video = "/assets/videos/seo.mp4";
  return (
    <div className="landing">
        <div className="container">
            <div className="row justify maxwidth80">
                <div className="landing__heading animate">
                    <h1>design beautiful landing pages that convert more</h1>
                </div>
                <p className="landing__paragraph animate">
                    The secret's out, While websites are great for information and exploration, they're duds at turning traffic into revenue. With Unbounce, you can create and optimize dedicated landing pages that prompt your visitors with one focused goal instead od leaving them to wander a site full of distractions.
                </p>
                <div className="col-12 justify">
                    <div className="landing__video animate">
                        <video src={video} autoPlay muted loop={true} ></video>
                    </div>
                </div>

                {CardsData.map((card)=>(
                    <Cards icon={card.icon} title={card.title} paragraph={card.paragraph} key={card.title} />
                ))}
                <div className="col-12 justify">
                    <div className="landing__subheading animate"><span></span></div>
                </div>
                <div className="col-12 justify">
                    <h2 className="landing__subheading mt-30 animate">
                        See the Difference Landing Pages Can Make
                    </h2>
                </div>
                <input type="button" value="Learn More" className="btn-light mt-30"/>
            </div>
        </div>
    </div>
  )
}

export default LandingPages