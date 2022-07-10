import { BsLinkedin, BsTwitter, BsInstagram, BsGoogle } from "react-icons/bs";
import { Link } from 'react-router-dom';

const FooterBottom = () => {
  return (
    <div className="footer__content__bottom row col-12">
        <div className="footer__content__bottom__rights col-6">
            <span>&copy;2022 Faradji Yasser.All rights reserved.</span> 
        </div>
        <ul className="footer__content__bottom__contact col-6 row">
            <li><Link to={"/"}>Security</Link></li>
            <li><Link to={"/"}>Privacy Policy</Link></li>
            <li><Link to={"/"}>Terms of Service</Link></li>
            <li><Link to={"/"}><BsTwitter className="twitter" size={20}/></Link></li>
            <li><Link to={"/"}><BsLinkedin className="linkedIn" size={20}/></Link></li>
            <li><Link to={"/"}><BsInstagram className="insta" size={20}/></Link></li>
            <li><Link to={"/"}><BsGoogle className="google" size={20}/></Link></li>  
        </ul>
    </div>
  )
}

export default FooterBottom