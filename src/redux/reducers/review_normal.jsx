const initialState = {
  rating: "",
  review: ""
}

const reducer = (state = initialState, action) => {
  if(action.type === "NormalReviewEdited"){
    console.log("Incoming Normal Rating Edited Action", action.payload, action);
    state = action.payload;
  }
  return state;
}

export default reducer;