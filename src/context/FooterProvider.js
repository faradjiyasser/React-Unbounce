import { useState } from "react";
import FooterContext from "./FooterContext";
import FooterData from "../data/FooterData";
const FooterProvider = (props) => {
  const [state] = useState(FooterData)
  return (
    <FooterContext.Provider value={{state}}>
      {props.children}
    </FooterContext.Provider>
  )
}

export default FooterProvider