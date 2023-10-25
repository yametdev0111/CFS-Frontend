const initialState = "";

const reducer = ( state = initialState, action ) => {
  if(action.type === "Company"){
    console.log("Company", action.payload);
    state = action.payload;
  }
  return state;
}

export default reducer;