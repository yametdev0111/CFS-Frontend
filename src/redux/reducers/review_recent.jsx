const initialState = [
];;

const getTimeAndDate = val => {
  const parts = val.split('T');
  const dates = parts[0].split('-');
  const date = dates[1] + '/' + dates[2] + '/' + dates[0];
  const times = parts[1].split('.')[0].split(':');
  const time = (times[0] === "12" ? "12" : (parseInt(times[0]) % 12))
             + ':' + times[1]
             + (parseInt(times[0]) > 11 ? ' PM' : ' AM');
  return {
    time: time,
    date: date
  };
}

const reducer = (state = initialState, action) => {
  if(action.type === "RecentReview"){
    const sortedPayload = action.payload.sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return dateB - dateA;
    });
    state = action.payload.map(val => ({
      ...val,
      createdAt: getTimeAndDate(val.createdAt)
    }));
  }
  return state;
}

export default reducer;