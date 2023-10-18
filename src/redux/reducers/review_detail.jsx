const initialState = [
  {
    data: [0, 0, 0, 0, 0],
    label: 'Series A',
    stack: 'total',
  },
  {
    data: [0, 0, 0, 0, 0],
    label: 'Series B',
    stack: 'total',
  },
  {
    data: [0, 0, 0, 0, 0],
    label: 'Series C',
    stack: 'total',
  }
];

const reducer = (state = initialState, action) => {
  if(action.type === "ReviewDetailEdited"){
    console.log("Incoming Detail Rating Edited Action", action.payload.length, action);
    state = action.payload;
  }
  return state;
}

export default reducer;