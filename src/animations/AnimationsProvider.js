import { useEffect } from "react";
import AnimationsContext from "./AnimationsContext";

const AnimationsProvider = (props) => {
    const scrollAnimations = () =>{
        const elements = document.querySelectorAll(".animate");
        elements.forEach((element)=>{
            const elementPosition = element.getBoundingClientRect().top;
            const viewPortHeight = window.innerHeight - 140;
            if(elementPosition < viewPortHeight){
                element.classList.add("animated");
            } else {
                element.classList.remove("animated");
            }
        })
    }
    useEffect(()=>{
        window.addEventListener("scroll",scrollAnimations)
    },[])
  return (
    <AnimationsContext.Provider value>
        {props.children}
    </AnimationsContext.Provider>
  )
}

export default AnimationsProvider