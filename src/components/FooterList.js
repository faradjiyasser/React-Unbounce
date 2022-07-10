import { Link } from 'react-router-dom';
const FooterList = ({route, categorieName}) => {
  return (
    <Link to={route} className="footer__content__links__link animate">
      <li className="footer__content__links__li">
        {categorieName}
      </li>
    </Link>   
  )
}

export default FooterList