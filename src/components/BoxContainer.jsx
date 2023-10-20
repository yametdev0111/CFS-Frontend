import { Box } from "@mui/material"

export const BoxContainer = ({ children }) => {
  return(
    <>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        maxWidth="27rem"
        width="100%"
        sx={{
          p: { xs: "1rem", sm: "2rem" },
          borderRadius: "15px",
          border: "1px solid #0089ff",
          color: "black"
        }}
      >
        { children }
      </Box>
    </>
  )
}