import axios from "../axiosConfig"

export const sendDetailReview = review => {
  axios.post("/detail/add", review)
    .then(response => {
      console.log(response.data.result ? "Successed!" : "Failed.")
    })
    .catch(error => { console.error(error); });
}