import axios from "../axiosConfig"

export const sendDetailReview = review => {
  axios.post("/detail/add", review)
    .then(response => {
      console.log(response.data.result ? "Successed!" : "Failed.")
    })
    .catch(error => { console.error(error); });
}

export const receiveDetailReview = () => dispatch => {
  axios.get("/detail/get")
  .then(response => {
    if(response.data.result){
      console.log("Detail Review Response ------------------------------>\n", response.data.data, "\n");
      dispatch({
        type: "ReviewDetailEdited",
        payload: response.data.data
      });
    }
  })
}