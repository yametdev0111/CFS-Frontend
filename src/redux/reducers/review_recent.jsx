const initialState = [
  {
    rating: 3,
    review: "Everything was good, but I have to wait a long time",
    createdAt: "2003-03-03",
  }
];;

const reducer = (state = initialState, action) => {
  if(action.type === "RecentReview"){
    console.log("Incoming Recent Reviews Action", action.payload.length, action);
    state = action.payload;
  }
  return state;
}

export default reducer;