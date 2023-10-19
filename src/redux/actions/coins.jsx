import axios from "../axiosConfig"

export const send = review => {
  axios.post("/normal/add", review)
    .then(response => {
      console.log(response.data.result ? "Successed!" : "Failed.")
    })
    .catch(error => { console.error(error); });
}