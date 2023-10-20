import { Typography } from "@mui/material"

export const Label = (props) => {
  const { text } = props;

  return (
    <Typography
      component="h1"
      sx={{
        fontWeight: 800,
        mb: 2,
        letterSpacing: 1,
        mt: 3
      }}
    >
      {text}
    </Typography>
  )
}