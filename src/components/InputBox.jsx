import { TextField } from "@mui/material";

export const InputBox = (props) => {
  const {value, func} = props;

  return (
    <>
      <TextField
        id="outlined-multiline-static"
        label=""
        placeholder="Write a review what you felt."
        multiline
        rows={5}
        fullWidth
        defaultValue=""
        value={value}
        color="primary"
        onChange={ event => {
          func(event.target.value);
        }}
      />
    </>
  )
}