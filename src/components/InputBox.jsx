import { TextField } from "@mui/material";

export const InputBox = (props) => {
  const { value, func, multiline, password, placeholder, inputProps } = props;

  return (
    <>
      <TextField
        id="outlined-multiline-static"
        label=""
        placeholder={placeholder}
        multiline={multiline}
        type={password ? "password" : "text"}
        rows={5}
        inputProps={{pattern: inputProps}}
        fullWidth
        defaultValue=""
        value={value}
        color="primary"
        onChange={(event) => {
          func(event.target.value);
        }}
      />
    </>
  );
};
