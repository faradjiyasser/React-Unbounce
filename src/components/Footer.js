import { useContext} from 'react'
import FooterList from './FooterList';
import FooterContext from '../context/FooterContext';
import FooterBottom from './FooterBottom';
const Footer = () => {
  const logo = "/assets/images/unbounce-black-logo.png";

  const {state:{headings ,Products, Solutions, Company, GetinTouch}} = useContext(FooterContext);
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="footer__content">
            <div className="footer__content__logo animate">
              <div className="col-12">
                <img src={logo} alt={logo} />
              </div>
            </div>

            <div className="footer__content__links row">
            <div className="col-3">
                <div className="footer__content__links__heading animate">
                  {headings.Products}
                </div>
                  {Products.map((object)=>( 
                      <FooterList route={object.route} key={object.id} categorieName={object.name} />
                  ))} 
              </div>
              <div className="col-3">
                <div className="footer__content__links__heading animate">
                  {headings.Solutions}
                </div>
                  {Solutions.map((object)=>( 
                      <FooterList route={object.route} key={object.id} categorieName={object.name} />
                  ))} 
              </div>
              <div className="col-3">
                <div className="footer__content__links__heading animate">
                  {headings.Company}
                </div>
                  {Company.map((object)=>( 
                      <FooterList route={object.route} key={object.id} categorieName={object.name} />
                  ))} 
              </div>
              <div className="col-3">
                <div className="footer__content__links__heading animate">
                  {headings.GetinTouch}
                </div>
                  {GetinTouch.map((object)=>( 
                      <FooterList route={object.route} key={object.id} categorieName={object.name} />
                  ))} 
              </div>       
            </div>
          </div>
          <FooterBottom />
        </div>
      </div>
    </div>
  )
}

export default Footer