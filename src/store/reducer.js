const initialState = {
    code : ''
}

const reducer = (state =  initialState, action) => {
   if(action.type === 'CODE'){
   	  console.log("Reducer", action.val)
      return{
          code : action.val
      }
   }   
   else{
	  console.log("REducer", state.code)
      return state   
   }
}

export default reducer;