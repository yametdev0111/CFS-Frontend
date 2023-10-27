import { Typography } from "@mui/material"

export const LabelSpace = (props) => {
  const { text } = props;

  return (
    <Typography
      component="h1"
      sx={{
        fontFamily: "Arial Light",
        fontWeight: 800,
        mb: 2,
        letterSpacing: 1,
        mt: 3,
        lineHeight:0
      }}
    >
      {text}
    </Typography>
  )
}