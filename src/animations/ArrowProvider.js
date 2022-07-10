import { useReducer } from "react";
import ArrowContext from "./ArrowContext";
import ArrowReducer from "./ArrowReducer";

const ArrowProvider = (props) => {
    const [arrow,setArrow] = useReducer(ArrowReducer,{
      products:false,
      solutions:false,
      learn:false,
    })
  return (
    <ArrowContext.Provider value={{arrow,setArrow}}>
            {props.children}
    </ArrowContext.Provider>
  )
}

export default ArrowProvider;