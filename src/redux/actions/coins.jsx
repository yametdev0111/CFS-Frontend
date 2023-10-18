import axios from "../axiosConfig"

export const send = review => {
  axios.post("/normal/add", review)
    .then(response => {
      console.log(response.data.result ? "Successed!" : "Failed.")
    })
    .catch(error => { console.error(error); });
}

export const receive = () => dispatch => {
  axios.get("/normal/get")
  .then(response => {
    if(response.data.result){
      dispatch({
        type: "Review",
        payload: response.data.data
      });
    }
  })
}

export const receiveRecent = count => dispatch => {
  axios.get("/normal/recent", count)
  .then(response => {
    if(response.data.result){
      dispatch({
        type: "RecentReview",
        payload: response.data.data
      });
    }
  })
}