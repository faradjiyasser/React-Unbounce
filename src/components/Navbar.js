import { useContext, useEffect } from "react";
import { AiOutlineSearch, AiOutlineDown } from "react-icons/ai";
import ArrowContext from "../animations/ArrowContext";

const Navbar =()=>{
    const logo = "/assets/images/unbounce-pink-logo.png";
    const {arrow:{products, solutions, learn},setArrow} = useContext(ArrowContext);
    const navAnimation =()=>{
        const elements = document.querySelectorAll(".full");
        const navPosition = elements[0].getBoundingClientRect().top;
        if(navPosition < 0){
            elements[0,1].classList.add("light-nav")
            elements[0,1].classList.remove("dark-nav")
        }else if(navPosition === 0){
            elements[0,1].classList.add("dark-nav")
            elements[0,1].classList.remove("light-nav")
        } 

    }
    useEffect(()=>{
        window.addEventListener("scroll",navAnimation);
    },[])

    return(
        <div className="justify full">
            <div className="navbar full">
                <div className="navbar__elements">
                    <div className="navbar__elements__logo">
                        <img src={logo} alt={logo} />
                    </div>
                    <ul className="navbar__elements__body" >
                        <li className="navbar__elements__body__li hover-underline-animation" onMouseOver={()=>setArrow({type:"toggle1"})} onMouseOut={()=>setArrow({type:""})}>products <AiOutlineDown size={12} className={ products ? "up-arrow" : "down-arrow"} /></li>

                        <li className="navbar__elements__body__li hover-underline-animation" onMouseOver={()=>setArrow({type:"toggle2"})} onMouseOut={()=>setArrow({type:""})}>solutions <AiOutlineDown size={12} className={ solutions ? "up-arrow" : "down-arrow"} /></li>

                        <li className="navbar__elements__body__li hover-underline-animation">pricing</li>

                        <li className="navbar__elements__body__li hover-underline-animation" onMouseOver={()=>setArrow({type:"toggle3"})} onMouseOut={()=>setArrow({type:""})}>learn <AiOutlineDown size={12} className={ learn ? "up-arrow" : "down-arrow"} /></li>
                        
                        <li className="navbar__elements__body__li hover-underline-animation">contact</li>
                    </ul>
                    <div className="navbar__elements__end">
                        <div className="navbar__elements__end__ele"><AiOutlineSearch size={22} className="mt-05 searchicon" color={"rgb(255, 60, 93)"}/> </div>
                        <input type="button" value="log in" className="navbar__elements__end__ele btn-default" />
                        <input type="button" value= "start my free trial" className="navbar__elements__end__ele btn-default-r trial" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;