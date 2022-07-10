

const ArrowReducer = (state,action) => {
  if (action.type === "toggle1"){
    return {
      ...state,
      products:true,
      solutions:false,
      learn:false,
    }
    }else if(action.type === "toggle2"){
      return {
        ...state,
        products:false,
        solutions:true,
        learn:false,
      }
    }else if(action.type === "toggle3"){
      return {
        ...state,
        products:false,
        solutions:false,
        learn:true,
      }
    }else{
      return {
        ...state,
        products:false,
        solutions:false,
        learn:false,
      }
    }
  }


export default ArrowReducer